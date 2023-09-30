import React from "react";
// import Logo from "../Assets/Logo.png";
import "../Home/Home.scss";
import { Link } from "react-router-dom";
import { ImSearch } from "react-icons/im";

const Header = () => {
  return (
    <div>
      <nav className="Header">
        <img src={"https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"} alt="Logo" />

        <div>
          <Link to="/tvshows">TV Shows</Link>
          <Link to="/movies">Movies</Link>
          <Link to="/recent">Recently Added</Link>
          <Link to="/mylist">My List</Link>
        </div>
        <ImSearch />
      </nav>
    </div>
  );
};

export default Header;
