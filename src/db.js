const mongoose = require("mongoose");
const config =  require("./config.js");

const MONGODB_URI = `mongodb+srv://molucax:74DmtnKCB3APPtKE@drinkscluster.miouw.mongodb.net/drinks?retryWrites=true&w=majority`

mongoose
	.connect(MONGODB_URI, {
		useUnifiedTopology: true,
 		useNewUrlParser: true,
	})
	.then(db => console.log(` |> database connected: ${db.connection.name}`))
	.catch(err => console.log(err));