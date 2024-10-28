import NavBar from './navbar.jsx'
import SideBar from './sidebar.jsx'
import '../styles.css'
import SearchBar from './searchbar.jsx';
import { useState } from 'react';

function App() {
    const [results, setResults] = useState([]);
    return(
        <div className='App'>
            <NavBar> </NavBar>
            <SideBar></SideBar>
            <SearchBar setResults={setResults}></SearchBar>

        </div>
    );
}

export default App;

