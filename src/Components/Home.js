import React from "react";
import Header from './Header';
import axios from 'axios';
import { connect } from 'react-redux';
import Podcast from './Podcast'
import SearchBar from "./SearchBar"

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