
import { useState } from 'react';
import './App.css';


export default function App() {

  return (
    <div className="App">
      <Counter/>
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  
  const date =new Date();
  date.setDate(date.getDate() + count);

  return <div className="container">
    <div className="box">
        <div className='button-one'>
          <button id="btn-one" onClick={() => setStep((c) => c-1)}> Reduce step(s) </button> 
            <span>
               Step : {step}
            </span>
         <button id="btn-two"  onClick={()=> setStep ((c) => c+1)}> Add steps </button>
        </div>

        <div className='button-two'>
          <button id="btn-three"  onClick={() => setCount((c) => c-step)}> Reduce count(s)</button> 
            <span> 
              Count : {count} 
            </span>
          <button id="btn-one"  onClick={()=> setCount ((c) => c+step)}> Add count(s) </button> 
        </div>

        <p>
          <span>
            {count === 0 ? "Today is" : count > 0 ? `${count} days from today will be ` : `${Math.abs(count)} days ago was `}
          </span>
          <span>
            {date.toDateString()}
          </span>
        </p>
    </div>
  </div> 
}
