import NavBar from './navbar.jsx'
import SideBar from './sidebar.jsx'
import Standings from './standings.jsx'

import '../styles.css'

function App() {
    return(
        <div className='container'>
            <NavBar> </NavBar>
            <SideBar></SideBar>
            <Standings></Standings>
        </div>
    );
}

export default App;

