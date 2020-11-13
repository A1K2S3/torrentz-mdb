import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const { $, PerfectScrollbar } = window;

export default () => {
  useEffect(() => {
    $(document).ready(() => {
      $(".button-collapse").sideNav();
      const sideNavScrollbar = document.querySelector(".custom-scrollbar");
      new PerfectScrollbar(sideNavScrollbar);
    });
  });

  return (
    <nav className="navbar navbar-toggleable-sm navbar-expand-lg scrolling-navbar double-nav danger-color text-white">
      {/* SideNav slide-out button */}
      <div className="float-left">
        <span data-activates="slide-out" className="button-collapse c-pointer">
          <i className="fal fa-bars" />
        </span>
      </div>
      {/* Breadcrumb*/}
      <div className="breadcrumb-dn mr-auto d-block ml-2">
        <Link to="/" className="text-uppercase">Torrent Site</Link>
      </div>
      <ul className="nav navbar-nav nav-flex-icons ml-auto">
        <li className="nav-item">
          <Link to="/top" className="nav-link">
            <i className="fal fa-star" />
            <span className="clearfix d-none d-sm-inline-block">Top</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/trending" className="nav-link">
            <i className="fas fa-signal-alt" />
            <span className="clearfix d-none d-sm-inline-block">Trending</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/popular" className="nav-link">
            <i className="fal fa-fire-alt" />
            <span className="clearfix d-none d-sm-inline-block">Popular</span>
          </Link>
        </li>
        <li className="nav-item dropdown d-none d-sm-inline-block">
          <Link
            to="/"
            className="nav-link dropdown-toggle"
            id="navbarDropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Category
          </Link>
          <div
            className="dropdown-menu dropdown-menu-right dropdown-danger"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <Link to="/cateogry/movies" className="dropdown-item ">
              <i className="fal fa-film" /> Movies
            </Link>
            <Link to="/cateogry/anime" className="dropdown-item">
              <i className="fal fa-user-ninja" /> Anime
            </Link>
            <Link to="/cateogry/tvshow" className="dropdown-item">
              <i className="fal fa-tv" /> TV Shows
            </Link>
            <Link to="/cateogry/games" className="dropdown-item">
              <i className="fal fa-gamepad-alt" /> Games
            </Link>
            <Link to="/cateogry/apps" className="dropdown-item">
              <i className="fab fa-windows" /> Apps
            </Link>
            <Link to="/cateogry/music" className="dropdown-item">
              <i className="fal fa-music" /> Music
            </Link>
            <Link to="/cateogry/documentaries" className="dropdown-item">
              <i className="fal fa-video" /> Documentaries
            </Link>
            <Link to="/cateogry/other" className="dropdown-item">
              <i className="fal fa-box-open" /> Other
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};
