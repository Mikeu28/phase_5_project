import React, { useState } from 'react';
import Navbar from "./Navbar"

function Signup () {

    const [ newUsername, setUsername ] = useState( "" )
    const [ newPassword, setPassword ] = useState( "" )

    function handleUsername ( e ) {
        setUsername( e.target.value )
    };

    function handlePassword ( e ) {
        setPassword( e.target.value )
    };

    function handleSubmit ( e ) {
        e.preventDefault()
        const newUserData = {
            username: newUsername,
            _password_hash: newPassword
        }

        fetch( "http://127.0.0.1:5555/users" , {
            method: "POST",
            body: JSON.stringify(newUserData),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then( r => r.json() )
        .then( (result) => console.log( result ) )
        .catch( (error) => console.log( "Error: Something went wrong", error ))
    };



    return (
        <div>
            <Navbar/>
            <form onSubmit = { handleSubmit }>
                <h1>Sign Up:</h1>
                <input type = "text" placeholder = "Username" onChange = { handleUsername } />
                <input type = "password" placeholder = "Password" onChange = { handlePassword } />
                <button type = "submit">Submit</button>
            </form>
        </div>
    )
}

export default Signup