import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = () =>{
    return (
    <div id='navbar'>
        <h1 className='logo'>Samantha Wessel</h1>
        <div id='navlinks'>
            {/* <h1>Test</h1> */}
            <NavLink className="nav-link" to="/projects">Open Source Projects</NavLink>
            <NavLink className="nav-link" to="/aboutme">About</NavLink>
        </div>

    </div>
    )
}

export default NavBar;