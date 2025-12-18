require('dotenv').config();
const mysql = require('mysql2/promise');

async function setupNewDatabase() {
    const newDbName = 'efin_leads_system';

    // Connect without a specific database first to create the new DB
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
    });

    console.log(`🚀 Connecting to MySQL at ${process.env.DB_HOST}...`);

    try {
        // 1. Create the new database
        await connection.query(`CREATE DATABASE IF NOT EXISTS ${newDbName}`);
        console.log(`✅ Database '${newDbName}' created or already exists.`);

        await connection.query(`USE ${newDbName}`);

        // 2. Create the Leads table
        await connection.query(`
            CREATE TABLE IF NOT EXISTS leads (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255),
                phone VARCHAR(20),
                source VARCHAR(100),
                message TEXT,
                data JSON,
                status VARCHAR(50) DEFAULT 'new',
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);
        console.log('✅ Table \'leads\' created.');

        // 3. Insert Dummy Data
        const dummyLeads = [
            // Contact Us leads
            ['John Doe', 'john@example.com', '9876543210', 'Contact Page', 'I have a question about personal loans.', JSON.stringify({ subject: 'General Inquiry' })],
            ['Jane Smith', 'jane@example.com', '9876543211', 'Contact Page', 'Interested in MSME funding.', JSON.stringify({ subject: 'Loan Application' })],

            // Coming Soon / Waitlist leads
            ['Alice Cooper', 'alice@gmail.com', null, 'Portal Waitlist', 'User wants to be notified when Customer Portal launches.', JSON.stringify({})],
            ['Bob Wilson', null, '9988776655', 'Portal Waitlist', 'User wants to be notified when Customer Portal launches.', JSON.stringify({})],

            // Support Callback leads
            ['Charlie Brown', 'charlie@outlook.com', '9112233445', 'Support Callback', 'Topic: Repayment issue\n\nNeed help changing my EMI date.', JSON.stringify({ topic: 'Repayment issue' })],
            ['David Miller', 'david@corp.in', '9556677889', 'Support Callback', 'Topic: Statement or NOC\n\nNeed my final closure letter.', JSON.stringify({ topic: 'Statement or NOC' })],

            // Career Application leads
            ['Emma Wilson', 'emma.hr@tech.com', '9666555444', 'Career Application', 'Applying for Senior Product Designer role. 5 years exp.', JSON.stringify({ type: 'Job Application', resumeFileName: 'emma_resume.pdf' })],
            ['Frank Thomas', 'frank.dev@dev.com', '9777888999', 'Career Application', 'Interested in Backend Developer position.', JSON.stringify({ type: 'Job Application', resumeFileName: 'frank_cv.docx' })]
        ];

        console.log('📝 Inserting dummy data...');
        for (const lead of dummyLeads) {
            await connection.query(
                'INSERT INTO leads (name, email, phone, source, message, data) VALUES (?, ?, ?, ?, ?, ?)',
                lead
            );
        }
        console.log('✅ 8 dummy records inserted successfully.');

        // 4. Also setup the users table for Auth (copying from original structure if needed)
        // For now, focusing on the Gathering System as requested.

        await connection.end();
        console.log('\n🎉 Setup complete. PLEASE UPDATE YOUR .env TO USE: DB_NAME=' + newDbName);

    } catch (err) {
        console.error('❌ Setup failed:', err.message);
        if (connection) await connection.end();
    }
}

setupNewDatabase();
