module.exports = {
    getReview: async (req, res) => {
        const db = req.app.get('db')
        const { title } = req.body
        const review = await db.reviews.get_title_review(title)
        if (review) {
            res.status(200).send(review)
        } else {
            res.status(400).send('No reviews found')
        }
    },
    createReview: async (req, res) => {
        const db = req.app.get('db')
        
        let { title, rating, reviewText, userName } = req.body
        let date = new Date
        const newReview = await db.reviews.create_review(title, rating, reviewText, userName, date)
        if (newReview) {
            res.status(200).send(newReview)
        } else {
            res.status(400).send('Review could not be created')
        }
    },
    getReviewbyUser: async (req, res) => {
        const db = req.app.get('db')
        const { userName } = req.body
        try {
            const userReview = await db.reviews.get_all_reviews(userName)
            res.status(200).send(userReview)
        } catch (error) {
            console.log('Unable to find review', error);
            res.status(400).send('No reviews by user')
        }
    }
}