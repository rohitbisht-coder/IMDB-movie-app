import React, { useState } from "react";
import { useEffect } from "react";
import Card from "../Card/Card";
const TopRated = () => {
  const [top, setTop] = useState([]);
  const cardData = async () => {
    let response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=ba2ca2e9e06cf946fea528f788fbcda6"
    );
    let data = await response.json();
    return setTop(data.results);
  };
  useEffect(() => {
    cardData();
  }, []);
  return (
    <div>
      <div className="con">
        <h1 className=" heading top_rated">Top Rated</h1>
      </div>
      <div className="full">
        {top.map((movie, id) => {
          return <Card movie={movie} key={id} />;
        })}
      </div>
    </div>
  );
};

export default TopRated;
