import React from "react";
import Header from './Header';
import Podcast from './Podcast'
import TouchCarousel from 'react-touch-carousel'


const Home = () => {

  return (
    <div className="Home">
      <div className="Header-Container" >
        <Header />
      </div>

      <div className="Cover-Art">
        <Podcast />
      </div>
      {/* <div className="Row">
        
          </div> */}

    </div>
  )
}

export default Home;