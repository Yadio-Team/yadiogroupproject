import React, { useEffect, useState } from "react";
import axios from "axios";
const { Client, fetchBestPodcasts } = require("podcast-api");
const client = Client({ apiKey: "9585898bf17b4b92a143199939a720f8" });

const Podcast = () => {
  const [show, setShow] = useState([]);
  const [bestPodcasts, setBestPodcasts] = useState([]);
  const [genre, setGenre] = useState("");
  const [data, setData] = useState({podcasts:[]});

  useEffect(() => {
    apiCall();
  }, []);

  // const fetchData=(e) =>{e.preventDefault()
  const apiCall = () => {
    const data = { genre_id: "77", page: 1, region: "us", safe_mode: 0 };

    // .then((res) => {
    //     setData(res.data)
    //     // Get response json data here
    //     console.log(res.data);
    //   }).catch((error) => {
    //     console.log(error)
    //   })
    // //   }
    client
      .fetchBestPodcasts(data)
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  };

  console.log(data);
  const mappedPodcasts = data.podcasts.map((e) => {
    return <img src={e.image} />;
  });
  return (
    <div>
      These are the best podcasts
      <div>
        {/* <img src={data.podcasts[1].image}/>
        <img src={data.podcasts[2].image}/>
        <img src={data.podcasts[3].image}/>
        <img src={data.podcasts[4].image}/>
        <img src={data.podcasts[5].image}/>
        <img src={data.podcasts[6].image}/> */}
      {mappedPodcasts}
      </div>
    </div>
  );
};

export default Podcast;
