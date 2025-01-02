const express = require('express');
//express creates a server
const cors = require('cors');
const bodyParser = require('body-parser');
//middleware cors, body-parser handles JSON data and cross-origin requests

//IMport database connection
const pool = require('./db'); 

const app = express();
const PORT = 3000;

//Middleware
app.use(cors());
app.use(bodyParser.json());

//Test Route
app.get('/', (req, res) => {
    res.send('Smart Energy Backend is Running!');
});

//Test Database Connection
app.get('/api/test-db', async (req, res) => {
    try {
        const result = await pool.query('SELECT NOW()');
        res.json({message: 'Database Connected Successfully', time: result.rows[0]});
    } catch {
        console.error(error);
        res.status(500).json({error: 'Database Connection Failed'});
    }
})

//Start Server
app.listen(PORT, () => {
    console.log('Server running on http://localhost:${PORT}');
})


