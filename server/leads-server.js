const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.LEADS_API_PORT || 5003;

app.use(cors());
app.use(express.json());

const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

const tableName = process.env.DB_CONTACT_TABLE || 'leads';

// Initialize Database Table
const initDB = async () => {
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS \`${tableName}\` (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255),
                phone VARCHAR(20),
                source VARCHAR(100), -- Example: 'Contact Us', 'Coming Soon', 'Eligibility'
                message TEXT,
                data JSON, -- To store flexible data from different forms
                status VARCHAR(50) DEFAULT 'new',
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);
        console.log(`✅ ${tableName} table initialized`);

        // Initialize career table
        await pool.query(`
            CREATE TABLE IF NOT EXISTS \`career\` (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL,
                phone VARCHAR(20) NOT NULL,
                resume_file VARCHAR(255),
                message TEXT,
                status VARCHAR(50) DEFAULT 'new',
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);
        console.log(`✅ career table initialized`);
    } catch (err) {
        console.error('❌ Database initialization failed:', err.message);
    }
};

initDB();

/**
 * Capture a new Lead
 * POST /api/leads/capture
 */
app.post('/api/leads/capture', async (req, res) => {
    try {
        const { name, email, phone, source, message, additionalData } = req.body;

        if (!name || (!email && !phone)) {
            return res.status(400).json({
                success: false,
                message: 'Name and either Email or Phone are required'
            });
        }

        // Handle Career Application
        if (source === 'Career Application') {
            const resumeName = additionalData && additionalData.resumeFileName ? additionalData.resumeFileName : null;
            const [result] = await pool.query(
                `INSERT INTO \`career\` (name, email, phone, resume_file, message) VALUES (?, ?, ?, ?, ?)`,
                [name, email, phone, resumeName, message]
            );
            return res.status(201).json({
                success: true,
                message: 'Career application captured successfully',
                leadId: result.insertId
            });
        }

        // Check if we are inserting into the specific contact table
        if (tableName === 'contact' || source === 'Contact Page') {
            const subjectStr = additionalData && additionalData.subject ? additionalData.subject : 'General Inquiry';
            
            // Extract clean message if it was prefixed with "Subject: " by the frontend
            let cleanMessage = message || '';
            if (cleanMessage.startsWith('Subject:')) {
                const parts = cleanMessage.split('\n\n');
                if (parts.length > 1) {
                    cleanMessage = parts.slice(1).join('\n\n');
                }
            }

            const [result] = await pool.query(
                `INSERT INTO \`${tableName}\` (name, email, phone_no, subject, message) VALUES (?, ?, ?, ?, ?)`,
                [name, email, phone, subjectStr, cleanMessage]
            );

            return res.status(201).json({
                success: true,
                message: 'Lead captured successfully',
                leadId: result.insertId
            });
        }

        const [result] = await pool.query(
            `INSERT INTO \`${tableName}\` (name, email, phone, source, message, data) VALUES (?, ?, ?, ?, ?, ?)`,
            [name, email, phone, source || 'Direct', message || null, JSON.stringify(additionalData || {})]
        );

        res.status(201).json({
            success: true,
            message: 'Lead captured successfully',
            leadId: result.insertId
        });
    } catch (error) {
        console.error('Error capturing lead:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

// Health Check
app.get('/api/health', (req, res) => {
    res.json({ success: true, message: 'Leads API is running', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
    console.log(`🚀 Leads API Server running on http://localhost:${PORT}`);
});
