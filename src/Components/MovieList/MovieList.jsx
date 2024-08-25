import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const MovieList = () => {
  const [card, setCard] = useState([]);
  const cardData = async () => {
    let response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=ba2ca2e9e06cf946fea528f788fbcda6"
    );
    let data = await response.json();
    setCard(data.results);
  };
  useEffect(() => {
    cardData();
  }, []);
  return (
    <>
      <div className="full">
        {card.map((movie, id) => {
          return (
            <Link to={`/movie/${movie.id}`} key={id}>
              <div className="card text-bg-dark ">
                <img
                  src={
                    movie.backdrop_path == null
                      ? "no-poster.png"
                      : `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
                  }
                  className="card-img cards__img"
                  alt="..."
                  style={
                    movie.backdrop_path == null
                      ? { height: "300px" }
                      : { height: "340px" }
                  }
                />
                <div className="card-img-overlay">
                  <h4 className="card-title">{movie.original_title}</h4>
                  <p className="card-text">{movie.overview.slice(0, 118)}</p>
                  <p>{movie.release_date}</p>
                  <p className="card-text">⭐{movie.vote_average}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default MovieList;
