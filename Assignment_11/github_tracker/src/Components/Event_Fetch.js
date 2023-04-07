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
        // const data =awauparse.json();
        // console.log(data);
        // JSON.parse(data);
        // JSON.parse(data).payload.commits
        console.log("hi",data,data[0].payload.commits);
  
        setArticles(data);
    }
    useEffect(()=>{
        getEvents();
    })
  return (
    // repository_id  
    <div className="container">

          <div className="row">
              {articles.map((element)=>{
                return <div className="col-md-4" key={element.id}>
                  <Event type={element.type} time={element.created_at} name={element.repo.name} message={element.payload.commits}/>
                </div>

              })}
          </div>

    </div>
  )
}

export default Event_Fetch
