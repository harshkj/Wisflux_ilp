import { useState } from 'react';
import './App.css';
import Fetcher from './Components/Fetcher';

function App() {
   const[query,setQuery]=useState('');

    const querytaker=(event)=>{
      setQuery(event.target.value);
    }

    const handelClick=()=>{
        console.log(query);
    }
  return (
    <>
    <div className="container text-center my-4">
    <h1>Image Search</h1>
    <input className="mx-2 my-1" type="text" value={query} onChange={querytaker}/>
    <button className='btn btn-primary mx-2' onClick={handelClick}>Search</button>
    <h2>{query?"":"Enter the image you want to search"}</h2>
    {query && <Fetcher query={query}/>}
    </div>
    </>
  );
}

export default App;
