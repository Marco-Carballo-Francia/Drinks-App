const Item = require("../../models/Item.js");

 const getItems = async (req, res) => {
	try {
		let {name, category} = req.query;
		console.log(name)
		let items = await Item.find()
		if (name){
			items = items.filter(x => x.name.toLowerCase().includes(name.toLowerCase()))
			return res.json(items);
		 																															 
		} else {
			if (category){
				items = items.filter(x => x.categoria === category)	
			}
		}
		res.json(items)
	} 
	catch (err){
		console.log(err)
	}
}

 const getCategories = async(req, res) => {
	try {
		let categories = await Item.find();
		categories = categories.map(x => x.categoria);
	    categories = [...new Set(categories)];
		res.json(categories);
	}
	catch (error) {
		console.log(error);
	}
}

 const createItem = async (req, res) => {
	let newItem = new Item(req.body);
	newItem = await newItem.save();
	res.send(newItem);
}

 const getItemById = async (req, res) => {
	const item = await Item.findById(req.params.id);
	res.json(item);
}

 const updateItem = async (req, res) => {
	try {
		const { id } = req.params;
		const { number } = req.body;
		let item = await Item.findById(id);
		let { cinco, cuatro, tres, dos, uno } = item.numReviews;
		let changed;
		let count;
		if (number === 5) {
			count = cinco + 1
			changed = "cinco"
		}
		if (number === 4) {
			count = cuatro + 1
			changed = "cuatro"
		}
		if (number === 3) {
			count = tres + 1
			changed = "tres"
		}
		if (number === 2) {
			count = dos + 1
			changed = "dos"
		}
		if (number === 1) {
			count = uno + 1
			changed = "uno"
		}
		const rating = item.rating;
		const newRating = (5*cinco + 4*cuatro + 3*tres + 2*dos + 1*uno) / (cinco + cuatro + tres + dos + uno)
		console.log(newRating);
		await Item.findByIdAndUpdate(id, { 
			rating: newRating.toString(), 
			numReviews: {...item.numReviews, [changed]: count}
		});
		let updated = await Item.findById(id);
		res.json(updated);
	}
	catch (error) {
		console.log(error)
	}
}


module.exports = {
	getItems,
	getCategories,
	createItem,
	getItemById,
	updateItem
}