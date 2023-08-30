import React, {useState, useEffect} from "react";
import CardContainer from './CardContainer';
import Signup from "./Signup"
import Login from "./Login"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";


function App() {
  
  const [ formData, setFormData ] = useState( [] )
  const [ loggedIn, setLoggedIn ] = useState( localStorage.getItem( "isLoggedIn" ) === "true" )
  const [ activeUser, setActiveUser ] = useState( localStorage.getItem( "userId" ) ) 

  useEffect(() => {
    fetch( 'http://127.0.0.1:5555/game_classes' )
      .then( r => r.json() )
      .then( data => setFormData( data ) )
  }, [] )

  function handleLogin( loginData ) {
    setActiveUser( loginData.user_id )
    localStorage.setItem( "userId", loginData.user_id )
    setLoggedIn(true)
    localStorage.setItem( "isLoggedIn", true )
    console.log(`${ loginData }`)
    console.log(`Oh shit, somebody logged in: ${ activeUser }`)
  }

  // function handleLogout() {
  //   setLoggedIn( false )
  //   localStorage.setItem( "isLoggedIn", false )
  //   setActiveUser( null )
  //   localStorage.removeItem( "userId", null )
  //   console.log( `Bye ${ activeUser }` )
  //   console.log( "Oh shit, somebody logged out" )
  // }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path = "/Home" element = { <CardContainer data = { formData }/> } />
          <Route path = "/Signup" element = { <Signup/> } />
          <Route path = "/Login" element = { <Login loginStatus = { loggedIn} handleLogin = { handleLogin }/> } />
          <Route path = "*" element = { <Navigate to = "Home" replace /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
