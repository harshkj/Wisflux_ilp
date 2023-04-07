import React from "react";

const Image_Layout = (props) => {
  return (
    <div className="my-3 text-center">
      <div className="card border-0">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className=" badge rounded-pill bg-danger">{props.query}</span>
        </div>
        <img
          src={props.url}
          className="card-img-top"
        />

        {/* <div className="card-body">
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
            </div> */}
      </div>
    </div>
  );
};

export default Image_Layout;
