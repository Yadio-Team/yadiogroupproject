import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import Header from './Header';


const SearchBar = () => {

    const { SPOTIFY_CLIENT_ID, CLIENT_SECRET } = process.env

    const [title, setTitle] = useState("sports");
    const [shows, setShows] = useState([]);
    const [token, setToken] = useState("");
    const [data, setData] = useState([]);
    const queryValue = "";
    const history = useHistory();

    const search = () => {

        axios('https://accounts.spotify.com/api/token', {
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + (new Buffer('34e6e6f8d0c44a05969f59e1f9923d96' + ':' + '6ea7643063d54381be57faa6160712bd').toString('base64')),
            },
            data: 'grant_type=client_credentials'
        }).then(tokenresponse => {
            console.log(tokenresponse.data.access_token);
            setToken(tokenresponse.data.access_token);

            // Api call for retrieving tracks data
            axios(`https://api.spotify.com/v1/search?q=${title}&type=show&market=US&limit=20`, {
                'method': 'GET',
                'headers': {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + tokenresponse.data.access_token
                }
            }).then(trackresponse => {
                console.log(trackresponse.data);
                setShows(trackresponse.data.shows.items);
            }).catch(error => console.log(error))
        }).catch(error => console.log(error));
    }

    const addToCollection = async (show) => {

        axios.post("/audio-books", show).then(alert("show added"))
    }

    const showsMapped = shows.map((show) => {
        return (
            <div className="show-preview">
                <img src={show.images[1].url} />
                <button onClick={() => addToCollection(show)}>Add to Collection</button>
            </div>
        )
    })

    return (
        <div className="vid">

            <div>
                <input className="search" type="text"
                    placeholder="SEARCH TITLES"
                    onChange={(e) => setTitle(e.target.value)}>
                </input>

                <button type="button" onClick={search}>
                    SEARCH
            </button>
            </div>


            <div class="video-container">


                <video autoPlay muted loop>
                    <source src="https://vod-progressive.akamaized.net/exp=1620347480~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2775%2F21%2F538877060%2F2554448071.mp4~hmac=49e6e36558bf5bab9bfa004edfae4753e16271321648f98ebbf7ffe104a5727f/vimeo-prod-skyfire-std-us/01/2775/21/538877060/2554448071.mp4?filename=Waves+-+70796.mp4" type="video/mp4" />
                </video>


            </div>





            <div>
                {showsMapped}
            </div>

        </div>
    )
}

const mapStateToProps = function (state) {
    return state;
};

export default connect(mapStateToProps)(SearchBar);
