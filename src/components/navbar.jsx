import '../styles.css'

function NavBar() {
    return (
        <nav className='navbar'>

            <div className='nav-left'>
                <a className='logo' href='/'>Alleyoop</a>

            <ul className='nav-links'>
                <li><a href='/'>Home</a></li>
                <li><a href='/teams'>Teams</a></li>
                <li><a href='/players'>Players</a></li>
                <li><a href='/seasons'>Seasons</a></li>
            </ul>

            </div>

        </nav>
    );
}

export default NavBar;