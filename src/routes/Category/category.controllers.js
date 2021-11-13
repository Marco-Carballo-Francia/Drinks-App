const Category = require("../../models/Category");

const postCategory = async (req, res) => {
    const { nombre } = req.body;
    try {
        if(nombre !== '') {
            let getCategoria = await Category.find({nombre: nombre});
            if(getCategoria === null || getCategoria.length === 0) {
                let newCategory = new Category({
                    nombre
                });
                newCategory = await newCategory.save();
                return res.json(newCategory);
            }
            return res.send(`La categoria ${nombre} ya esta creada`);
        }
        res.send('Introduzca un nombre para su categoria');
    } catch(error) {
        console.log(error);
    }
};

const getCategoriaByID = async (req, res) => {
    const { id } = req.params;
    try {
        let getCategoria = await Category.findById(id);
        if(getCategoria === null || getCategoria.length === 0)  return res.send('Hubo un error y no se encontro la categoria solicitada');
        res.json(getCategoria);
    } catch (error) {
        console.log(error)
    }
};

const getCategorias = async (req,res) => {
    const { nombre } = req.query;
    try {
        if(nombre) {
            let getCategoria = await Category.find({nombre: nombre})
            if(getCategoria === null || getCategoria.length === 0)  return res.status(404).send(`No se encontro la categoria ${nombre}`)
            return res.json(getCategoria);
        }
        let getAll = await Category.find();
        res.json(getAll);
    } catch (error) {
        console.log(error);
    }
};

const updateCategory = async (req, res) => {
    const { nombre } = req.body;
    const { id } = req.params;
    try {
        let getCategoria = await Category.findById(id);
        
        if(getCategoria === null || getCategoria.length === 0)  return res.send('Hubo un error y no se encontro la categoria solicitada');
        
        let edit = await Category.findByIdAndUpdate(id, 
            { nombre: nombre }, {new: true});
        res.json(edit);
    } catch (error) {
        console.log(error);
    }
};


module.exports = {
    getCategorias,
    postCategory,
    updateCategory,
    getCategoriaByID
};