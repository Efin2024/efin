// Load environment variables
require('dotenv').config();
const mysql = require('mysql2');

// Create connection using credentials from .env
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

console.log('Testing MySQL connection...');
console.log('Host:', process.env.DB_HOST);
console.log('Port:', process.env.DB_PORT);
console.log('User:', process.env.DB_USER);
console.log('Database:', process.env.DB_NAME);
console.log('---');

// Test the connection
connection.connect((err) => {
    if (err) {
        console.error('❌ Connection failed!');
        console.error('Error:', err.message);
        console.error('Error code:', err.code);

        // Provide helpful error messages
        if (err.code === 'ECONNREFUSED') {
            console.error('\n💡 Suggestion: Make sure MySQL server is running.');
        } else if (err.code === 'ER_ACCESS_DENIED_ERROR') {
            console.error('\n💡 Suggestion: Check your username and password in .env file.');
        } else if (err.code === 'ER_BAD_DB_ERROR') {
            console.error('\n💡 Suggestion: Database does not exist. Create it first.');
        }

        process.exit(1);
    }

    console.log('✅ Successfully connected to MySQL database!');
    console.log('Connection ID:', connection.threadId);

    // Get MySQL version
    connection.query('SELECT VERSION() as version', (err, results) => {
        if (err) {
            console.error('Error getting version:', err);
        } else {
            console.log('MySQL Version:', results[0].version);
        }

        // Close the connection
        connection.end((err) => {
            if (err) {
                console.error('Error closing connection:', err);
            } else {
                console.log('Connection closed successfully.');
            }
            process.exit(0);
        });
    });
});
