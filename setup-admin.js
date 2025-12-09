// Setup Admin & RBAC Tables
require('dotenv').config();
const mysql = require('mysql2');
const fs = require('fs');
const path = require('path');

// Create connection
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    multipleStatements: true
});

console.log('🔐 Starting Admin & RBAC setup...\n');

// Read SQL schema file
const schemaPath = path.join(__dirname, 'database', 'admin-schema.sql');
const sqlSchema = fs.readFileSync(schemaPath, 'utf8');

// Connect and execute schema
connection.connect((err) => {
    if (err) {
        console.error('❌ Connection failed:', err.message);
        process.exit(1);
    }

    console.log('✅ Connected to MySQL database');
    console.log('📝 Executing Admin & RBAC schema...\n');

    // Execute the SQL schema
    connection.query(sqlSchema, (err, results) => {
        if (err) {
            console.error('❌ Schema execution failed:', err.message);
            connection.end();
            process.exit(1);
        }

        console.log('✅ Admin & RBAC tables created successfully!\n');
        console.log('📊 Tables created:');
        console.log('   1. ✓ roles - User roles (super_admin, admin, user)');
        console.log('   2. ✓ user_roles - User-to-role assignments');
        console.log('   3. ✓ permissions - Granular permissions');
        console.log('   4. ✓ role_permissions - Role-to-permission mappings');
        console.log('   5. ✓ admin_activity_log - Admin action tracking');

        // Query roles
        connection.query('SELECT * FROM roles ORDER BY level DESC', (err, roles) => {
            if (err) {
                console.error('Error fetching roles:', err);
            } else {
                console.log('\n🎭 Roles created:');
                roles.forEach((role) => {
                    console.log(`   ${role.level === 100 ? '👑' : role.level === 50 ? '⚡' : '👤'} ${role.display_name} (Level: ${role.level})`);
                    console.log(`      ${role.description}`);
                });
            }

            // Query permissions count
            connection.query('SELECT COUNT(*) as count FROM permissions', (err, result) => {
                if (err) {
                    console.error('Error counting permissions:', err);
                } else {
                    console.log(`\n🔑 ${result[0].count} permissions created`);
                }

                // Query admin accounts
                connection.query(`
          SELECT u.email, u.first_name, u.last_name, r.role_name, r.display_name
          FROM users u
          JOIN user_roles ur ON u.id = ur.user_id
          JOIN roles r ON ur.role_id = r.id
          WHERE r.role_name IN ('super_admin', 'admin')
          ORDER BY r.level DESC
        `, (err, admins) => {
                    if (err) {
                        console.error('Error fetching admin accounts:', err);
                    } else {
                        console.log('\n👥 Admin accounts created:');
                        admins.forEach((admin) => {
                            const icon = admin.role_name === 'super_admin' ? '👑' : '⚡';
                            console.log(`   ${icon} ${admin.first_name} ${admin.last_name} - ${admin.email}`);
                            console.log(`      Role: ${admin.display_name}`);
                        });
                    }

                    console.log('\n🔐 Default credentials:');
                    console.log('   ┌─────────────────────────────────────────────────┐');
                    console.log('   │ SUPER ADMIN ACCOUNT                             │');
                    console.log('   ├─────────────────────────────────────────────────┤');
                    console.log('   │ Email:    superadmin@efin.co.in                 │');
                    console.log('   │ Password: SuperAdmin@2025                       │');
                    console.log('   │ Access:   FULL SYSTEM CONTROL                   │');
                    console.log('   └─────────────────────────────────────────────────┘');
                    console.log('');
                    console.log('   ┌─────────────────────────────────────────────────┐');
                    console.log('   │ ADMIN ACCOUNT                                   │');
                    console.log('   ├─────────────────────────────────────────────────┤');
                    console.log('   │ Email:    admin@efin.co.in                      │');
                    console.log('   │ Password: Admin@2025                            │');
                    console.log('   │ Access:   User & Loan Management                │');
                    console.log('   └─────────────────────────────────────────────────┘');
                    console.log('');
                    console.log('   ⚠️  SECURITY WARNING: Change these passwords immediately!\n');

                    console.log('🎉 Admin & RBAC system setup completed!\n');

                    connection.end();
                    process.exit(0);
                });
            });
        });
    });
});
