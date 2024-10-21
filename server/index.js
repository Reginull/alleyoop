const express = require('express');
const pool = require('./pool');
const db = require("./queries");

const app = express();

app.get('/', async(req, res) => {
    try{
        const response = await db.insertTeamData('Sixers', 10);
        await pool.query(response);
        const resData = await db.getTeamData();
        res.json(resData);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error')
    }
});

const port = 3000

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})