const Category = require("../../models/Category");


const getCategories = async (req, res) => {
    try {
        let categories = await Category.find();
        res.json(categories);
    } catch(error) {
        console.log(error);
    }
};

const postCategory = async (req, res) => {
    const { name } = req.body;
    try {
        const newCategory = new Category({
            name
        });

        newCategory = await newCategory.save();
        res.json(newCategory);
    } catch(error) {
        console.log(error);
    }
};

module.exports = {
    getCategories,
    postCategory
}