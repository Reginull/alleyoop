import '../styles.css'
import React, {useState} from "react";

const SearchBar = ({setResults}) => {

    const[input, setInput] = useState("")

    const fetchData = (value) => {
        fetch("PUT API HERE")
          .then((response) => response.json())
          .then((json) => {
            const results = json.filter((user) => {
              return value && user && user.name && user.name.toLowerCase().includes(value);
            });
            setResults(results);
          });
    };
        

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    }

    return (
        <div className='search-container'>
            <h2 id='archive-header'> Archive Search</h2>

            <div className='search-bar-container'>
                <input className='search-bar' 
                placeholder='Search for any player, team, or season...' 
                value={input} 
                onChange={(e) => handleChange(e.target.value)}>
                </input>
            </div>

        </div>

    );
}

export default SearchBar;