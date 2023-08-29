import React, {useState, useEffect} from "react";
import CardContainer from './CardContainer';
import Signup from "./Signup"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";


function App() {
  
  const [ formData, setFormData ] = useState( [] )

  useEffect(() => {
    fetch( 'http://127.0.0.1:5555/game_classes' )
      .then( r => r.json() )
      .then( data => setFormData( data ) )
  }, [] )

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path = "/Home" element = { <CardContainer data = { formData }/> } />
          <Route path = "/Signup" element = { <Signup/> } />
          <Route path = "*" element = { <Navigate to = "Home" replace /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
