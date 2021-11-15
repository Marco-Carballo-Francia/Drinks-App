const Category = require("../../models/Category");

const getCategorias = async (req, res) => {
  try {
    let categorias = await Category.find();
    // console.log('categorias', categorias);
    if(categorias !== null || categorias.length !== 0) return res.json(categorias);
    res.send('Problemas al traer las categorias');
  } catch (error) {
    console.log(error);
  }
};

const getCategoriasByName = async (req, res) => {
    const { nombre } = req.params;
    try {
        if(nombre) {
            let getCategoria = await Category.find({nombre: nombre});

            if(getCategoria !== null || getCategoria.length !== 0) return res.json(getCategoria)
            return res.send(`No se encontro la categoria ${nombre}`);
        }
        res.send('No estoy reciboendo nada por params');
    } catch (error) {
        console.log(error);
    }
}

const postCategoria = async (req, res) => {
  const { nombre } = req.body;
  try {
    if (nombre) {
      let verificacion = await Category.find({ nombre: nombre });

      if (verificacion !== null || verificacion.length !== 0) {
        let newCategory = new Category({
          nombre,
        });

        newCategory = await newCategory.save();
        return res.json(newCategory);
      }
      return res.send(`La categoria ${nombre} ya existe`);
    }
    res.send("Ingrese un nombre para su categoria");
  } catch (error) {
    console.log(error);
  }
};

const updateCategoria = async (req, res) => {
  const { nombre } = req.body;
  const { id } = req.params;
  try {
    let verificacion = await Category.findbyId(id);

    if(verificacion !== null || verificacion.length !== 0) {
        let edit = await Category.findByIdAndUpdate(id, { nombre: nombre });
        return res.json(edit);
    }
    res.send('Hubo un error al traer esta categoria');
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getCategorias,
  postCategoria,
  updateCategoria,
  getCategoriasByName
};
