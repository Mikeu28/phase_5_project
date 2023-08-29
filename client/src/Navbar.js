import React from 'react';
import { NavLink } from "react-router-dom";

function Navbar () {


    return (
        <nav>
            <div>
                <NavLink exact to = "/Home">Home</NavLink>
                <NavLink exact to = "/Signup">Sign Up</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;