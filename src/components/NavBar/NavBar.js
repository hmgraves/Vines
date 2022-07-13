import './NavBar.css';
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<nav>
			<br />
			<Link to="/" >Vines</Link>
			<Link to="/your-plants" >View your plants</Link>
			<Link to="/add" >Add new plant</Link>
		</nav>
	)
};

export default NavBar;