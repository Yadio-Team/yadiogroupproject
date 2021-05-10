module.exports = {
  getReview: async (req, res) => {
    const db = req.app.get("db");
    const { name } = req.body;
    const review = await db.reviews.get_name_review(name);
    if (review) {
      res.status(200).send(review);
    } else {
      res.status(400).send("No reviews found");
    }
  },
  createReview: async (req, res) => {
    const db = req.app.get("db");

    let { name, rating, reviewText } = req.body;
    let { user_name } = req.session.user;
    let date = new Date();
    const newReview = await db.reviews.create_review(
      name,
      rating,
      reviewText,
      user_name,
      date
    );
    if (newReview) {
      res.status(200).send(newReview);
    } else {
      res.status(400).send("Review could not be created");
    }
  },
  getReviewbyUser: async (req, res) => {
    const db = req.app.get("db");
    const { userName } = req.body;
    try {
      const userReview = await db.reviews.get_all_reviews(userName);
      res.status(200).send(userReview);
    } catch (error) {
      console.log("Unable to find review", error);
      res.status(400).send("No reviews by user");
    }
  },
};
