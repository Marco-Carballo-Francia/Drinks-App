const Category = require("../../models/Category");


const getCategories = async (req, res) => {
    try {
        let categories = await Category.find()
            .populate('listItems', ['name']);
        res.json(categories);
    } catch(error) {
        console.log(error);
    }
};

const postCategory = async (req, res) => {

    const { name } = req.body;
    try {

        let newCategory = new Category({
            name,
            listItems: items._id
        });

        newCategory = await newCategory.save();
        res.json(newCategory);
    } catch(error) {
        console.log(error);
    }
};

const updateCategory = async (req, res) => {
    const { name } = req.body;
    const { id } = req.params;
    try {
      let edit = await Category.findByIdAndUpdate(id, { name: name });
      res.json(edit);
    } catch (error) {
      console.log(error);
    }
  };


module.exports = {
    getCategories,
    postCategory,
    updateCategory
}