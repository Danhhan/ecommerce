"user strict";

const mongoose = require("mongoose");
const config = require("../configs/config.mongodb");
const {
	database: { username, password },
} = config;
const connectString = `mongodb+srv://${username}:${password}@cluster0.2hfoqzv.mongodb.net/?retryWrites=true&w=majority`;

const { countConnect } = require("../helpers/check.connect");
class Database {
	constructor() {
		this.connect();
	}

	connect(type = "mongodb") {
		if (1 === 1) {
			mongoose.set("debug", true);
			mongoose.set("debug", { color: true });
		}
		mongoose
			.connect(connectString, {
				dbName: 'ecommerce'
			})
			.then((_) => console.log(`Connected Mongodb Success PRO`, countConnect()))
			.catch((err) => console.log(`Error connect!`));
	}
	static getInstance() {
		if (!Database.instance) {
			Database.instance = new Database();
		}
		// Database.instance.
		return Database.instance;
	}
}

const instanceMongodb = Database.getInstance();

module.exports = instanceMongodb;
