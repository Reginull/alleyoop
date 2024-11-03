import '../styles.css'
// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect} from 'react';
import axios from 'axios'

const Standings = () => {

    const [backendData, setBackendData] = useState({ eastArray: { rows: [] } });
    const [selectedConference, setSelectedConference] = useState("eastArray");


    const fetchAPI = async () => {
        try {
            const response = await axios.get("http://localhost:3000/api");
            setBackendData(response.data)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchAPI();
    }, []);

    useEffect(() => {
        console.log(backendData[selectedConference]?.rows)
    }, [backendData, selectedConference]);


    const handleConferenceChance = (event) => {
        setSelectedConference(event.target.value);
    };

    const conferenceData = backendData[selectedConference]?.rows || [];

    return (

        <div className='standings-container'>

            <select className='standings-dropdown' multiple={false} value={selectedConference} onChange={handleConferenceChance}>

                <option value="westArray">Western Conference</option>
                <option value="eastArray">Eastern Conference</option>

            </select>

            <table className='standings-table'>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>W</th>
                        <th>L</th>
                        <th>pct</th>
                    </tr>
                </thead>

                <tbody>
                    {conferenceData && conferenceData.map((rows, index) => (
                        <tr key={rows.id}>
                            <td>{index + 1}</td> 
                            <td>{rows.team_name}</td>
                            <td>{rows.wins}</td>
                            <td>{rows.losses}</td>
                            <td>{rows.losses !== 0? (rows.wins / rows.losses).toFixed(2): 0}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Standings;