import Item from "../../models/Item.js";

export const getItems = async (req, res) => {
	const category = req.query;
	const items = await Item.find();
	if (category) {
		let filtered = [...items];
		filtered.filter(e => e.categoria === category);
		return res.json(filtered);
	}
	res.json(items);
}

export const getCategories = async(req, res) => {
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

export const filterByCategory = async (req, res) => {
	try {
		const { category } = req.params;
		const items = await Item.find();
		let filtered = [...items];
		filtered = filtered.filter(x => x.categoria === category)
		res.json(filtered);
	}
	catch (error) {
		console.log(error);
	}
}

export const createItem = async (req, res) => {
	let newItem = new Item(req.body);
	newItem = await newItem.save();
	res.send(newItem);
}

export const getItemById = async (req, res) => {
	const item = await Item.findById(req.params.id);
	res.json(item);
}

