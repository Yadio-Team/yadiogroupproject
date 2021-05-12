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
  // const [name, setName] = useState('');
  // const [rating, setRating] = useState(0);
  // const [reviewText, setReviewText] = useState('');
  // const [userName, setUserName] = useState('');
  const [update, setUpdate] = useState({
    name: "",
    rating: "",
    reviewText: "",
    userName: "",

  });

  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.

  }


  function closeModal() {
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

  const handleKeyPress=(e)=>{
    if(e.key==='Enter'){
reviewSearch()}
    }
  function reviewReset() {
    closeModal();
    reviewSearch();
   }

  const handleSend = () => {
    // const { name, rating, reviewText, userName } = this.state;
    axios
      .post("/review/create", update)
      .then((res) => {
        setUpdate(res.data);
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
        
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
        >{<CreateReview handleSend={handleSend} />}
          <button onClick={reviewReset}>X</button>
        </Modal>

      </div>
    );
  });
  return (
    <div className='search-review'>
      <Header />
     <div className='search-container'></div> <input
        className="name"
        type="text"
        value={reviewInput}
        placeholder="SEARCH REVIEWS"
        onChange={(e) => setReviewInput(e.target.value)}
        onKeyPress={handleKeyPress}
      ></input>
      <button
        className={closeModal ? "refresh-button" : "search-bar"}
        type="button"
        onClick={() => {
          reviewSearch();
          // toggleClass();
        }}
      >
        SEARCH
      </button>
      <button onClick={openModal}>Create Review</button>
      <div>{mappedReviews}</div>
    </div >
  );
};
const mapStateToProps = function (state) {
  return state;
};

export default connect(mapStateToProps)(ReviewPage);
