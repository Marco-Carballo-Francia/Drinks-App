const Item = require("../../models/Item.js");
const Category = require('../../models/Category');
const Reviews = require('../../models/Category');

const getItems = async (req, res) => {
  let { name, category } = req.query;
  // console.log('categorias', categorias);
  console.log('category', category);
  try {
    let items = await Item.find()
    .populate('categorias', ['nombre'])
    .populate('reviews', ['comentario', 'rating']);
    // let ulti = items.length - 1;
    
    if (name !== "") {
      items = items.filter(i => i.nombre.toLowerCase().includes(name.toLowerCase()));
    } else if (category) {
      // console.log('categorias', items[0].categorias[0].nombre);
      items = items.filter(i => i.categorias[0]?.nombre === category); //Plantearlo con un for dentro del filter o ver como hacer
    }
    res.json(items);
  } catch (err) {
    console.log(err);
  }
};

const updateItem = async (req, res) => {
  const { nombre, descripcion, precio, imagen, reviewsObj, categorias, stock } = req.body;
  const { id } = req.params;
  try {
    let categoriasID = [];
    if(categorias) {
      for (let i = 0; i < categorias.length; i++) {
        let getCategoria = await Category.find({ nombre: categorias[i] });
        // console.log('getCategoria', getCategoria);
        if(getCategoria !== null || getCategoria.length !== 0) categoriasID.push(getCategoria[0]._id);
        else return res.send(`No se encontro la categoria ${categorias[i]}`)
      };
    };

    // let reviews;
    // if(reviewsID) {
    //   let getReviews = await Reviews.find({ _id: reviewsID }); 
    //   if(getReviews) {
    //     reviews = getreviews;
    //   }
    // };
    let edit = await Item.findByIdAndUpdate(id, {
      nombre: nombre,
      descripcion: descripcion,
      precio: precio,
      imagen: imagen,
      categorias: categoriasID,
      // reviews: 
      stock: stock
    }, {new: true});
    edit = await edit.save();

    let getEdit = await Item.findById(edit._id)
      .populate('categorias', ['nombre']);
    res.json(getEdit);
  } catch (error) {
    console.log(error);
  }
};

const createItem = async (req, res) => {
  const { 
    nombre, 
    descripcion, 
    precio, 
    imagen, 
    reviews, 
    categorias, 
    stock
  } = req.body;
  try {
    let getItemByName = await Item.find({nombre: nombre});
    // console.log('getItemNombre', getItemByName[0].nombre);
    if(getItemByName === null || getItemByName.length === 0){
      let getCategory = await Category.find({nombre: categorias});
      // console.log('getCategory', getCategory[0]._id);
      let newItem = new Item({
        nombre,
        descripcion,
        precio,
        imagen,
        categorias: getCategory[0]._id,
        stock,
        reviews
      });
      // console.log(newItem.categorias);
      newItem = await newItem.save();
  
      let itemCreate = await Item.findById(newItem._id)
        .populate('categorias', ['nombre']);
      // console.log('itemCreate', itemCreate); 
      return res.json(itemCreate);
    } else if(nombre === getItemByName[0].nombre)  return res.send(`El producto ${nombre} ya existe`);
  } catch (error) {
	  console.log(error);
  }
};


const getItemById = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await Item.findById(id)
    .populate('categorias', ['nombre'])
    .populate('reviews', ['comentario']);

    if(item !== null || item.length !== 0)  return res.json(item)
    res.send('Hubo un problema para traer este producto');
  } catch (error) {
    console.log(error);
  }
};

const updateRating = async (req, res) => {
  const { id } = req.params;
  const { numero } = req.body;
  try {
    let itemByID = await Item.findById(id)
      .populate('categorias', ['nombre'])
      .populate('reviews', ['comentario', 'user']);
    // console.log('itemByID', itemByID);

    if (itemByID !== null || itemByID.length !== 0) {
      let { cinco, cuatro, tres, dos, uno } = item.numRating;
      // console.log('cinco', cinco);
      let changed;
      let count;
      switch(numero) {
        case 1:
          count = uno + 1;
          changed = "uno";
          break;
        case 2:
          count = dos + 1;
          changed = "dos";
          break;
        case 3:
          count = tres + 1;
          changed = "tres";
          break;
        case 4:
          count = cuatro + 1;
          changed = "cuatro";
          break;
        case 5:
          count = cinco + 1;
          changed = "cinco";
          break;
        default:
          return res.send('Hubo un error');
      };
      let multi = (5 * cinco)+(4 * cuatro)+(3 * tres)+(2 * dos)+(1 * uno)
      let sum = cinco + cuatro + tres + dos + uno
      const newRating = multi / sum;
      // console.log('newRating', newRating);
  
      let update = await Item.findByIdAndUpdate(id, {
        rating: newRating,
        numReviews: { ...item.numReviews, [changed]: count }
      }, { new: true });
      update = await update.save();
  
      let itemUpdate = await Item.findById(update._id)
        .populate('categorias', ['nombre'])
        .populate('reviews', ['comentario', 'user']);
      // console.log('itemUpdate', itemUpdate);
      return res.json(itemUpdate);
    }
    res.send('Hubo un error al traer el producto');
  } catch (error) {
    console.log(error);
  }
}

const deleteItem = async (req, res) => {
  const { id } = req.params;
  try {
    let deleted = await Item.findByIdAndDelete(id);
    // console.log('deleted', deleted);
    res.send(`Se elimino correctamente el producto ${deleted.nombre}`);
  } catch (error) {
    console.log(error);
  }
}

// const updateItemUser = async (req, res) => {
//     const { id } = req.params;
//     const { number } = req.body;
//   try {
//     let item = await Item.findById(id);
//     console.log('item', item.numReviews);
//     let { cinco, cuatro, tres, dos, uno } = item.numReviews;
//     let changed;
//     let count;
//     if (number === 5) {
//       count = cinco + 1;
//       changed = "cinco";
//     }
//     if (number === 4) {
//       count = cuatro + 1;
//       changed = "cuatro";
//     }
//     if (number === 3) {
//       count = tres + 1;
//       changed = "tres";
//     }
//     if (number === 2) {
//       count = dos + 1;
//       changed = "dos";
//     }
//     if (number === 1) {
//       count = uno + 1;
//       changed = "uno";
//     }
//     const rating = item.rating;
//     const newRating =
//       (5 * cinco + 4 * cuatro + 3 * tres + 2 * dos + 1 * uno) /
//       (cinco + cuatro + tres + dos + uno);
//     console.log(newRating);
//     await Item.findByIdAndUpdate(id, {
//       rating: newRating.toString(),
//       numReviews: { ...item.numReviews, [changed]: count },
//     });
//     let updated = await Item.findById(id);
//     res.json(updated);
//   } catch (error) {
//     console.log(error);
//   }
// };


module.exports = {
  getItems,
  createItem,
  getItemById,
  updateRating,
  updateItem,
  deleteItem
};




    // "nombre": "skoll",
		// "descripcion": "Cerveza brasilera",
		// "precio": "$150",
		// "categorias": "vinos",
		// "stock": 120

    // oid: vinos 618ebfe09ecc2e9e2370852a
    // oid: cerveza 618ec0f39ecc2e9e23708531
    // oid: destilados 618ec1019ecc2e9e23708533
    // oid: vodka 618ec10b9ecc2e9e23708535
    // oid: espumantes 618ec1159ecc2e9e23708537
    // oid: sin alcohol 618ec11f9ecc2e9e23708539
    // oid: combos 618fc1c4820bddc89394297f
    //oid: whisky 6192a2f253d3919ca498af76
    //oid: aperitivo 6192a3603c24ea140ca6f159