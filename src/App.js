import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import { Navbar } from "./Components";
import Sidebar from "./Components/Sidebar";
import Search from "./Pages/Search/Search";
import CommingSoon from "./Pages/CommingSoon/CommingSoon";

export default () => {
  return (
    <Router>
      <div className="alert alert-danger alert-dismissible fade show mb-0" role="alert">
        This site is still under development.
          <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <header>
        <Sidebar />
        <Navbar />
      </header>
      <div className="container mt-3">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search/:term" component={Search} />
          <Route exact path="/search" component={() => <Redirect to="/" />} />
          <Route path="/" component={CommingSoon} />
          <Route path="/category" component={CommingSoon} />
        </Switch>
      </div>
    </Router>
  );
};
