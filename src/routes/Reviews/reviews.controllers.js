const Reviews = require("../../models/Reviews");


const getReviews = async (req, res) => {
    try {
        let reviews = await Reviews.findAll()
    } catch(error) {
        console.log(error);
    }
}


const postReviews = async (req, res) => {
    const { comment, rating } = req.body
    try {
        const newReview = new Review({
            comment,
            rating
        });

        newReview = await newReview.save();
        res.json(newReview);
    } catch(error) {
        console.log(error);
    }
}

module.exports = {
    getReviews,
    postReviews,
  };