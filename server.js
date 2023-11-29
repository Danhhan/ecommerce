const app = require("./src/app");

const PORT = process.env.DEV_APP_PORT || 3000;

const server = app.listen(PORT, () => {
	console.log(`ecommerce start with ${PORT}`);
});

process.on("SIGINT", () => {
	console.log(`Exit Server Express`);
  process.exit(0);
});
