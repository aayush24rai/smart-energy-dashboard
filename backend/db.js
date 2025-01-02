const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

pool.connect()
    .then(client => {
        console.log('Connected to PostgreSQL Database');
        return client.query('SELECT NOW()')
            .then(res => {
                console.log('Current Time:', res.rows[0]);
                client.release();
            })
            .catch(err => {
                client.release();
                console.error('Query error', err.stack);
            });
    })
    .catch(err => console.error('Connection error', err.stack));

module.exports = pool;

