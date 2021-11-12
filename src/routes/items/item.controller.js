const Item = require("../../models/Item.js");
const Category = require('../../models/Category');
const Reviews = require('../../models/Category');

const getItems = async (req, res) => {
  let { name, category } = req.query;
  // console.log('category', category);
  try {
    let items = await Item.find()
      .populate('categories', ['name'])
      .populate('reviews', ['coment', 'rating']);

    if (name) {
      items = items.filter((i) => i.name.toLowerCase().includes(name.toLowerCase()));
    } else if (category) {
      // console.log('items.categoria', items[0].numReviews);
        items = items.filter((i) => i.categories === category); //no trae las categorias pq cambiamos el modelo, mismo error que en tickets
    }
    res.json(items);
  } catch (err) {
    console.log(err);
  }
};

const updateItem = async (req, res) => {
  const { name, description, precio, imagen, reviewsID, category, stock } = req.body;
  const { id } = req.params;
  try {
    let categories
    if(category) {
      categories = await Category.find({ name: category }); 
    };

    let reviews
    if(reviewsID) {
      reviews = await Reviews.find({ _id: reviewsID }); 
    };

    let edit = await Item.findByIdAndUpdate(id, {
      name: name,
      description: description,
      precio: precio,
      imagen: imagen,
      reviews: reviews._id,
      categories: categories._id,
      stock: stock
    });
    res.json(edit);
  } catch (error) {
    console.log(error);
  }
};


const getCategories = async (req, res) => {
  try {
    let categories = await Item.find();
    categories = categories.map((x) => x.category);
    categories = [...new Set(categories)];
    res.json(categories);
  } catch (error) {
    console.log(error);
  }
};

const createItem = async (req, res) => {
  const { name, descripcion, precio, imagen, reviews, categories, stock, rating } = req.body;

  try {
	  let getCategory = await Category.find({name: categories});
    console.log('getCategory', getCategory);
	let newItem = new Item({
		name,
		descripcion,
		precio,
		imagen,
		categories: getCategory[0]._id,
		stock,
    rating,
		reviews
	});
	newItem = await newItem.save();
	res.json(newItem);
  } catch (error) {
	  console.log(error);
  }
};


const getItemById = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await Item.findById(id);
    res.json(item);
  } catch (error) {
    console.log(error);
  }
};

const updateItemUser = async (req, res) => {
    const { id } = req.params;
    const { number } = req.body;
  try {
    let item = await Item.findById(id);
    let { cinco, cuatro, tres, dos, uno } = item.numReviews;
    let changed;
    let count;
    if (number === 5) {
      count = cinco + 1;
      changed = "cinco";
    }
    if (number === 4) {
      count = cuatro + 1;
      changed = "cuatro";
    }
    if (number === 3) {
      count = tres + 1;
      changed = "tres";
    }
    if (number === 2) {
      count = dos + 1;
      changed = "dos";
    }
    if (number === 1) {
      count = uno + 1;
      changed = "uno";
    }
    const rating = item.rating;
    const newRating =
      (5 * cinco + 4 * cuatro + 3 * tres + 2 * dos + 1 * uno) /
      (cinco + cuatro + tres + dos + uno);
    console.log(newRating);
    await Item.findByIdAndUpdate(id, {
      rating: newRating.toString(),
      numReviews: { ...item.numReviews, [changed]: count },
    });
    let updated = await Item.findById(id);
    res.json(updated);
  } catch (error) {
    console.log(error);
  }
};

// const updateItemAdmin = async (req, res) => {
// 	const {  } = req.body;
// 	const { id } = req.params;
// 	try {
// 	}catch (error) {
// 		console.log(error)
// 	}
// }

module.exports = {
  getItems,
  getCategories,
  createItem,
  getItemById,
  updateItemUser,
  updateItem
};




    // "name": "skoll",
		// "descripcion": "Cerveza brasilera",
		// "precio": "$150",
		// "categories": "vinos",
		// "stock": 120