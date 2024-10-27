const { Pool } = require('pg');

// Connects to the database
module.exports = new Pool({
        user: 'crackdog',
        password: 'psqldb',
        host: 'localhost',
        port: 5432,
        database: 'team_data'
    });