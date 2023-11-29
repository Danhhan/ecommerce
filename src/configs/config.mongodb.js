const development = {
	app: {
		port: process.env.DEV_APP_PORT || 3000,
	},
	database: {
		host: process.env.DEV_DB_HOST || "localhost",
		port: process.env.DEV_DB_HOST || "cluster0.2hfoqzv.mongodb.net",
		username: process.env.DEV_DB_USERNAME || "twitter-dev",
    password: process.env.DEV_DB_PASSWORD || 'NdCuzREDarVp6B5f'
	},
};

const production = {
	app: {
		port: process.env.PRO_APP_PORT || 3000,
	},
	database: {
		host: process.env.PRO_DB_HOST || "localhost",
		port: process.env.PRO_DB_HOST || "cluster0.2hfoqzv.mongodb.net",
		username: process.env.PRO_DB_USERNAME || "twitter-dev",
    password: process.env.DEV_DB_PASSWORD || 'NdCuzREDarVp6B5f'
	},
};

const config = { development, production };
const env = process.env.NODE_ENV || "development";
module.exports = config[env];
