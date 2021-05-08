import React, { useEffect, useState } from "react";

const { Client } = require("podcast-api");
const client = Client({ apiKey: "9585898bf17b4b92a143199939a720f8" });

const Podcast = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    apiCall();
  }, []);

  // const fetchData=(e) =>{e.preventDefault()
  const apiCall = () => {
    const data = { page: 1 };

    // .then((res) => {
    //     setData(res.data)
    //     // Get response json data here
    //     console.log(res.data);
    //   }).catch((error) => {
    //     console.log(error)
    //   })
    // //   }
    client
      .fetchCuratedPodcastsLists(data)
      .then((res) => {
        setData(res.data.curated_lists);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  };

  console.log(data);
  const mappedPodcasts = data.map((e) => {
    return (
      <div>
        <h2>{e.title}</h2>
        {e.podcasts.map((pod) => {
          return <img src={pod.image} alt="coverart" />;
        })}
      </div>
    );
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
