import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";

const Sidenav = props => {
  const [search, setSearch] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    props.history.push(`/search/${search}`);
    window.$(".side-nav").sideNav("hide");
  };

  return (
    <div id="slide-out" className="side-nav danger-color fixed">
      <ul className="custom-scrollbar">
        <li>
          <div className="waves-light text-uppercase text-center">
            <Link to="/" className="text-white p-0">
              Torrent Site
            </Link>
          </div>
        </li>
        {/*Search Form*/}
        <li>
          <form className="search-form" role="search" onSubmit={handleSubmit}>
            <div className="form-group md-form mt-0 pt-1 waves-light">
              <input
                type="text"
                className="form-control"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search"
              />
            </div>
          </form>
        </li>
        <li>
          <ul className="collapsible collapsible-accordion sidenav-list">
            <li>
              <Link to="/top" className="waves-effect">
                <i className="fal fa-star" /> Top
              </Link>
            </li>
            <li>
              <Link to="/trending" className="waves-effect arrow-r">
                <i className="fal fa-signal-alt" />
                Trending
              </Link>
            </li>
            <li>
              <Link to="/popular" className="collapsible-header waves-effect arrow-r">
                <i className="fal fa-fire-alt" /> Popular
              </Link>
            </li>
            <li>
              <a href="/"
                onClick={e => e.preventDefault()}
                className="collapsible-header c-pointer waves-effect arrow-r"
              >
                <i className="fal fa-layer-group" /> Category
                <i className="fal fa-angle-down rotate-icon" />
              </a>
              <div className="collapsible-body">
                <ul className="sidenav-list">
                  <li>
                    <Link to="/category/movies" className="waves-effect">
                      <i className="fal fa-film" /> Movies
                    </Link>
                    <Link to="/category/anime" className="waves-effect">
                      <i className="fal fa-user-ninja" /> Anime
                    </Link>
                    <Link to="/category/tvshow" className="waves-effect">
                      <i className="fal fa-tv" /> TV Shows
                    </Link>
                    <Link to="/category/games" className="waves-effect">
                      <i className="fal fa-gamepad-alt" /> Games
                    </Link>
                    <Link to="/category/apps" className="waves-effect">
                      <i className="fab fa-windows" /> Apps
                    </Link>
                    <Link to="/category/music" className="waves-effect">
                      <i className="fal fa-music" /> Music
                    </Link>
                    <Link to="/category/documentaries" className="waves-effect">
                      <i className="fal fa-video" /> Documentaries
                    </Link>
                    <Link to="/category/other" className="waves-effect">
                      <i className="fal fa-box-open" /> Other
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </li>
      </ul>
      <div className="sidenav-bg mask-strong" />
    </div>
  );
};

export default withRouter(Sidenav);
