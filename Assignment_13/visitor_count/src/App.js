import './App.css';
import { useState,useEffect } from 'react';
function App() {
  const [count, setCount] = useState(0);

  // fetch('http://localhost:5000/c')
  // .then(res => res.json())
  // .then(data => setCount(data.count))
  // .catch(err => console.error(err));
  // , {method: "GET"}

  const func=async()=>{
      const response = await fetch('http://localhost:5000/c');
      const json = await response.json();
      setCount(json.count);
  }
  const clicker=async()=>{
    const response = await fetch('http://localhost:5000/');
    const json = await response.json();
    setCount(json.count);
  }
  useEffect(() => {
      func();
    },[]);

  return (
    
    <div className="container text-center">
    <h1 className='my-5 text-danger'> Hi, I am showing Visitor's Count</h1>
    <h3 className='my-2 text-success'>  Visitor Count: {count}</h3>
    <button className='btn btn-primary my-2 bg-dark text-white' onClick={clicker}> Clear Count</button>
    </div>
  );
}

export default App;
