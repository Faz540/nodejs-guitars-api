const express = require('express');
const app = express();
const data = require("./data");

app.use(express.json())

// Get all guitars
app.get('/guitars', (req, res) => {
	return res.json(data);
});

// Get a specific guitar by ID
app.get('/guitars/:id', (req, res) => {
	const guitar = data.find(i => i.id === parseInt(req.params.id));
	if (!guitar) {
		return res.status(404).json({ "error": 'guitar not found.' });
	} else {
		return res.json(guitar);
	}
});

// Add a new guitar
app.post('/guitars', (req, res) => {
	const { brand, name, type, price, year, description } = req.body;
	if (!brand) {
		return res.status(400).json({ "error": "Missing property: 'brand'" });
	}
	if (!name) {
		return res.status(400).json({ "error": "Missing property: 'name'" });
	}
	if (!type) {
		return res.status(400).json({ "error": "Missing property: 'type'" });
	}
	if (!price) {
		return res.status(400).json({ "error": "Missing property: 'price'" });
	}
	if (!year) {
		return res.status(400).json({ "error": "Missing property: 'year'" });
	}
	if (!description) {
		return res.status(400).json({ "error": "Missing property: 'description'" })
	}
	const newGuitar = {
		id: data.length + 1,
		brand: req.body.brand,
		name: req.body.name,
		type: req.body.type,
		price: req.body.price,
		year: req.body.year,
		description: req.body.description,
		ratings: []
	};
	data.push(newGuitar);
	return res.status(201).json(newGuitar);
});

// Update an existing guitar by ID
app.put('/guitars/:id', (req, res) => {
	const guitar = data.find(i => i.id === parseInt(req.params.id));
	if (!guitar) {
		res.status(404).json({ "error": "guitar not found." });
	} else {
		guitar.brand = req.body.brand;
		guitar.name = req.body.name;
		guitar.type = req.body.type;
		guitar.price = req.body.price;
		guitar.year = req.body.year;
		guitar.description = req.body.description;
		return res.json(guitar);
	}
});

// Get all guitars by brand
app.get('/guitars/brand/:brandName', (req, res) => {
	const filteredGuitars = data.filter(i => i.brand.toLowerCase() === req.params.brandName.toLowerCase());
	if (filteredGuitars.length === 0) {
		return res.status(404).json({ "error": "Brand not found." });
	}
	return res.json(filteredGuitars);
});

// Get the average rating of an guitar
app.get('/guitars/rating/:id', (req, res) => {
	const guitar = data.find(i => i.id === parseInt(req.params.id));
	if (!guitar) {
		return res.status(404).json({ "error": "guitar not found." });
	}
	if (guitar.ratings.length === 0) {
		return res.status(204).json({});
	}
	const sumOfAllRatings = guitar.ratings.reduce((accumulator, currentValue) => accumulator + currentValue);
	const average = sumOfAllRatings / guitar.ratings.length;
	return res.json({ "rating": average });
});

// Add a rating score to an guitar
app.put('/guitars/rating/:id', (req, res) => {
	const guitar = data.find(i => i.id === parseInt(req.params.id));
	if (!guitar) {
		return res.status(404).json({ "error": "guitar not found." });
	} else {
		guitar.ratings.push(parseInt(req.body.rating));
		return res.json(guitar);
	}
});

const server = app.listen(3000, () => {
	const port = server.address().port;
	console.log(`Server listening on ${port}`);
});

module.exports = app;