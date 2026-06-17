const mysql = require('mysql2/promise');

let pool;

export default async function handler(req, res) {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*'); // Or specifically 'http://localhost:3000'
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    // Handle OPTIONS request for CORS preflight
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }

    try {
        if (!pool) {
            pool = mysql.createPool({
                host: process.env.DB_HOST || '13.232.149.191',
                port: process.env.DB_PORT || 3306,
                user: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME || 'MLB_DB',
                waitForConnections: true,
                connectionLimit: 5,
                queueLimit: 0
            });
        }

        const tableName = process.env.DB_CONTACT_TABLE || 'contact';
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

        // Handle Contact Page / Leads
        if (tableName === 'contact' || source === 'Contact Page') {
            const subjectStr = additionalData && additionalData.subject ? additionalData.subject : 'General Inquiry';
            
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

        return res.status(201).json({
            success: true,
            message: 'Lead captured successfully',
            leadId: result.insertId
        });

    } catch (error) {
        console.error('Error capturing lead:', error);
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
}
