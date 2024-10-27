const pool = require("./pool");
const format = require('pg-format');

// Get eastern team conference data
async function getEastTeamData() {
    const eastRows = await pool.query("SELECT * FROM east_conf_teams");
    return eastRows;
}

// Get western team conference data
async function getWestTeamData() {
    const westRows = await pool.query("SELECT * FROM west_conf_teams");
    return westRows;
}

async function insertTeamData(teamName, teamWins){
    // need to add conference
    let teamUpdate = format('UPDATE team_name SET wins = %L WHERE team_name = %L', teamWins, teamName);
    return teamUpdate
}

module.exports = {
    insertTeamData,
    getEastTeamData,
    getWestTeamData
};