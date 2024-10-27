const express = require('express');
const pool = require('./pool');
const db = require("./queries");

const app = express();
const cors = require('cors')
const corsOptions = {
    origin: ["http://localhost:5173"]
}

app.use(cors(corsOptions));

// Change code to pull from api and store in db from user inputs
// app.get('/api', async(req, res) => {
//     try{
//         const response = await db.insertTeamData('Sixers', 10);
//         await pool.query(response);

//         const resData = await db.getTeamData();
//         res.json(resData);
        
//     } catch (err) {
//         console.error(err);
//         res.status(500).send('Internal Server Error')
//     }
// });

app.get('/api', async(req, res) => {
    try{
        const eastArray = await db.getEastTeamData()
        const westArray = await db.getWestTeamData()
        // Joins both json arrays into one
        let data = {
            eastArray,
            westArray
        }
        // Sends data as json when /api is accessed
        res.json(data);
    } catch (err) {
        console.error(err)
        res.status(500).send('Internal Server Error');
    }
})

const port = 3000

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})