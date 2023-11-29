const app = require("./src/app");

const PORT = 3000;

const server = app.listen(PORT, () => {
	console.log(`ecommerce start with ${PORT}`);
});

process.on("SIGINT", () => {
	server.close(() => console.log(`Exit Server Express`));
});