import React, { useState } from 'react';
import Navbar from './Navbar';

function Login ( { handleLogin } ) {

    const [ username, setUsername ] = useState( "" )
    const [ _password_hash, setPassword ] = useState( "" )
    const [ loginError, setLoginError ] = useState( null )

    function handleUsername ( e ) {
        setUsername( e.target.value )
    }

    function handlePassword ( e ) {
        setPassword( e.target.value )
    }

    async function handleSubmit ( e ) {
        e.preventDefault()
        try {
            const response = await fetch("api/login", {
                method: "POST",
                headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                _password_hash: _password_hash
            })
            });
            if ( response.ok ) {
                const data = await response.json();
                if (data.message === "Login successful") {
                console.log("Login successful");
                setLoginError(null);
                handleLogin(data);
            } else {
                console.log("Login failed");
                setLoginError("Invalid username or password");
            }
            } else {
                console.log("HTTP request failed with status: " + response.status);
                setLoginError("HTTP request failed");
            }
        } catch (error) {
            console.error("Error logging in: ", error);
            setLoginError("An error occurred while logging in");
        }  
    }

    return (
        <div>
            <Navbar/>
            <form onSubmit = { handleSubmit }>
                {loginError ? (<h2>{loginError}</h2>) : null}
                <h1>Log in:</h1>
                <input type = "text" placeholder = "Username" onChange = { handleUsername } />
                <input type = "password" placeholder = "Password" onChange = { handlePassword } />
                <button type = "submit" >Submit</button>
            </form>
        </div>
    )
}

export default Login;