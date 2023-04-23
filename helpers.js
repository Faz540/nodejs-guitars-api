const fs = require("fs");

function initialiseTestData() {
	fs.rmSync("data.js");
	return fs.copyFileSync("./backup/data.js", "./data.js");
};

module.exports = {
	initialiseTestData
}