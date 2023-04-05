import React,{useState} from 'react'
import Event_Fetch from './Event_Fetch';

const Home = () => {
    const [user,setUser]=useState('');
    const handleInputChange = (event) => {
        setUser(event.target.value);
    }
    const [showComponent, setShowComponent] = useState(false);

    const handleClick = () => {
      setShowComponent(true);
    }
  return (
    <div>
      <h1 className='text-center my-4'>Github User Activity Search</h1>
      <div className="container text-center my-6">
      <input type="text" value={user} onChange={handleInputChange} placeholder='Enter user name'/>
      <button className="btn btn-primary" onClick={handleClick}>Browse</button>
      </div>
      {showComponent && <Event_Fetch user={user} /> }
    </div>
  )
}

export default Home
