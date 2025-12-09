// Setup Database Tables for User Authentication
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
    multipleStatements: true // Allow multiple SQL statements
});

console.log('🚀 Starting database setup...\n');

// Read SQL schema file
const schemaPath = path.join(__dirname, 'database', 'schema.sql');
const sqlSchema = fs.readFileSync(schemaPath, 'utf8');

// Connect and execute schema
connection.connect((err) => {
    if (err) {
        console.error('❌ Connection failed:', err.message);
        process.exit(1);
    }

    console.log('✅ Connected to MySQL database');
    console.log('📝 Executing SQL schema...\n');

    // Execute the SQL schema
    connection.query(sqlSchema, (err, results) => {
        if (err) {
            console.error('❌ Schema execution failed:', err.message);
            connection.end();
            process.exit(1);
        }

        console.log('✅ Database tables created successfully!\n');
        console.log('📊 Tables created:');
        console.log('   1. ✓ users - Main user accounts table');
        console.log('   2. ✓ email_verification_tokens - Email verification');
        console.log('   3. ✓ password_reset_tokens - Password reset functionality');
        console.log('   4. ✓ user_sessions - Session management');
        console.log('   5. ✓ login_attempts - Security tracking');
        console.log('   6. ✓ user_profile_pictures - Profile images');
        console.log('   7. ✓ user_documents - KYC documents');
        console.log('   8. ✓ user_activity_log - Activity tracking');

        // Verify tables were created
        connection.query('SHOW TABLES', (err, tables) => {
            if (err) {
                console.error('Error listing tables:', err);
            } else {
                console.log('\n📋 All tables in database:');
                tables.forEach((table, index) => {
                    const tableName = Object.values(table)[0];
                    console.log(`   ${index + 1}. ${tableName}`);
                });
            }

            console.log('\n🎉 Database setup completed successfully!');
            console.log('\n📝 Default admin account created:');
            console.log('   Email: admin@efin.co.in');
            console.log('   Password: Admin@123');
            console.log('   ⚠️  Please change this password after first login!\n');

            connection.end();
            process.exit(0);
        });
    });
});
