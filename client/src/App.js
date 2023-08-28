import React, {useState, useEffect} from "react";
import CardContainer from './CardContainer';

function App() {
  
  const [ formData, setFormData ] = useState( [] )

  useEffect(() => {
    fetch( 'http://127.0.0.1:5555/game_classes' )
      .then( r => r.json() )
      .then( data => setFormData( data ) )
  }, [] )

  return (
    <div>
      <CardContainer data = { formData }/>
    </div>
  );
}





export default App;
