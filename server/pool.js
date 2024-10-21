const { Pool } = require('pg');

module.exports = new Pool({
        user: 'crackdog',
        password: 'psqldb',
        host: 'localhost',
        port: 5432,
        database: 'team_standings'
    });