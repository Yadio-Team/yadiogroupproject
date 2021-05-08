import React, { useState } from "react";
import axios from "axios";
import Modal from "react-modal";
import { connect } from "react-redux";
import Header from "./Header";

// ReactModal.setAppElement('#main');

const ReviewPage = () => {
  const [reviews, setReviews] = useState();
  const [modalIsOpen, setIsOpen] = useState(false);

  const reviewSearch = () => {
    axios
      .get("/review/name")
      .then((res) => {
        console.log(res.data);
        setReviews(res.data);
        console.log(reviews);
      })
      .catch((err) => {
        console.log(err, "no review available");
      });
  };
  const mappedReviews = reviews?.map((review) => {
    return (
      <div>
        <p>{review}</p>
      </div>
    );
  });
  return (
    <div>
      <Header />
      <input
        className="name"
        type="text"
        placeholder="SEARCH REVIEWS"
        onChange={(e) => setReviews(e.target.value)}
      ></input>
      <button
        className="search-bar"
        type="button"
        onClick={() => {
          reviewSearch();
          // toggleClass();
        }}
      >
        SEARCH
      </button>
      <div>{mappedReviews}</div>
    </div>
  );
};
const mapStateToProps = function (state) {
  return state;
};

export default connect(mapStateToProps)(ReviewPage);
