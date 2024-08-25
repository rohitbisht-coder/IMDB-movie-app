import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top "
      style={{ zIndex: "9999" }}
    >
      <div className="container-fluid">
        <img
          className="navbar-brand"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
          style={{ height: "50px", width: "70px" }}
          alt="Logo"
        />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ color: "white", backgroundColor: "white" }}
        >
          <span className="navbar-toggler-icon text-black"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink to="/" className="nav-link text-white">
              Home
            </NavLink>
            <NavLink to="Top-rated" className="nav-link text-white">
              Top Rated
            </NavLink>
            <NavLink to="upcoming" className="nav-link text-white">
              Upcoming
            </NavLink>
            <NavLink to="trending" className="nav-link text-white">
              Trending
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
