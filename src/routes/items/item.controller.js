const Item = require("../../models/Item.js");
const Category = require('../../models/Category');
const Reviews = require('../../models/Category');

const getItems = async (req, res) => {
  let { nombre, categoria } = req.query;
  // console.log('category', category);
  try {
    let items = await Item.find()
      .populate('categoria', ['nombre'])
      .populate('reviews', ['coment', 'rating']);

    if (name) {
      items = items.filter((i) => i.nombre.toLowerCase().includes(nombre.toLowerCase()));
    } else if (category) {
      // console.log('items.categoria', items[0].numReviews);
        items = items.filter((i) => i.categoriae === categoria); //no trae las categorias pq cambiamos el modelo, mismo error que en tickets
    }
    res.json(items);
  } catch (err) {
    console.log(err);
  }
};

const updateItem = async (req, res) => {
  const { nombre, descripcion, precio, imagen, rating, categoria, stock } = req.body;
  const { id } = req.params;
  try {
    let categories;
    if(categoria) {
      let getCategory = await Category.find({ nombre: categoria });
      if(getCategory) {
        categories = getCategory;
      } else {
        
      }
    };

    let reviews;
    if(reviewsID) {
      let getReviews = await Reviews.find({ _id: reviewsID }); 
      if(getReviews) {
        reviews = getreviews;
      }
    };

    let edit = await Item.findByIdAndUpdate(id, {
      nombre: nombre,
      descripcion: descripcion,
      precio: precio,
      imagen: imagen,
       reviews: reviews._id,
      categoria:  getCategory[0]._id,
      stock: stock
    });
    res.json(edit);
  } catch (error) {
    console.log(error);
  }
};

//ge items by category

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
  const { nombre, descripcion, precio, imagen, reviews, categoria, stock, rating } = req.body;

  try {
	  let getCategory = await Category.find({nombre: categoria});
    console.log('getCategory', getCategory);
	let newItem = new Item({
		nombre,
		descripcion,
		precio,
		imagen,
		categoria: getCategory[0]._id,
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
    const item = await Item.findById(id)
    .populate('categoria', ['nombre'])
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