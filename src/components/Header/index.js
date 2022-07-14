import './header.css';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header>
            <Link className='logo' to="/">MovieFlix</Link>
            <Link className='favorites' to="/favorites">My movies</Link>
        </header>
    )
}

export default Header;