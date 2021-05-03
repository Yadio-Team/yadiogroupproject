import React, { Component } from "react";
import axios from "axios";
import Header from './Header'

export default class CreateReview extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      rating: "",
      reviewText: "",
      userName: "",
    };
  }
  handleInput = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleSend = () => {
    const { title, rating, reviewText, userName } = this.state;
    axios
      .post("/review/create", { title, rating, reviewText, userName })
      .then((res) => {
        this.setState({
          title: "",
          rating: "",
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
      <div className="create-form">
        <Header/>
        <h1>Create A Review</h1>
        <input
          placeholder="title"
          type="text"
          name="title"
          value={title}
          onChange={this.handleInput}
        />
        <input
          placeholder="rating"
          type="number"
          name="rating"
          value={rating}
          onChange={this.handleInput}
        />
        <input
          placeholder="Your Review"
          type="text"
          name="reviewText"
          value={reviewText}
          onChange={this.handleInput}
        />
        <input
          className="podcast-review"
          name="podcast"
          onChange={this.handleChange}
          type="checkbox"
        />{" "}
        Podcast
        <input
          className="audiobook-review"
          name="audiobook"
          onChange={this.handleChange}
          type="checkbox"
        />{" "}
        Audiobook
        <button className="submit-review" onClick={this.handleSend}>
          Submit
        </button>
      </div>
    );
  }
}
