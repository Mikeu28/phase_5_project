import React from 'react';
import { NavLink } from "react-router-dom";

function Navbar () {


    return (
        <nav>
            <div>
                <NavLink to = "/Home">Home</NavLink>
                <NavLink to = "/Signup">Sign Up</NavLink>
                <NavLink to = "/Login">Log In</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;