import React from "react";

export default () => (
  <div className="row">
    <div className="col-12 col-lg-6 order-lg-12">
      <div className="row">
        <div className="col-6">
          <select className="mdb-select md-form colorful-select dropdown-danger">
            <option value="1">Select Day</option>
            <option value="2">Today</option>
            <option value="3">This Week</option>
          </select>
        </div>
        <div className="col-6">
          <select className="mdb-select md-form colorful-select dropdown-danger">
            <option value="1">Select Category</option>
            <option value="5">Movie</option>
            <option value="5">Anime</option>
            <option value="3">TV Shows</option>
            <option value="4">Games</option>
            <option value="2">Apps</option>
            <option value="5">Music</option>
            <option value="5">Documentaries</option>
            <option value="5">Other</option>
          </select>
        </div>
      </div>
    </div>
    <div className="col-12 col-lg-6 d-flex align-items-center search-result-count mb-3">
      <small>About 40 torrents (0.95 seconds)</small>
    </div>
  </div>
);
