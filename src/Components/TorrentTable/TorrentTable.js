import React from "react";
import { v4 as uuid } from "uuid";
import Axios from "../../Services/Axios";

const getMagentLink = url => {
  Axios.get(`/torrent?link=${url}`)
    .then(res => window.open(res.data))
    .catch(err => console.log(err) || alert("An error occurred"));
};

export default ({ torrents, isLoading }) => {
  return (
    <div>
      {!isLoading && (
        <div>
          <div className="row text-center">
            <div className="col-9 col-md-8">
              <div className="grid-th text-left pl-2">NAME</div>
            </div>
            <div className="col-1 d-none d-md-table-cell">
              <div className="grid-th">SE</div>
            </div>
            <div className="col-1 d-none d-md-table-cell">
              <div className="grid-th">LE</div>
            </div>
            <div className="col-3 col-md-2">
              <div className="grid-th">SIZE</div>
            </div>
          </div>
          <hr className="mb-0" />
          {!!torrents.length &&
            torrents.map(torrent => {
              const { name, se, le, size, link, ico } = torrent;

              return (
                <div
                  className="row waves-effect waves-dark text-center hover-light py-3"
                  onClick={() => getMagentLink(link)}
                  key={uuid()}
                >
                  <div className="col-9 col-md-8">
                    <div className="d-flex align-items-center h-100">
                      <i className={`${ico} mr-2`}></i>
                      <div className="text-justify grid-td pl-2">
                        {name.split(".").join(" ")}
                      </div>
                    </div>
                  </div>
                  <div className="col-1 d-none d-md-table-cell">
                    <div className="v-align h-100 justify-content-center">
                      <div className="grid-td d-none d-md-block green-text">
                        {se}
                      </div>
                    </div>
                  </div>
                  <div className="col-1 d-none d-md-table-cell">
                    <div className="v-align h-100 justify-content-center">
                      <div className="grid-td d-none d-md-block red-text">
                        {le}
                      </div>
                    </div>
                  </div>
                  <div className="col-3 col-md-2">
                    <div className="v-align h-100 justify-content-center">
                      <div className="clear-fix"></div>
                      <div className="grid-td">
                        {size}
                        <div className="green-text d-md-none">{se}</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          {!torrents.length && (
            <div
              className="row waves-effect waves-dark text-center hover-light py-3"
              key={uuid()}
            >
              <div className="col-12">
                <div className="grid-td">No Torrents Found!</div>
              </div>
            </div>
          )}
        </div>
      )}
      {isLoading && <div>Loading....</div>}
    </div>
  );
};