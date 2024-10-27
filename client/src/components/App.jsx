// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from './navbar.jsx'
import SideBar from './sidebar.jsx'
import '../styles.css'


function App() {

    // eslint-disable-next-line no-unused-vars
    const [backendData, setBackendData] = useState(0);

    const fetchAPI = async () => {
        const response = await axios.get("http://localhost:3000/api")
        console.log(response.data)
    }
  
    useEffect(() => {
        fetchAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
        <div className='App'>
            <NavBar> </NavBar>
            <SideBar></SideBar>

        </div>
    );
}

export default App;

