const app = require("../app");
const expect = require("chai").expect;
const request = require("supertest");
const { initialiseTestData } = require("../helpers");

describe("API Tests for /guitars", function () {

	beforeEach(function () {
		initialiseTestData();
	});

	describe("GET */guitars", function () {
		it("returns all guitars", async function () {
			const response = await request(app).get("/guitars");
			expect(response.status).to.equal(200);
			expect(response.body).to.be.an("array");
			expect(response.body).to.have.lengthOf(175);
			response.body.forEach((guitar) => {
				expect(guitar).to.have.property("id").to.be.a("number");
				expect(guitar).to.have.property("brand").to.be.a("string");
				expect(guitar).to.have.property("name").to.be.a("string");
				expect(guitar).to.have.property("type").to.be.a("string");
				expect(guitar).to.have.property("price").to.be.a("number");
				expect(guitar).to.have.property("year").to.be.a("number");
				expect(guitar).to.have.property("description").to.be.a("string");
				expect(guitar).to.have.property("ratings").to.be.an("array");
			});
		});
	});

	describe("GET */guitars/:id", function () {
		it("returns the specific guitar", async function () {
			const response = await request(app).get("/guitars/1");
			expect(response.status).to.equal(200);
			expect(response.body).to.be.an("object");
			expect(response.body).to.have.property("id", 1);
			expect(response.body).to.have.property("brand", "Fender");
			expect(response.body).to.have.property("name", "Fender Stratocaster");
			expect(response.body).to.have.property("type", "Electric Guitar");
			expect(response.body).to.have.property("price", 1300);
			expect(response.body).to.have.property("year", 1954);
			expect(response.body).to.have.property("description", "Iconic model with three single-coil pickups and a tremolo bar");
			expect(response.body).to.have.property("ratings").to.eql([]);
		});
		it("returns an error for unknown guitar ID", async function () {
			const response = await request(app).get("/guitars/0");
			expect(response.status).to.equal(404);
			expect(response.body).to.deep.equal({ "error": 'guitar not found.' })
		});
	});

	describe("POST */guitars", function () {
		it("successfully creates a new guitar", async function () {
			const response = await request(app)
				.post("/guitars")
				.send({
					brand: "Test",
					name: "Test guitar",
					type: "Test Type",
					price: 10.00,
					year: 2000,
					description: "Test Description"
				});
			expect(response.status).to.equal(201);
			expect(response.body).to.be.an("object");
			expect(response.body).to.have.property("id").to.be.a("number").greaterThan(0);
			expect(response.body).to.have.property("brand", "Test");
			expect(response.body).to.have.property("name", "Test guitar");
			expect(response.body).to.have.property("type", "Test Type");
			expect(response.body).to.have.property("price", 10.00);
			expect(response.body).to.have.property("year", 2000);
			expect(response.body).to.have.property("description", "Test Description");
			expect(response.body).to.have.property("ratings").to.be.an("array").to.be.empty;
		});
		it("throws an error if no request body is posted", async function () {
			const response = await request(app)
				.post("/guitars")
			expect(response.status).to.equal(400);
			expect(response.body).to.deep.equal({ error: "Missing property: 'brand'" });
		});
		it("throws an error if 'brand' is missing from the request body", async function () {
			const response = await request(app)
				.post("/guitars")
				.send({
					name: "Test guitar",
					type: "Test Type",
					price: 10.00,
					year: 2000,
					description: "Test Description"
				});
			expect(response.status).to.equal(400);
			expect(response.body).to.deep.equal({ error: "Missing property: 'brand'" });
		});
		it("throws an error if 'name' is missing from the request body", async function () {
			const response = await request(app)
				.post("/guitars")
				.send({
					brand: "Test",
					type: "Test Type",
					price: 10.00,
					year: 2000,
					description: "Test Description"
				});
			expect(response.status).to.equal(400);
			expect(response.body).to.deep.equal({ error: "Missing property: 'name'" });
		});
		it("throws an error if 'type' is missing from the request body", async function () {
			const response = await request(app)
				.post("/guitars")
				.send({
					brand: "Test",
					name: "Test guitar",
					price: 10.00,
					year: 2000,
					description: "Test Description"
				});
			expect(response.status).to.equal(400);
			expect(response.body).to.deep.equal({ error: "Missing property: 'type'" });
		});
		it("throws an error if 'price' is missing from the request body", async function () {
			const response = await request(app)
				.post("/guitars")
				.send({
					brand: "Test",
					name: "Test guitar",
					type: "Test Type",
					year: 2000,
					description: "Test Description"
				});
			expect(response.status).to.equal(400);
			expect(response.body).to.deep.equal({ error: "Missing property: 'price'" });
		});
		it("throws an error if 'year' is missing from the request body", async function () {
			const response = await request(app)
				.post("/guitars")
				.send({
					brand: "Test",
					name: "Test guitar",
					type: "Test Type",
					price: 10.00,
					description: "Test Description"
				});
			expect(response.status).to.equal(400);
			expect(response.body).to.deep.equal({ error: "Missing property: 'year'" });
		});
		it("throws an error if 'description' is missing from the request body", async function () {
			const response = await request(app)
				.post("/guitars")
				.send({
					brand: "Test",
					name: "Test guitar",
					type: "Test Type",
					year: 2000,
					price: 10.00,
				});
			expect(response.status).to.equal(400);
			expect(response.body).to.deep.equal({ error: "Missing property: 'description'" });
		});
	});

	describe("PUT */guitars/:id", function () {
		it("successfully updates an existing guitar", async function () {
			const response = await request(app)
				.put("/guitars/1")
				.send({
					brand: "Updated Brand",
					name: "Updated Name",
					type: "Updated Type",
					price: 20.00,
					year: 1995,
					description: "Updated Description"
				});
			expect(response.status).to.equal(200);
			expect(response.body).to.be.an("object");
			expect(response.body).to.have.property("id", 1);
			expect(response.body).to.have.property("brand", "Updated Brand");
			expect(response.body).to.have.property("name", "Updated Name");
			expect(response.body).to.have.property("type", "Updated Type");
			expect(response.body).to.have.property("price", 20.00);
			expect(response.body).to.have.property("year", 1995);
			expect(response.body).to.have.property("description", "Updated Description");
			expect(response.body).to.have.property("ratings").to.eql([]);
		});
		it("returns an error for unknown guitar ID", async function () {
			const response = await request(app)
				.put("/guitars/0")
				.send({
					brand: "Updated Brand",
					name: "Updated Name",
					type: "Updated Type",
					price: 20.00,
					year: 1995,
					description: "Updated Description"
				});
			expect(response.status).to.equal(404);
			expect(response.body).to.deep.equal({ error: 'guitar not found.' })
		});
	});

	describe("GET */guitars/brand/:brandName", function () {
		it("returns the guitars for a given brand", async function () {
			const brandName = "Fender";
			const response = await request(app).get(`/guitars/brand/${brandName}`);
			expect(response.status).to.equal(200);
			expect(response.body).to.be.an("array");
			expect(response.body).to.have.a.lengthOf(19);
			response.body.forEach(guitar => expect(guitar).to.have.property("brand", brandName));
		});
		it("returns an error for unknown brand", async function () {
			const response = await request(app).get(`/guitars/brand/unknown`);
			expect(response.status).to.equal(404);
			expect(response.body).to.deep.equal({ error: 'Brand not found.' })
		});
	});

	describe("GET */guitars/rating/:id", function () {
		it("returns the average rating for a given guitar", async function () {
			const response = await request(app).get("/guitars/rating/2");
			expect(response.status).to.equal(200);
			expect(response.body).to.deep.equal({ "rating": 4 });
		});
		it("returns a message for a known guitar ID without any ratings", async function () {
			const response = await request(app).get("/guitars/rating/1");
			expect(response.status).to.equal(204);
			expect(response.body).to.deep.equal({});
		});
		it("returns an error for unknown guitar ID", async function () {
			const response = await request(app).get("/guitars/rating/0");
			expect(response.status).to.equal(404);
			expect(response.body).to.deep.equal({ "error": 'guitar not found.' })
		});
	});

	describe("PUT */guitars/rating/:id", function () {
		it("successfully adds a rating for an guitar", async function () {
			const response = await request(app)
				.put("/guitars/rating/1")
				.send({
					rating: 3
				});
			expect(response.status).to.equal(200);
			expect(response.body).to.be.an("object");
			expect(response.body).to.have.property("ratings").to.eql([3]);
		});
		it("returns an error for unknown guitar ID", async function () {
			const response = await request(app)
				.put("/guitars/rating/0");
			expect(response.status).to.equal(404);
			expect(response.body).to.deep.equal({ error: 'guitar not found.' })
		});
	});

});