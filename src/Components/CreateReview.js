import React, { Component } from "react";
import axios from "axios";
import ReactStars from "react-rating-stars-component";
import Header from "./Header";

export default class CreateReview extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      rating: 0,
      reviewText: "",
      userName: "",
    };
  }

  ratingChanged = (newRating) => {
    this.setState({ rating: newRating });
    console.log(newRating);
  };

  handleInput = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleSend = () => {
    const { name, rating, reviewText, userName } = this.state;
    axios
      .post("/review/create", { name, rating, reviewText, userName })
      .then((res) => {
        this.setState({
          name: "",
          rating: 0,
          reviewText: "",
          userName: "",
        });
      });
  };
  handleChange = (event) => {
    const input = event.target;
    const checkValue = input.checked === "false" ? false : true;
    const value = input.type === "checkbox" ? checkValue : input.value;
  };

  render() {
    const { title, rating, reviewText, userName } = this.state;

    return (
      <div>
        <Header />
        <div className="create-form">
          <h1>Create A Review</h1>
          <input
            placeholder="Podcast Title"
            type="text"
            name="title"
            value={title}
            onChange={this.handleInput}
          />

          <ReactStars
            count={5}
            onChange={this.ratingChanged}
            size={26}
            activeColor="#ffd700"
            type="number"
            name="rating"
            value={rating}
          />
          <input
            className="your-review"
            placeholder="Your Review"
            type="text"
            name="reviewText"
            value={reviewText}
            onChange={this.handleInput}
          />

          <button className="submit-review" onClick={this.handleSend}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}
