import React, { useEffect ,useState} from 'react'
import Event from './Event';

const Event_Fetch = (props) => {
    const[articles,setArticles]=useState([]);
    // const[type,setType]=useState([]);
    // const[time,setTime]=useState([]);
    // const[name,setName]=useState([]);
    // const[message,setArticles]=useState([]);

    const getEvents=async()=>{
        const parse=await fetch(`https://api.github.com/users/${props.user}/events`);
        const data=await parse.json();
        // console.log(data);
        console.log(data.payload);
        setArticles(data);
    }
    useEffect(()=>{
        getEvents();
    })
  return (
    // repository_id  message={element.payload.commits}
    <div className="container">

          <div className="row">
              {articles.map((element)=>{
                return <div className="col-md-4" key={element.id}>
                  <Event type={element.type} time={element.created_at} name={element.repo.name}/>
                </div>

              })}
          </div>

    </div>
  )
}

export default Event_Fetch
