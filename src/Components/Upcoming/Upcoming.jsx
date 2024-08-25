import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Card from "../Card/Card";
const Upcoming = () => {
  const [top, setTop] = useState([]);
  const cardData = async () => {
    let response = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=ba2ca2e9e06cf946fea528f788fbcda6"
    )  
    let data = await response.json();
    return setTop(data.results);
  };
  useEffect(() => {
    cardData();
  }, []);   
  return ( 
    <div>
      <div className="con">
        <h1 className=" heading upcoming">Upcoming</h1>
      </div>
      <div className="full">
        {top.map((movie, id) => {
          return <Card movie={movie} key={id} />;
        })}
      </div>
    </div>
  );
}; 

export default Upcoming;
