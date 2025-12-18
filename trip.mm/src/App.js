import { useState } from 'react';
import './App.css';
import TripList from './components/Triplist/index.js';

function App() {

  let [show,setShow] = useState(true);

  return (
    <>
      <button onClick={()=>setShow(false)}>Hide Trop</button>
     { show && <TripList/>}
    </>
  );
}

export default App;

/**
 * **Primitive
 * string
 * number
 * boolean
 * null
 * undefined
 * 
 * **Refrence
 * object
 * array 
 * function
 */