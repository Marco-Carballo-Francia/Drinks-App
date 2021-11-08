const dotenv = require("dotenv");
dotenv.config();

module.exports =  {
	MONGO_DB: process.env.MONGO_DB || "drinksdb",
	MONGO_USER: process.env.MONGO_USER || "admin",
	MONGO_PASSWORD: process.env.MONGO_PASSWORD || "admin",
	MONGO_HOST: process.env.MONGO_HOST || "localhost",
	PORT: process.env.PORT || 3000
}