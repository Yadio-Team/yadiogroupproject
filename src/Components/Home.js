import React from "react";
import Header from './Header';
import axios from 'axios';
import { connect } from 'react-redux';

const Home = () => {

  return (
    <div className="Home">
      <div className="Header-Container" >
        <Header />
      </div>
      <div className="Row">
        Most Reviewed Podcastsssssss
          </div>
      <div className="Cover-Art">
        Display Cover Art Here
            </div>
      <div className="Row">
        Podcast 15 min or less
          </div>
      <div className="Cover-Art">
        Display Cover Art Here
            </div>
    </div>
  )
}

export default Home;