import React from "react";

const Event = (props) => {
    let { type, time, name,message} = props;
  return (
    <div className="my-3 text-center">
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className=" badge rounded-pill bg-danger">I am source</span>
        </div>

        <div className="card-body">
          <h5 className="card-title">{type}</h5>
          <p className="card-text">{time}</p>
          <p className="card-text">
            <small className="text-muted">{name}</small>
          </p>
          <p className="card-text">
            <small className="text-muted"></small>
          </p>
          <a rel="noreferrer" href="" target={"_blank"} className="btn btn-sm btn-dark">
            Click here to browse
          </a>
        </div>
      </div>
    </div>
    // <div className="text-center">
    // <div className="card mx-2 col-md-6" style={{width: '18rem'}}>
    //     <img src="logo192.png" className="card-img-top card1" alt="..."/>
    //     <div className="card-body">
    //       <h5 className="card-title">Card title</h5>
    //       <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //       <a href="#" className="btn btn-primary">Read More</a>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Event;
