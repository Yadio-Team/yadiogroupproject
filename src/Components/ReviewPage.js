import React, { useState } from "react";
import axios from "axios";
import ReactStars from "react-rating-stars-component";
import Modal from "react-modal";
import { connect } from "react-redux";
import Header from "./Header";
import CreateReview from "./CreateReview";

// ReactModal.setAppElement('#main');

const ReviewPage = () => {
  const [reviews, setReviews] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [reviewInput, setReviewInput] = useState("");
  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    
  }

  function closeModal(){
    setIsOpen(false);
  }

  const reviewSearch = () => {
    axios
      .post("/review/name", { name: reviewInput })
      .then((res) => {
        console.log(res.data);
        setReviews(res.data);
      })
      .catch((err) => {
        console.log(err, "no review available");
      });
  };

  const mappedReviews = reviews.map((review) => {
    return (
      <div key={review.review_id}>
        <p>{review.name}</p>
        <p>
          <ReactStars value={review.rating} />
        </p>
        <p>{review.review_text}</p>
        <p>{review.user_name}</p>
        <p>{review.date_created}</p>
        <button onClick={openModal}>Create Review</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
        >{<CreateReview/>}</Modal>
        
      </div>
    );
  });
  return (
    <div>
      <Header />
      <input
        className="name"
        type="text"
        value={reviewInput}
        placeholder="SEARCH REVIEWS"
        onChange={(e) => setReviewInput(e.target.value)}
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
