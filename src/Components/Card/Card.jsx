import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
const Card = ({ movie }) => {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="card bg-dark">
          <SkeletonTheme>
            <Skeleton height={300} duration={2} />
          </SkeletonTheme>
        </div>
      ) : (
        <Link to={`/movie/${movie.id}`}>
          <div className="card text-bg-dark ">
            <img
              src={
                movie.backdrop_path == null
                  ? "no-poster.png"
                  : `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
              }
              className="card-img cards__img img-fluid"
              alt="img"
              style={movie.backdrop_path == null ? { height: "300px" } : {}}
            />
            <div className="card-img-overlay">
              <h4 className="card-title">
                {movie.original_title} {movie.original_name}
              </h4>
              <p className="card-text">{movie.overview.slice(0, 118)}</p>
              <p>{movie.release_date}</p>
              <p className="card-text">⭐{movie.vote_average}</p>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default Card;
