
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
    <div>
      <button onClick={() => setStep((c) => c-1)}> - </button> Step : {step}<button onClick={()=> setStep ((c) => c+1)}> + </button>
    </div>

    <div>
      <button onClick={() => setCount((c) => c-step)}> - </button> Count :{count} <button onClick={()=> setCount ((c) => c+step)}> + </button> 
    </div>

    <p>
      <span>
        {count === 0 ? "Today is" : count > 0 ? `${count} days from today is ` : `${Math.abs(count)} days ago was `}
      </span>
      {date.toDateString()}
    </p>

  </div> 
}
