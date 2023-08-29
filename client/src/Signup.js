import React from 'react';
import Navbar from "./Navbar"

function Signup () {

    

    return (
        <div>
            <Navbar/>
            <form>
                <input type = "text" placeholder = "Username" />
                <input type = "password" placeholder = "Password" />
                <button type = "submit">Submit</button>
            </form>
        </div>
    )
}

export default Signup