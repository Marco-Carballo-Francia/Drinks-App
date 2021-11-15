const Reviews = require("../../models/Reviews");
const User = require("../../models/User");

const getReviews = async (req, res) => {
    try {
        let reviews = await Reviews.findAll()
        .populate('user', ['nombre']);
    } catch(error) {
        console.log(error);
    }
}


const postReviews = async (req, res) => {
    const { comentario, rating, nameUser } = req.body
    try {
        let userID = await User.find({ nombre: nombre});
        const newReview = new Reviews({
            comentario,
            user: userID._id
        });

        newReview = await newReview.save();
        let getNewReview = await Reviews.findById(newReview)
        .populate('user', ['nombre']);
        res.json(getNewReview);
    } catch(error) {
        console.log(error);
    }
}

module.exports = {
    getReviews,
    postReviews,
  };