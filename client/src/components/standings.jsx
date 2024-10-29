import '../styles.css'
import React, {useState, useEffect} from 'react';

const Standings = () => {

    const [data, setData] = useState([]);
    const [selectedConference, setSelectedConference] = useState('westernConference');

    useEffect(() => {
        fetch('/mockdata.json')
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    const handleConferenceChance = (event) => {
        setSelectedConference(event.target.value);
    };

    const conferenceData = data[selectedConference];

    return (

        <div className='standings-container'>

            <select className='standings-dropdown' value={selectedConference} onChange={handleConferenceChance}>

                <option value="westernConference">Western Conference</option>
                <option value="easternConference">Eastern Conference</option>

            </select>

            <table className='standings-table'>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>W</th>
                        <th>L</th>
                        <th>PCT</th>
                    </tr>
                </thead>

                <tbody>
                    {conferenceData && conferenceData.map((team) => (
                        <tr key={team.id}>
                            <td>{team.rank}</td>
                            <td>{team.teamName}</td>
                            <td>{team.wins}</td>
                            <td>{team.losses}</td>
                            <td>{team.percentage}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Standings;