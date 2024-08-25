import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MovieDetails.css";
const MovieDetails = () => {
  const [movie, setmovie] = useState([]);
  const { id } = useParams();
  const getData = async () => {
    let response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=ba2ca2e9e06cf946fea528f788fbcda6`
    );
    let data = await response.json();
    return setmovie(data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="movie">
      <div className="movie__intro">
        <img
          className="movie__backdrop"
          src={
            movie.backdrop_path == null
              ? "../no-poster.png"
              : `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
          }
        />
      </div>
      <div className="movie__detail">
        <div className="movie__detailLeft">
          <div className="movie__posterBox">
            <img
              className="movie__poster"
              src={
                movie.poster_path == null
                  ? "../no-poster.png"
                  : `https://image.tmdb.org/t/p/original${movie.poster_path}`
              }
            />
          </div>
        </div>
        <div className="movie__detailRight">
          <div className="movie__detailRightTop">
            <div className="movie__name">{movie.original_title}</div>
            <div className="movie__tagline">{movie.tagline}</div>
            <div className="movie__rating">
              ⭐{movie.vote_average} <i className="fas fa-star" />
              <span className="movie__voteCount">
                ☑️{"(" + movie.vote_count + ") votes"}
              </span>
            </div>
            <div className="movie__releaseDate">
              {"Release date: " + movie.release_date}
            </div>
            <div className="movie__genres">
              {movie && movie.genres
                ? movie.genres.map((genre, key) => {
                    <span className="movie__genre" id={genre.id} key={key}>
                      {genre.name}
                    </span>;
                  })
                : ""}
            </div>
          </div>
          <div className="movie__detailRightBottom">
            <div className="synopsisText">Synopsis</div>
            <div>{movie.overview}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieDetails;
