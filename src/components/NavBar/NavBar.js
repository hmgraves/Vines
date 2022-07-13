import './NavBar.css';
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className='NavBar'>
      <span className='nav-title'>
        <Link to="/" style={{textDecoration: 'none', color: 'yellow', cursor: 'pointer'}} >Vines</Link>
      </span>
      <span className='nav-items'>
        <Link to="/add" className="link" >Add a new plant</Link>
        <Link to="/your-plants" className="link" >View your plants</Link>
      </span>
    </nav>
  )
};

export default NavBar;