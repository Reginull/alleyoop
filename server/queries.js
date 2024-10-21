const pool = require("./pool");
const format = require('pg-format');

async function getTeamData() {
    const { rows } = await pool.query("SELECT * FROM team_name");
    return rows;
}

async function insertTeamData(teamName, teamWins){
    let teamUpdate = format('UPDATE team_name SET wins = %L WHERE team_name = %L', teamWins, teamName);
    return teamUpdate
}

module.exports = {
    insertTeamData,
    getTeamData
};