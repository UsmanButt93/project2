import React, {useState} from 'react';
import Message from './Message';
import './App.css';
import './Message.css';


function App() {

let [count, setCount] = useState(1); // Creating Array
let [isMorning, setMorning] = useState(false);
  return (



<div className={`box ${isMorning ? 'dayLight' : '' }`}>


<Message counter={count} /> 


<button onClick={  ()=> setCount(count +1) } >   
   + Add
   </button> 
   <button onClick={  ()=> setCount(count -1) } >   
    - Min
   </button>

  
  
     
  <h1>It is  {isMorning ? 'Morning Time ' : 'Night Time' }</h1> 
  
<button onClick={ ()=> setMorning(!isMorning)}> Update Day</button>
</div>


  )
}

export default App;
