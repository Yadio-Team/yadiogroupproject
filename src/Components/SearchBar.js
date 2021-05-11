import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import spotify from "../assets/spotify.png";
import { Link } from 'react-router-dom';
import pexels from "../assets/pexels.mp4"

const SearchBar = () => {
  const [name, setName] = useState("");
  const [shows, setShows] = useState([]);
  const [token, setToken] = useState("");
  const [active, setActive] = useState(false);

  const search = () => {
    axios("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " +
          new Buffer(
            "34e6e6f8d0c44a05969f59e1f9923d96" +
            ":" +
            "6ea7643063d54381be57faa6160712bd"
          ).toString("base64"),
      },
      data: "grant_type=client_credentials",
    })
      .then((tokenresponse) => {
        console.log(tokenresponse.data.access_token);
        setToken(tokenresponse.data.access_token);

        // Api call for retrieving tracks data
        axios(
          `https://api.spotify.com/v1/search?q=${name}&type=show&market=US&limit=20`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: "Bearer " + tokenresponse.data.access_token,
            },
          }
        )
          .then((trackresponse) => {
            console.log(trackresponse.data);
            setShows(trackresponse.data.shows.items);
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };

  const toggleClass = () => {
    const currentState = active;
    setActive(!currentState);
  };

  const handleKeyPress=(e)=>{
if(e.key==='Enter'){
  search()
  toggleClass()
}
  }

  const showsMapped = shows.map((show) => {
    return (
      <div className="show-preview">
        <img className="img-results" src={show.images[1].url} alt="" />
        <a href={show.external_urls.spotify} target="_blank"><img className="spotify" src={spotify} /></a>
      </div>
    );
  });

  return (
    <div className="vi">
      <form className={active ? "search-top" : "search"}>
        FIND YOUR NEXT FAVORITE PODCAST
        <br></br>
        <input
          className="query"
          type="text"
          placeholder="SEARCH PODCASTS"
          onKeyPress={handleKeyPress}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <button
          className="search-bar"
          type="button"
          onClick={() => {
            search();
            toggleClass();
          }}
        >
          SEARCH
        </button>
      </form>

      <div className={active ? "hide-video" : "video-container"}>
        <video autoPlay muted loop>
          <source src={pexels} type="video/mp4" />
        </video>
      </div>

      <div className={active ? "map-shows" : "no-shows"}>{showsMapped}</div>
    </div>
  );
};

const mapStateToProps = function (state) {
  return state;
};

export default connect(mapStateToProps)(SearchBar);
