import React, { Component, Fragment } from "react";

export default class extends Component {
  constructor() {
    super();
    this.state = {
      search: ""
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.history.push(`/search/${this.state.search}`)
  }

  render = () => (
    <Fragment>
      <form
        role="search"
        className="search-form px-1"
        onSubmit={this.handleSubmit}
      >
        <div className="form-group md-form mt-0 pt-1 waves-light">
          <input
            type="text"
            name="search"
            className="form-control border-0"
            value={this.state.search}
            onChange={e => this.setState({ search: e.target.value })}
            placeholder="Search"
          />
        </div>
      </form>
    </Fragment>
  );
}
