import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";  
import { Link } from "react-router-dom";
import MovieList from "../MovieList/MovieList";
const Home = () => {
  const [popularmovie, setpopularmovie] = useState([]);
  const PopularApi = async () => {
    let response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=ba2ca2e9e06cf946fea528f788fbcda6"
    );
    let data = await response.json();
    console.log(data);
    return setpopularmovie(data.results);
  };
  useEffect(() => {
    PopularApi();
  }, []);
  return (
    <>
      <div
        id="carouselExampleControlsNoTouching"
        className="carousel slide home text-white"
        data-bs-touch="false"
      >
        <div className="carousel-inner">
          <Carousel
            showThumbs={false}
            autoPlay={true}
            transitionTime={1}
            infiniteLoop={true}
            showStatus={false}
          >
            {popularmovie.map((movie, id) => {
              return (
                <Link to={`/movie/${movie.id}`} key={id}>
                  <div className="carousel-item active">
                    <img
                      src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                      className="d-block w-100 carosoul_img"
                      alt="Img"
                    />
                    <div className="position_overlay">
                      <h1>{movie.original_title}</h1>
                      <h3>⭐{movie.vote_average}</h3>
                      <h3>Release Date : {movie.release_date}</h3>
                    </div>
                  </div>
                </Link>
              );
            })}
          </Carousel>
          <MovieList />
        </div>
      </div>
    </>
  );
};

export default Home;
