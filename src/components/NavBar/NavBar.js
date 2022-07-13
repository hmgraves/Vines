import './NavBar.css';
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';

const NavBar = () => {

  const [user, setUser] = useState({});

  const handleCallbackResponse = (res) => {
    const userObject = jwtDecode(res.credential);
    console.log(userObject)
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
  }

  const handleLogOut = (evt) => {
    setUser({});
    document.getElementById("signInDiv").hidden = false;
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "27397347846-us7o8191dqtg2kulfdc4p7bgd9o0hkp0.apps.googleusercontent.com",
      callback: handleCallbackResponse
    })

    google.accounts.id.renderButton(
      document.getElementById('signInDiv'),
      { theme: "outline", size: "large" }
    )

  }, []);

  return (
    <nav className='NavBar'>
      <span className='nav-title'>
        <Link to="/" style={{ textDecoration: 'none', color: 'yellow', cursor: 'pointer' }} >Vines</Link>
      </span>
      <span className='nav-items'>
        <div id="signInDiv"> </div>
        {user &&

            <h3>Welcome {user.given_name}</h3>

        }
        <Link to="/add" className="link" >Add a new plant</Link>
        <Link to="/your-plants" className="link" >View your plants</Link>
        <Link to="/login" className="link" onClick={handleLogOut}>Log out</Link>
      </span>
    </nav>
  )
};

export default NavBar;