const Category = require("../../models/Category");


const getCategories = async (req, res) => {
    try {
        let categories = await Category.find()
        res.json(categories);
    } catch(error) {
        console.log(error);
    }
};

const postCategory = async (req, res) => {

    const { nombre } = req.body;
    try {

        let newCategory = new Category({
            nombre
        });

        newCategory = await newCategory.save();
        res.json(newCategory);
    } catch(error) {
        console.log(error);
    }
};

const updateCategory = async (req, res) => {
    const { nombre } = req.body;
    const { id } = req.params;
    try {
      let edit = await Category.findByIdAndUpdate(id, { nombre: nombre });
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