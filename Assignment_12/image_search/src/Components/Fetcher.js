import React, { useState, useEffect } from "react";
import Image_Layout from "./Image_Layout";

const Fetcher = (props) => {
  const [images, setImages] = useState([]);
  const getImages = async () => {
    const parse = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${props.query}&client_id=97J6c8AMGz8iqcPOaBcav7HIRR9Rt8ZeZWSI-Px095M`
    );
    const data = await parse.json();
    // console.log(data);
    // console.log(data.payload);
    setImages(data.results);
    
  };
  useEffect(() => {
    getImages();
  });
  return (
    <>
      {images.length ? (
        <div className="container">
          <div className="row">
            {images.map((element) => {
              return (
                <div className="col-md-4" key={element.id}>
                  <Image_Layout url={element.urls.small} query={props.query} />
                </div>
              );
            })}
          </div>
        </div>
      ) : 
        <h3>No Images Found : Please enter valid data</h3>
      }
    </>
  );
};

export default Fetcher;
