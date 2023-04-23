# Guitar API
I've spent many years testing APIs, but I've never actually created one. So here's my first attempt ^_^

## About the data file:
The data file was produced by ChatGPT. I specified a list of properties and asked it to return me x number of guitars for a given brand. Since the data is producedby Chat GPT, it's safe to assume that the data is not 100% accurate.

## Getting Started:
To get started with this API, follow these steps:

1. ### Clone the repository:
```
	git clone https://github.com/Faz540/nodejs-guitars-api.git
```

2. ### Install dependencies:
```
	cd nodejs-guitars-api
	npm install
```

3. ### Start the server:
This will allow you to manually hit the API endpoints in a client of your choice.
```
	npm start
```

4. ### Execute the API Tests:
This command will start the server and execute the tests.
```
	npm test
```

## API Endpoints:

### GET */guitars
This endpoint returns a list of all musical guitars.

### Response:
```
[
	{
		"id": 1,
		"brand": "Fender",
		"name": "Fender Stratocaster",
		"type": "Electric Guitar",
		"price": 1300,
		"year": 1954,
		"description": "Iconic model with three single-coil pickups and a tremolo bar",
		"ratings": []
	},
	...
]
```

### GET */guitars/:id
This endpoint returns a single musical guitar by ID.
### Response:
```
	{
		"id": 1,
		"brand": "Fender",
		"name": "Fender Stratocaster",
		"type": "Electric Guitar",
		"price": 1300,
		"year": 1954,
		"description": "Iconic model with three single-coil pickups and a tremolo bar",
		"ratings": []
	}
```

### POST */guitars
This endpoint adds a new musical guitar to the database.
### Request Body
```
	{
		"brand": "Ibanez",
		"name": "Universe",
		"type": "Electric Guitar",
		"price": 999.99,
		"year": 2000,
		"description": "Ibanez's original flagship 7 string model designed with Steve Vai."
	}
```

### Response Body
```
	{
		"id": 2,
		br"and: "Ibanez",
		"name": "Universe",
		"type": "Electric Guitar",
		"price": 999.99,
		"year": 2000,
		"description": "Ibanez's original flagship 7 string model designed with Steve Vai.",
		"ratings": []
	}
```

### PUT */guitars/:id
This endpoint updates an existing musical guitar.

### Request Body
```
{
	brand: "Updated Brand Name",
	name: "Updated guitar Name",
	type: "Updated Type Name",
	price: 99.99,
	year: 1980,
	description: "Updated Description"
}

```

### Response Body
```
{
	"id": "3",
	"brand": "Updated Brand Name",
	"name": "Updated guitar Name",
	"type": "Updated Type Name",
	"price": 99.99,
	"year": 1980,
	"description": "Updated Description"
	"ratings": []
}

```

### GET */guitars/brand/:brandName
This endpoint returns a list of guitars for a given Brand

### Response Body
```
[
	{
		"id": 80,
		"brand": "Ibanez",
		"name": "Ibanez RG421HPFM-BSP Blue Space Burst",
		"type": "Electric Guitar",
		"price": 599,
		"year": 2021,
		"description": "The RG421HPFM is a 6-string electric guitar from Ibanez's RG Series that features a stunning flamed maple top on a solid ash body",
		"ratings": []
	},
	{
		"id": 81,
		"brand": "Ibanez",
		"name": "Ibanez RG5121 Prestige",
		"type": "Electric Guitar",
		"price": 2399,
		"year": 2019,
		"description": "The RG5121 is a high-end electric guitar from Ibanez's Prestige line. It features a lightweight basswood body",
		"ratings": []
	},
	...
]
```

### GET */guitars/rating/:id
This endpoint returns the average rating for a musical guitar

### Response Body
```
{ 
	"rating": 4
}
```

### PUT */guitars/rating/:id
This endpoint adds a review rating for an existing musical guitar.

### Request Body
```
	{
	 "rating": 3
	}
```

### Response Body
```
	{
		"ratings": [ 3 ]
	}
```

## Error Handling

The following are the possible status codes that may be returned by this API:

200 - OK: The request was successful.  
201 - Created: The requested resource was created successfully.  
204 - No Content: The request was successful, but there is no content to send back.  
400 - Bad Request: The request could not be understood or was missing required parameters.  
404 - Not Found: The requested resource could not be found.  
