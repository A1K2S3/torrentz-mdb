import React, { useState, useEffect } from "react";
import { TorrentTable, Juggler } from "../../Components";
import useFetchTorrents from "../../customeHooks/useFetchTorrents";

export default (props) => {
  const { torrents, loadingText, time } = useFetchTorrents(`/search/${props.match.params.term}`)
  const [searchText, setSearchText] = useState(props.match.params.term)

  useEffect(() => {
    // Hide sidenav.
    window.$('#sidenav-overlay').click()
  }, [props.match.params.term])

  const handleSubmit = e => {
    e.preventDefault();
    props.history.push(`/search/${searchText}`)
  }

  return (
    <div className="searchComponent">
      <small>
        About {torrents.length} torrents ({(time / 1000).toFixed(2) || 0} seconds)
      </small>

      <div className="row mt-3">
        <div className="col-8">
          {loadingText
            ? <Juggler />
            : <TorrentTable torrents={torrents} />
          }
        </div>
        <div className="col-4">
          <form
            role="search"
            className="search-form px-1"
            onSubmit={handleSubmit}
          >
            <div className="form-group md-form mt-0 pt-1 waves-light">
              <input
                type="text"
                name="search"
                className="form-control border-0"
                value={searchText}
                onChange={e => setSearchText(e.target.value)}
                placeholder="Search"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
