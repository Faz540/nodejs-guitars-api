const guitars = [
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
	{
		"id": 2,
		"brand": "Fender",
		"name": "Fender Telecaster",
		"type": "Electric Guitar",
		"price": 1200,
		"year": 1950,
		"description": "Pioneering model with two single-coil pickups and a distinctive twangy sound",
		"ratings": [3, 5]
	},
	{
		"id": 3,
		"brand": "Fender",
		"name": "Fender Jaguar",
		"type": "Electric Guitar",
		"price": 1600,
		"year": 1962,
		"description": "Offset body design with a versatile pickup configuration",
		"ratings": []
	},
	{
		"id": 4,
		"brand": "Fender",
		"name": "Fender Jazzmaster",
		"type": "Electric Guitar",
		"price": 1400,
		"year": 1958,
		"description": "Offset body design with two single-coil pickups and a unique tone circuit",
		"ratings": []
	},
	{
		"id": 5,
		"brand": "Fender",
		"name": "Fender Mustang",
		"type": "Electric Guitar",
		"price": 800,
		"year": 1964,
		"description": "Short-scale guitar with a unique tremolo system and versatile pickup configuration",
		"ratings": []
	},
	{
		"id": 6,
		"brand": "Fender",
		"name": "Fender Duo-Sonic",
		"type": "Electric Guitar",
		"price": 700,
		"year": 1956,
		"description": "Short-scale guitar with a single-coil pickup and a simple design",
		"ratings": []
	},
	{
		"id": 7,
		"brand": "Fender",
		"name": "Fender Mustang Bass",
		"type": "Electric Guitar",
		"price": 900,
		"year": 1966,
		"description": "Short-scale bass guitar with a split-coil pickup and a comfortable offset body",
		"ratings": []
	},
	{
		"id": 8,
		"brand": "Fender",
		"name": "Fender Precision Bass",
		"type": "Electric Guitar",
		"price": 1100,
		"year": 1951,
		"description": "The first commercially successful electric bass guitar with a split-coil pickup",
		"ratings": []
	},
	{
		"id": 9,
		"brand": "Fender",
		"name": "Fender Jazz Bass",
		"type": "Electric Guitar",
		"price": 1200,
		"year": 1960,
		"description": "Dual-pickup bass guitar with a versatile tonal range and a comfortable offset body",
		"ratings": []
	},
	{
		"id": 10,
		"brand": "Fender",
		"name": "Fender Mustang PJ Bass",
		"type": "Electric Guitar",
		"price": 1000,
		"year": 2016,
		"description": "Short-scale bass guitar with a split-coil Precision Bass pickup and a single-coil Jazz Bass pickup",
		"ratings": []
	},
	{
		"id": 11,
		"brand": "Fender",
		"name": "Fender American Professional Stratocaster",
		"type": "Electric Guitar",
		"price": 1700,
		"year": 2017,
		"description": "Modernized version of the classic Stratocaster with upgraded pickups and hardware",
		"ratings": []
	},
	{
		"id": 12,
		"brand": "Fender",
		"name": "Fender American Professional Telecaster",
		"type": "Electric Guitar",
		"price": 1700,
		"year": 2017,
		"description": "Modernized version of the classic Telecaster with upgraded pickups and hardware",
		"ratings": []
	},
	{
		"id": 13,
		"brand": "Fender",
		"name": "Fender American Ultra Stratocaster",
		"type": "Electric Guitar",
		"price": 2200,
		"year": 2020,
		"description": "High-end model with advanced features such as a compound-radius fingerboard and noiseless pickups",
		"ratings": []
	},
	{
		"id": 14,
		"brand": "Fender",
		"name": "Fender American Ultra Telecaster",
		"type": "Electric Guitar",
		"price": 2200,
		"year": 2020,
		"description": "High-end model with advanced features such as a compound-radius fingerboard and noiseless pickups",
		"ratings": []
	},
	{
		"id": 15,
		"brand": "Fender",
		"name": "Fender American Elite Stratocaster",
		"type": "Electric Guitar",
		"price": 2000,
		"year": 2016,
		"description": "Premium model with advanced electronics and hardware, including a compound-radius fingerboard and noiseless pickups",
		"ratings": []
	},
	{
		"id": 16,
		"brand": "Fender",
		"name": "Fender American Elite Telecaster",
		"type": "Electric Guitar",
		"price": 2000,
		"year": 2016,
		"description": "Premium model with advanced electronics and hardware, including a compound-radius fingerboard and noiseless pickups",
		"ratings": []
	},
	{
		"id": 17,
		"brand": "Fender",
		"name": "Fender Player Stratocaster",
		"type": "Electric Guitar",
		"price": 600,
		"year": 2018,
		"description": "Affordable model with classic Stratocaster features and modern upgrades",
		"ratings": []
	},
	{
		"id": 18,
		"brand": "Fender",
		"name": "Fender Player Telecaster",
		"type": "Electric Guitar",
		"price": 600,
		"year": 2018,
		"description": "Affordable model with classic Telecaster features and modern upgrades",
		"ratings": []
	},
	{
		"id": 19,
		"brand": "Fender",
		"name": "Fender Player Jazzmaster",
		"type": "Electric Guitar",
		"price": 700,
		"year": 2018,
		"description": "Affordable model with the distinctive Jazzmaster offset body and versatile pickup configuration",
		"ratings": []
	},
	{
		"id": 20,
		"brand": "Fender",
		"name": "Fender Squier Stratocaster",
		"type": "Electric Guitar",
		"price": 200,
		"year": 1982,
		"description": "Affordable entry-level model produced by Fender's budget brand Squier",
		"ratings": []
	},
	{
		"id": 21,
		"brand": "ESP",
		"name": "ESP LTD EC-1000T/CTM",
		"type": "Electric Guitar",
		"price": 1049,
		"year": 2020,
		"description": "Single cutaway electric guitar with mahogany body and neck",
		"ratings": []
	},
	{
		"id": 22,
		"brand": "ESP",
		"name": "ESP E-II Eclipse DB",
		"type": "Electric Guitar",
		"price": 2199,
		"year": 2018,
		"description": "Single cutaway electric guitar with mahogany body and neck",
		"ratings": []
	},
	{
		"id": 23,
		"brand": "ESP",
		"name": "ESP LTD EC-256FM",
		"type": "Electric Guitar",
		"price": 429,
		"year": 2020,
		"description": "Single cutaway electric guitar with flamed maple top",
		"ratings": []
	},
	{
		"id": 24,
		"brand": "ESP",
		"name": "ESP LTD MH-1007",
		"type": "Electric Guitar",
		"price": 949,
		"year": 2020,
		"description": "Seven-string electric guitar with a neck-through-body design",
		"ratings": []
	},
	{
		"id": 25,
		"brand": "ESP",
		"name": "ESP LTD F-10 Kit",
		"type": "Electric Guitar",
		"price": 209,
		"year": 2020,
		"description": "Electric guitar starter kit with an included gig bag",
		"ratings": []
	},
	{
		"id": 26,
		"brand": "ESP",
		"name": "ESP LTD EC-1001FR",
		"type": "Electric Guitar",
		"price": 899,
		"year": 2020,
		"description": "Single cutaway electric guitar with a Floyd Rose bridge",
		"ratings": []
	},
	{
		"id": 27,
		"brand": "ESP",
		"name": "ESP LTD M-50",
		"type": "Electric Guitar",
		"price": 219,
		"year": 2020,
		"description": "Double cutaway electric guitar with a basswood body",
		"ratings": []
	},
	{
		"id": 28,
		"brand": "ESP",
		"name": "ESP LTD B-205SM",
		"type": "Electric Guitar",
		"price": 509,
		"year": 2020,
		"description": "Five-string electric bass guitar with a spalted maple top",
		"ratings": []
	},
	{
		"id": 29,
		"brand": "ESP",
		"name": "ESP LTD H-1007FM",
		"type": "Electric Guitar",
		"price": 1029,
		"year": 2020,
		"description": "Seven-string electric guitar with a flamed maple top",
		"ratings": []
	},
	{
		"id": 30,
		"brand": "ESP",
		"name": "ESP LTD F-10",
		"type": "Electric Guitar",
		"price": 119,
		"year": 2020,
		"description": "Double cutaway electric guitar with a basswood body",
		"ratings": []
	},
	{
		"id": 31,
		"brand": "ESP",
		"name": "ESP LTD Viper-256",
		"type": "Electric Guitar",
		"price": 529,
		"year": 2020,
		"description": "Double cutaway electric guitar with a mahogany body and neck",
		"ratings": []
	},
	{
		"id": 32,
		"brand": "ESP",
		"name": "ESP LTD F-50",
		"type": "Electric Guitar",
		"price": 179,
		"year": 2020,
		"description": "Double cutaway electric guitar with a basswood body",
		"ratings": []
	},
	{
		"id": 33,
		"brand": "ESP",
		"name": "ESP E-II M-II NTB",
		"type": "Electric Guitar",
		"price": 2649,
		"year": 2018,
		"description": "Double cutaway electric guitar with a neck-through-body design",
		"ratings": []
	},
	{
		"id": 34,
		"brand": "ESP",
		"name": "ESP LTD TE-200",
		"type": "Electric Guitar",
		"price": 429,
		"year": 2020,
		"description": "Single cutaway electric guitar with a mahogany body and neck",
		"ratings": []
	},
	{
		"id": 35,
		"brand": "ESP",
		"name": "ESP E-II Arrow",
		"type": "Electric Guitar",
		"price": 2899,
		"year": 2018,
		"description": "V-shaped electric guitar with a neck-through-body design",
		"ratings": []
	},
	{
		"id": 36,
		"brand": "ESP",
		"name": "ESP LTD M-400",
		"type": "Electric Guitar",
		"price": 629,
		"year": 2020,
		"description": "Double cutaway electric guitar with a mahogany body and neck",
		"ratings": []
	},
	{
		"id": 37,
		"brand": "ESP",
		"name": "ESP LTD SC-607B",
		"type": "Electric Guitar",
		"price": 1169,
		"year": 2020,
		"description": "Seven-string baritone electric guitar with a swamp ash body",
		"ratings": []
	},
	{
		"id": 38,
		"brand": "ESP",
		"name": "ESP LTD M-200FM",
		"type": "Electric Guitar",
		"price": 399,
		"year": 2020,
		"description": "Double cutaway electric guitar with a flamed maple top",
		"ratings": []
	},
	{
		"id": 39,
		"brand": "ESP",
		"name": "ESP LTD KH-202",
		"type": "Electric Guitar",
		"price": 419,
		"year": 2020,
		"description": "Double cutaway electric guitar designed in collaboration with Metallica's Kirk Hammett",
		"ratings": []
	},
	{
		"id": 40,
		"brand": "Gibson",
		"name": "Gibson Les Paul",
		"type": "Electric Guitar",
		"price": 1799.99,
		"year": 2019,
		"description": "Classic Les Paul with a modern twist",
		"ratings": []
	},
	{
		"id": 41,
		"brand": "Gibson",
		"name": "Gibson SG",
		"type": "Electric Guitar",
		"price": 1299.99,
		"year": 2020,
		"description": "Iconic double-cutaway design with a powerful tone",
		"ratings": []
	},
	{
		"id": 42,
		"brand": "Gibson",
		"name": "Gibson Explorer",
		"type": "Electric Guitar",
		"price": 1699.99,
		"year": 2018,
		"description": "Futuristic body shape with a hard rock edge",
		"ratings": []
	},
	{
		"id": 43,
		"brand": "Gibson",
		"name": "Gibson Flying V",
		"type": "Electric Guitar",
		"price": 1499.99,
		"year": 2017,
		"description": "Distinctive V-shaped guitar with a unique look and sound",
		"ratings": []
	},
	{
		"id": 44,
		"brand": "Gibson",
		"name": "Gibson ES-335",
		"type": "Electric Guitar",
		"price": 1999.99,
		"year": 2021,
		"description": "Classic semi-hollow body guitar with a warm and resonant sound",
		"ratings": []
	},
	{
		"id": 45,
		"brand": "Gibson",
		"name": "Gibson Firebird",
		"type": "Electric Guitar",
		"price": 1799.99,
		"year": 2022,
		"description": "Reverse body design with a bright and cutting tone",
		"ratings": []
	},
	{
		"id": 46,
		"brand": "Gibson",
		"name": "Gibson Les Paul Junior",
		"type": "Electric Guitar",
		"price": 999.99,
		"year": 2022,
		"description": "Simple and affordable Les Paul model with a vintage feel",
		"ratings": []
	},
	{
		"id": 47,
		"brand": "Gibson",
		"name": "Gibson Les Paul Studio",
		"type": "Electric Guitar",
		"price": 1399.99,
		"year": 2019,
		"description": "Versatile Les Paul model with a no-nonsense attitude",
		"ratings": []
	},
	{
		"id": 48,
		"brand": "Gibson",
		"name": "Gibson Les Paul Traditional",
		"type": "Electric Guitar",
		"price": 2099.99,
		"year": 2018,
		"description": "Classic Les Paul model with vintage-style features",
		"ratings": []
	},
	{
		"id": 49,
		"brand": "Gibson",
		"name": "Gibson Les Paul Custom",
		"type": "Electric Guitar",
		"price": 2999.99,
		"year": 2020,
		"description": "High-end Les Paul model with luxury appointments",
		"ratings": []
	},
	{
		"id": 50,
		"brand": "Gibson",
		"name": "Gibson SG Standard",
		"type": "Electric Guitar",
		"price": 1599.99,
		"year": 2021,
		"description": "Classic SG model with modern upgrades",
		"ratings": []
	},
	{
		"id": 51,
		"brand": "Gibson",
		"name": "Gibson SG Special",
		"type": "Electric Guitar",
		"price": 1199.99,
		"year": 2019,
		"description": "Affordable SG model with a classic look and feel",
		"ratings": []
	},
	{
		"id": 52,
		"brand": "Gibson",
		"name": "Gibson SG Junior",
		"type": "Electric Guitar",
		"price": 899.99,
		"year": 2017,
		"description": "Simple and stripped-down SG model with a vintage vibe",
		"ratings": []
	},
	{
		"id": 53,
		"brand": "Gibson",
		"name": "Gibson Explorer B-2",
		"type": "Electric Guitar",
		"price": 1899.99,
		"year": 2022,
		"description": "Sleek and modern take on the Explorer design",
		"ratings": []
	},
	{
		"id": 54,
		"brand": "Gibson",
		"name": "Gibson Explorer T",
		"type": "Electric Guitar",
		"price": 1699.99,
		"year": 2018,
		"description": "Versatile Explorer model with a smooth and creamy tone",
		"ratings": []
	},
	{
		"id": 55,
		"brand": "Gibson",
		"name": "Gibson Flying V Pro",
		"type": "Electric Guitar",
		"price": 1399.99,
		"year": 2020,
		"description": "Upgraded version of the Flying V with advanced features",
		"ratings": []
	},
	{
		"id": 56,
		"brand": "Gibson",
		"name": "Gibson Firebird V",
		"type": "Electric Guitar",
		"price": 1999.99,
		"year": 2021,
		"description": "High-end Firebird model with a luxurious finish",
		"ratings": []
	},
	{
		"id": 57,
		"brand": "Gibson",
		"name": "Gibson Firebird Studio",
		"type": "Electric Guitar",
		"price": 1499.99,
		"year": 2019,
		"description": "Affordable Firebird model with a no-frills approach",
		"ratings": []
	},
	{
		"id": 58,
		"brand": "Gibson",
		"name": "Gibson ES-339",
		"type": "Electric Guitar",
		"price": 1899.99,
		"year": 2017,
		"description": "Compact version of the ES-335 with a versatile sound",
		"ratings": []
	},
	{
		"id": 59,
		"brand": "Gibson",
		"name": "Gibson ES-175",
		"type": "Electric Guitar",
		"price": 2399.99,
		"year": 2022,
		"description": "Classic jazz guitar with a warm and mellow tone",
		"ratings": []
	},
	{
		"id": 60,
		"brand": "Dean",
		"name": "Dean Icon",
		"type": "Electric Guitar",
		"price": 799,
		"year": 2020,
		"description": "Classic Dean style with a modern edge",
		"ratings": []
	},
	{
		"id": 61,
		"brand": "Dean",
		"name": "Dean MLX",
		"type": "Electric Guitar",
		"price": 569,
		"year": 2019,
		"description": "Classic ML design with dual humbuckers",
		"ratings": []
	},
	{
		"id": 62,
		"brand": "Dean",
		"name": "Dean V Stealth",
		"type": "Electric Guitar",
		"price": 869,
		"year": 2018,
		"description": "V-shaped guitar with aggressive styling",
		"ratings": []
	},
	{
		"id": 63,
		"brand": "Dean",
		"name": "Dean Razorback",
		"type": "Electric Guitar",
		"price": 999,
		"year": 2020,
		"description": "Famous Dimebag Darrell signature guitar",
		"ratings": []
	},
	{
		"id": 64,
		"brand": "Dean",
		"name": "Dean Zero",
		"type": "Electric Guitar",
		"price": 719,
		"year": 2019,
		"description": "Sleek design with dual humbuckers",
		"ratings": []
	},
	{
		"id": 65,
		"brand": "Dean",
		"name": "Dean Cadillac",
		"type": "Electric Guitar",
		"price": 799,
		"year": 2021,
		"description": "Classic Cadillac shape with modern features",
		"ratings": []
	},
	{
		"id": 66,
		"brand": "Dean",
		"name": "Dean Razorback V",
		"type": "Electric Guitar",
		"price": 1299,
		"year": 2020,
		"description": "V-shaped guitar with Floyd Rose tremolo system",
		"ratings": []
	},
	{
		"id": 67,
		"brand": "Dean",
		"name": "Dean Dave Mustaine VMNT",
		"type": "Electric Guitar",
		"price": 899,
		"year": 2019,
		"description": "Dave Mustaine signature guitar with Seymour Duncan pickups",
		"ratings": []
	},
	{
		"id": 68,
		"brand": "Dean",
		"name": "Dean Michael Batio MAB1",
		"type": "Electric Guitar",
		"price": 1049,
		"year": 2018,
		"description": "Designed in collaboration with Michael Angelo Batio",
		"ratings": []
	},
	{
		"id": 69,
		"brand": "Dean",
		"name": "Dean Z",
		"type": "Electric Guitar",
		"price": 649,
		"year": 2020,
		"description": "Classic Z design with dual humbuckers",
		"ratings": []
	},
	{
		"id": 70,
		"brand": "Dean",
		"name": "Dean Vinnie Moore",
		"type": "Electric Guitar",
		"price": 899,
		"year": 2019,
		"description": "Designed in collaboration with Vinnie Moore",
		"ratings": []
	},
	{
		"id": 71,
		"brand": "Dean",
		"name": "Dean Z-X",
		"type": "Electric Guitar",
		"price": 699,
		"year": 2018,
		"description": "Z-shaped guitar with dual humbuckers",
		"ratings": []
	},
	{
		"id": 72,
		"brand": "Dean",
		"name": "Dean NashVegas",
		"type": "Electric Guitar",
		"price": 999,
		"year": 2021,
		"description": "T-style guitar with a unique twist",
		"ratings": []
	},
	{
		"id": 73,
		"brand": "Dean",
		"name": "Dean Boca",
		"type": "Electric Guitar",
		"price": 749,
		"year": 2019,
		"description": "Semi-hollowbody guitar with dual humbuckers",
		"ratings": []
	},
	{
		"id": 74,
		"brand": "Dean",
		"name": "Dean Exhibition",
		"type": "Electric Guitar",
		"price": 799,
		"year": 2020,
		"description": "Acoustic-electric guitar with exotic wood top",
		"ratings": []
	},
	{
		"id": 75,
		"brand": "Dean",
		"name": "Dean Colt",
		"type": "Electric Guitar",
		"price": 679,
		"year": 2018,
		"description": "Semi-hollowbody guitar with Bigsby tremolo system",
		"ratings": []
	},
	{
		"id": 76,
		"brand": "Dean",
		"name": "Dean Exile Select",
		"type": "Electric Guitar",
		"price": 1399,
		"year": 2021,
		"description": "High-end guitar with exotic wood top and EMG pickups",
		"ratings": []
	},
	{
		"id": 77,
		"brand": "Dean",
		"name": "Dean Colt Bigsby",
		"type": "Electric Guitar",
		"price": 719,
		"year": 2019,
		"description": "Semi-hollowbody guitar with Bigsby tremolo system",
		"ratings": []
	},
	{
		"id": 78,
		"brand": "Dean",
		"name": "Dean Custom 350 Floyd",
		"type": "Electric Guitar",
		"price": 1099,
		"year": 2020,
		"description": "High-performance guitar with Floyd Rose tremolo system",
		"ratings": []
	},
	{
		"id": 79,
		"brand": "Dean",
		"name": "Dean Stylist",
		"type": "Electric Guitar",
		"price": 899,
		"year": 2018,
		"description": "Hollowbody guitar with vintage-style design",
		"ratings": []
	},
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
	{
		"id": 82,
		"brand": "Ibanez",
		"name": "Ibanez RG550 Genesis Collection Desert Sun Yellow",
		"type": "Electric Guitar",
		"price": 999,
		"year": 2020,
		"description": "The RG550 is a 6-string electric guitar from Ibanez's Genesis Collection. It features a basswood body",
		"ratings": []
	},
	{
		"id": 83,
		"brand": "Ibanez",
		"name": "Ibanez AZ224F-BI Blue Iceberg Gradation",
		"type": "Electric Guitar",
		"price": 1499,
		"year": 2021,
		"description": "The AZ224F is a 6-string electric guitar from Ibanez's AZ Series. It features a flamed maple top on an alder body",
		"ratings": []
	},
	{
		"id": 84,
		"brand": "Ibanez",
		"name": "Ibanez RGMS8-BK Black",
		"type": "Electric Guitar",
		"price": 799,
		"year": 2021,
		"description": "The RGMS8 is an 8-string electric guitar from Ibanez's RG Series. It features a mahogany body",
		"ratings": []
	},
	{
		"id": 85,
		"brand": "Ibanez",
		"name": "Ibanez S521-MOL Mahogany Oil",
		"type": "Electric Guitar",
		"price": 499,
		"year": 2021,
		"description": "The S521 is a 6-string electric guitar from Ibanez's S Series. It features a mahogany body",
		"ratings": []
	},
	{
		"id": 86,
		"brand": "Ibanez",
		"name": "Ibanez AZ2204F Prestige",
		"type": "Electric Guitar",
		"price": 2199,
		"year": 2020,
		"description": "The AZ2204F is a high-end electric guitar from Ibanez's AZ Series. It features a flamed maple top on an alder body",
		"ratings": []
	},
	{
		"id": 87,
		"brand": "Ibanez",
		"name": "Ibanez RG421HPFM-WK Walnut Flat",
		"type": "Electric Guitar",
		"price": 599,
		"year": 2021,
		"description": "The RG421HPFM is a 6-string electric guitar from Ibanez's RG Series that features a stunning flamed maple top on a solid ash body",
		"ratings": []
	},
	{
		"id": 88,
		"brand": "Ibanez",
		"name": "Ibanez RGA42FM-TLF Transparent Light Violin Sunburst Flat",
		"type": "Electric Guitar",
		"price": 499,
		"year": 2021,
		"description": "The RGA42FM is a 6-string electric guitar from Ibanez's RGA Series. It features a flamed maple top on a mahogany body",
		"ratings": []
	},
	{
		"id": 89,
		"brand": "Jackson",
		"name": "Jackson Soloist SLX Crackle",
		"type": "Electric Guitar",
		"price": 649,
		"year": 2021,
		"description": "A sleek and stylish guitar with a unique crackle finish.",
		"ratings": []
	},
	{
		"id": 90,
		"brand": "Jackson",
		"name": "Jackson X Series Rhoads RRX24",
		"type": "Electric Guitar",
		"price": 899,
		"year": 2020,
		"description": "A classic V-shaped guitar with a modern twist, featuring high-output pickups.",
		"ratings": []
	},
	{
		"id": 91,
		"brand": "Jackson",
		"name": "Jackson Pro Series Soloist SL2Q",
		"type": "Electric Guitar",
		"price": 1499,
		"year": 2021,
		"description": "A professional-grade guitar with a stunning quilted maple top and Seymour Duncan pickups.",
		"ratings": []
	},
	{
		"id": 92,
		"brand": "Jackson",
		"name": "Jackson Pro Series Dinky DK Modern Ash HT6",
		"type": "Electric Guitar",
		"price": 1299,
		"year": 2021,
		"description": "A modern take on the classic Dinky design, featuring an ash body and Fishman Fluence pickups.",
		"ratings": []
	},
	{
		"id": 93,
		"brand": "Jackson",
		"name": "Jackson USA Select Series Soloist SL2H",
		"type": "Electric Guitar",
		"price": 3699,
		"year": 2021,
		"description": "A hand-crafted guitar made in the USA, featuring premium hardware and Seymour Duncan pickups.",
		"ratings": []
	},
	{
		"id": 94,
		"brand": "Jackson",
		"name": "Jackson Pro Series Rhoads RR24M",
		"type": "Electric Guitar",
		"price": 1099,
		"year": 2021,
		"description": "A classic Rhoads V-shaped guitar with a stunning quilted maple top and Seymour Duncan pickups.",
		"ratings": []
	},
	{
		"id": 95,
		"brand": "Jackson",
		"name": "Jackson X Series Soloist SL4X",
		"type": "Electric Guitar",
		"price": 649,
		"year": 2020,
		"description": "A versatile and affordable guitar with a solid alder body and high-output pickups.",
		"ratings": []
	},
	{
		"id": 96,
		"brand": "Jackson",
		"name": "Jackson JS Series Dinky Arch Top JS32-7 DKA HT",
		"type": "Electric Guitar",
		"price": 399,
		"year": 2020,
		"description": "A 7-string guitar with a comfortable arch-top Dinky body and high-output pickups.",
		"ratings": []
	},
	{
		"id": 97,
		"brand": "Jackson",
		"name": "Jackson X Series Signature Adrian Smith SDXQ",
		"type": "Electric Guitar",
		"price": 799,
		"year": 2021,
		"description": "A signature guitar designed in collaboration with Iron Maiden's Adrian Smith, featuring a quilted maple top and high-output pickups.",
		"ratings": []
	},
	{
		"id": 98,
		"brand": "Jackson",
		"name": "Jackson Pro Series Dinky DK Modern HT6",
		"type": "Electric Guitar",
		"price": 1199,
		"year": 2021,
		"description": "A high-performance guitar with a sleek design, featuring a mahogany body and Seymour Duncan pickups.",
		"ratings": []
	},
	{
		"id": 99,
		"brand": "Jackson",
		"name": "Jackson X Series Kelly KEXQ",
		"type": "Electric Guitar",
		"price": 649,
		"year": 2020,
		"description": "A unique and eye-catching guitar with a Kelly body shape and a quilted maple top.",
		"ratings": []
	},
	{
		"id": 100,
		"brand": "Jackson",
		"name": "Jackson Pro Series Signature Misha Mansoor Juggernaut HT7",
		"type": "Electric Guitar",
		"price": 1799,
		"year": 2021,
		"description": "A signature 7-string guitar designed in collaboration with Periphery's Misha Mansoor, featuring Bare Knuckle pickups and a maple top.",
		"ratings": []
	},
	{
		"id": 101,
		"brand": "Jackson",
		"name": "Jackson USA Select Series Soloist SL1",
		"type": "Electric Guitar",
		"price": 3199,
		"year": 2021,
		"description": "A premium guitar hand-crafted in the USA, featuring Seymour Duncan pickups and a maple neck.",
		"ratings": []
	},
	{
		"id": 102,
		"brand": "Jackson",
		"name": "Jackson X Series Signature Scott Ian King V KVXT",
		"type": "Electric Guitar",
		"price": 849,
		"year": 2021,
		"description": "A signature guitar designed in collaboration with Anthrax's Scott Ian, featuring a King V body shape and high-output pickups.",
		"ratings": []
	},
	{
		"id": 103,
		"brand": "Jackson",
		"name": "Jackson Pro Series Soloist SL3Q",
		"type": "Electric Guitar",
		"price": 1499,
		"year": 2021,
		"description": "A professional-grade guitar with a stunning quilted maple top and Seymour Duncan pickups.",
		"ratings": []
	},
	{
		"id": 104,
		"brand": "Jackson",
		"name": "Jackson JS Series Dinky JS11",
		"type": "Electric Guitar",
		"price": 149,
		"year": 2020,
		"description": "An affordable and compact guitar with a solid body and high-output pickups.",
		"ratings": []
	},
	{
		"id": 105,
		"brand": "Jackson",
		"name": "Jackson X Series Kelly KEXM",
		"type": "Electric Guitar",
		"price": 649,
		"year": 2021,
		"description": "A unique and eye-catching guitar with a Kelly body shape and a maple neck.",
		"ratings": []
	},
	{
		"id": 106,
		"brand": "Jackson",
		"name": "Jackson Pro Series Signature Adrian Smith SDX",
		"type": "Electric Guitar",
		"price": 899,
		"year": 2021,
		"description": "A signature guitar designed in collaboration with Iron Maiden's Adrian Smith, featuring high-output pickups and a maple neck.",
		"ratings": []
	},
	{
		"id": 107,
		"brand": "Jackson",
		"name": "Jackson X Series Rhoads RRX24M",
		"type": "Electric Guitar",
		"price": 899,
		"year": 2021,
		"description": "A modern take on the classic Rhoads",
		"ratings": []
	},
	{
		"id": 108,
		"brand": "Charvel",
		"name": "Pro-Mod DK24 HH FR M QM",
		"type": "Electric Guitar",
		"price": 1349,
		"year": 2021,
		"description": "The Pro-Mod DK24 HH FR M QM is a high-performance modern guitar designed for discerning players. It features a quilt maple top, a two-piece bolt-on caramelized maple neck with graphite reinforcement, and a pair of Seymour Duncan humbucking pickups.",
		"ratings": []
	},
	{
		"id": 109,
		"brand": "Charvel",
		"name": "Pro-Mod DK24 HSH 2PT CM QM",
		"type": "Electric Guitar",
		"price": 1299,
		"year": 2021,
		"description": "The Pro-Mod DK24 HSH 2PT CM QM is a versatile and stylish guitar that can handle a wide range of playing styles. It features a quilt maple top, a two-piece bolt-on caramelized maple neck with graphite reinforcement, and a set of Seymour Duncan pickups.",
		"ratings": []
	},
	{
		"id": 110,
		"brand": "Charvel",
		"name": "San Dimas Style 1 HH HT E Mahogany",
		"type": "Electric Guitar",
		"price": 989,
		"year": 2021,
		"description": "The San Dimas Style 1 HH HT E Mahogany is a classic and versatile guitar that is perfect for players of all levels. It features a mahogany body and neck, a set of Seymour Duncan humbucking pickups, and a hardtail bridge for excellent tuning stability.",
		"ratings": []
	},
	{
		"id": 111,
		"brand": "Charvel",
		"name": "Pro-Mod DK24 HSH 2PT CM",
		"type": "Electric Guitar",
		"price": 999,
		"year": 2021,
		"description": "The Pro-Mod DK24 HSH 2PT CM is a versatile and stylish guitar that can handle a wide range of playing styles. It features a two-piece bolt-on caramelized maple neck with graphite reinforcement, and a set of Seymour Duncan pickups.",
		"ratings": []
	},
	{
		"id": 112,
		"brand": "Charvel",
		"name": "DK24 HSS 2PT CM",
		"type": "Electric Guitar",
		"price": 899,
		"year": 2021,
		"description": "The DK24 HSS 2PT CM is a high-performance guitar that is perfect for modern players. It features a two-piece bolt-on caramelized maple neck with graphite reinforcement, and a set of Seymour Duncan pickups.",
		"ratings": []
	},
	{
		"id": 113,
		"brand": "Charvel",
		"name": "Pro-Mod DK24 HSS 2PT CM QM",
		"type": "Electric Guitar",
		"price": 1099,
		"year": 2021,
		"description": "The Pro-Mod DK24 HSS 2PT CM QM is a high-performance guitar that is perfect for modern players. It features a quilt maple top, a two-piece bolt-on caramelized maple neck with graphite reinforcement, and a set of Seymour Duncan pickups.",
		"ratings": []
	},
	{
		"id": 114,
		"brand": "Charvel",
		"name": "Pro-Mod DK24 HSH 2PT CM Ash",
		"type": "Electric Guitar",
		"price": 1099,
		"year": 2021,
		"description": "The Pro-Mod DK24 HSH 2PT CM Ash is a versatile and stylish guitar that can handle a wide range of playing styles. It features an ash body, a two-piece bolt-on caramelized maple neck with graphite reinforcement, and a set of Seymour Duncan pickups.",
		"ratings": []
	},
	{
		"id": 115,
		"brand": "Charvel",
		"name": "DK24 HSH 2PT CM",
		"type": "Electric Guitar",
		"price": 949,
		"year": 2021,
		"description": "The DK24 HSH 2PT CM is a versatile and stylish guitar that can handle a wide range of playing styles. It features a two-piece bolt-on caramelized maple neck with graphite reinforcement, and a set of Seymour Duncan pickups.",
		"ratings": []
	},
	{
		"id": 116,
		"brand": "Charvel",
		"name": "San Dimas Style 1 HH HT E Satin Burgundy Mist",
		"type": "Electric Guitar",
		"price": 989,
		"year": 2021,
		"description": "The San Dimas Style 1 HH HT E Satin Burgundy Mist is a classic and versatile guitar that is perfect for players of all levels. It features an alder body and a maple neck, a set of Seymour Duncan humbucking pickups, and a hardtail bridge for excellent tuning stability.",
		"ratings": []
	},
	{
		"id": 117,
		"brand": "Charvel",
		"name": "Pro-Mod DK24 HSH 2PT CM Sassafras Burl",
		"type": "Electric Guitar",
		"price": 1199,
		"year": 2021,
		"description": "The Pro-Mod DK24 HSH 2PT CM Sassafras Burl is a versatile and stylish guitar that can handle a wide range of playing styles.",
		"ratings": []
	},
	{
		"id": 118,
		"brand": "Yamaha",
		"name": "Yamaha Revstar RS502T",
		"type": "Electric Guitar",
		"price": 699,
		"year": 2021,
		"description": "Mahogany Body, Set-in Mahogany Neck, 13.77'' Rosewood Fretboard",
		"ratings": []
	},
	{
		"id": 119,
		"brand": "Yamaha",
		"name": "Yamaha Pacifica 112VM",
		"type": "Electric Guitar",
		"price": 259,
		"year": 2019,
		"description": "Solid Alder Body, Bolt-on Maple Neck, Rosewood Fretboard",
		"ratings": []
	},
	{
		"id": 120,
		"brand": "Yamaha",
		"name": "Yamaha RGX A2",
		"type": "Electric Guitar",
		"price": 549,
		"year": 2013,
		"description": "Resonite Body, Bolt-on Maple Neck, Rosewood Fretboard",
		"ratings": []
	},
	{
		"id": 121,
		"brand": "Yamaha",
		"name": "Yamaha SG1820A",
		"type": "Electric Guitar",
		"price": 1849,
		"year": 2016,
		"description": "Mahogany Body, Set-in Mahogany Neck, Ebony Fretboard",
		"ratings": []
	},
	{
		"id": 122,
		"brand": "Yamaha",
		"name": "Yamaha SLG200N",
		"type": "Electric Guitar",
		"price": 569,
		"year": 2018,
		"description": "Maple Body, Mahogany Neck, Rosewood and Maple Fretboard",
		"ratings": []
	},
	{
		"id": 123,
		"brand": "Yamaha",
		"name": "Yamaha Pacifica 611HFM",
		"type": "Electric Guitar",
		"price": 869,
		"year": 2016,
		"description": "Solid Flamed Maple Top, Alder Body, Bolt-on Maple Neck, Rosewood Fretboard",
		"ratings": []
	},
	{
		"id": 124,
		"brand": "Yamaha",
		"name": "Yamaha RGX A2.2",
		"type": "Electric Guitar",
		"price": 599,
		"year": 2015,
		"description": "Resonite Body, Bolt-on Maple Neck, Rosewood Fretboard",
		"ratings": []
	},
	{
		"id": 125,
		"brand": "Yamaha",
		"name": "Yamaha Revstar RS820CR",
		"type": "Electric Guitar",
		"price": 899,
		"year": 2019,
		"description": "Mahogany Body, Set-in Mahogany Neck, Ebony Fretboard",
		"ratings": []
	},
	{
		"id": 126,
		"brand": "Yamaha",
		"name": "Yamaha Pacifica 112J",
		"type": "Electric Guitar",
		"price": 239,
		"year": 2019,
		"description": "Solid Alder Body, Bolt-on Maple Neck, Rosewood Fretboard",
		"ratings": []
	},
	{
		"id": 127,
		"brand": "Yamaha",
		"name": "Yamaha RGX121Z",
		"type": "Electric Guitar",
		"price": 199,
		"year": 2015,
		"description": "Basswood Body, Bolt-on Maple Neck, Rosewood Fretboard",
		"ratings": []
	},
	{
		"id": 128,
		"brand": "Schecter",
		"name": "Hellraiser C-1 FR",
		"type": "Electric Guitar",
		"price": 1049,
		"year": 2022,
		"description": "Mahogany body, quilted maple top, 3-pc mahogany neck, ebony fingerboard, EMG active pickups, Floyd Rose tremolo system",
		"ratings": []
	},
	{
		"id": 129,
		"brand": "Schecter",
		"name": "Omen Extreme-6",
		"type": "Electric Guitar",
		"price": 499,
		"year": 2022,
		"description": "Basswood body, quilted maple top, maple neck, rosewood fingerboard, Schecter Diamond Plus humbucking pickups",
		"ratings": []
	},
	{
		"id": 130,
		"brand": "Schecter",
		"name": "Solo-II Platinum",
		"type": "Electric Guitar",
		"price": 899,
		"year": 2021,
		"description": "Mahogany body, maple neck, ebony fingerboard, Seymour Duncan humbucking pickups, TonePros Tune-O-Matic bridge",
		"ratings": []
	},
	{
		"id": 131,
		"brand": "Schecter",
		"name": "C-6 Plus",
		"type": "Electric Guitar",
		"price": 379,
		"year": 2022,
		"description": "Basswood body, maple neck, rosewood fingerboard, Schecter Diamond humbucking pickups, hardtail bridge",
		"ratings": []
	},
	{
		"id": 132,
		"brand": "Schecter",
		"name": "C-8 Multiscale",
		"type": "Electric Guitar",
		"price": 999,
		"year": 2021,
		"description": "Swamp ash body, multi-scale maple/purpleheart neck, ebony fingerboard, Fishman Fluence Modern humbucking pickups",
		"ratings": []
	},
	{
		"id": 133,
		"brand": "Schecter",
		"name": "Sun Valley Super Shredder PT FR",
		"type": "Electric Guitar",
		"price": 999,
		"year": 2022,
		"description": "Swamp ash body, maple neck, ebony fingerboard, Sustainiac pickup, Floyd Rose tremolo system",
		"ratings": []
	},
	{
		"id": 134,
		"brand": "Schecter",
		"name": "Demon-6",
		"type": "Electric Guitar",
		"price": 399,
		"year": 2022,
		"description": "Basswood body, maple neck, rosewood fingerboard, Schecter Diamond pickups, Tune-O-Matic bridge",
		"ratings": []
	},
	{
		"id": 135,
		"brand": "Schecter",
		"name": "C-1 Plus",
		"type": "Electric Guitar",
		"price": 699,
		"year": 2022,
		"description": "Mahogany body, maple neck, rosewood fingerboard, Schecter Diamond pickups, TonePros Tune-O-Matic bridge",
		"ratings": []
	},
	{
		"id": 136,
		"brand": "Schecter",
		"name": "Reaper-6",
		"type": "Electric Guitar",
		"price": 729,
		"year": 2021,
		"description": "Swamp ash body, maple/purpleheart neck, ebony fingerboard, Schecter Diamond pickups, hardtail bridge",
		"ratings": []
	},
	{
		"id": 137,
		"brand": "Schecter",
		"name": "Omen-6",
		"type": "Electric Guitar",
		"price": 349,
		"year": 2022,
		"description": "Basswood body, maple neck, rosewood fingerboard, Schecter Diamond pickups, Tune-O-Matic bridge",
		"ratings": []
	},
	{
		"id": 138,
		"brand": "Washburn",
		"name": "Washburn WI50V",
		"type": "Electric Guitar",
		"price": 350,
		"year": 2015,
		"description": "Mahogany Solid Body Electric Guitar, Vintage Matte Finish",
		"ratings": []
	},
	{
		"id": 139,
		"brand": "Washburn",
		"name": "Washburn PXM27EC",
		"type": "Electric Guitar",
		"price": 599,
		"year": 2019,
		"description": "Poplar Burl Top Solid Body Electric Guitar, Trans Black Finish",
		"ratings": []
	},
	{
		"id": 140,
		"brand": "Washburn",
		"name": "Washburn Sonamaster S1",
		"type": "Electric Guitar",
		"price": 159,
		"year": 2020,
		"description": "Basswood Body Electric Guitar, Tobacco Sunburst Finish",
		"ratings": []
	},
	{
		"id": 141,
		"brand": "Washburn",
		"name": "Washburn Comfort G-MINI 55",
		"type": "Electric Guitar",
		"price": 299,
		"year": 2019,
		"description": "Grand Auditorium Cutaway Acoustic-Electric Guitar, Natural Satin Finish",
		"ratings": []
	},
	{
		"id": 142,
		"brand": "Washburn",
		"name": "Washburn Parallaxe PXS10EDLX",
		"type": "Electric Guitar",
		"price": 749,
		"year": 2018,
		"description": "Mahogany Body Electric Guitar, Trans Black Matte Finish",
		"ratings": []
	},
	{
		"id": 143,
		"brand": "Washburn",
		"name": "Washburn WIN14WH",
		"type": "Electric Guitar",
		"price": 129,
		"year": 2021,
		"description": "Basswood Body Electric Guitar, Gloss White Finish",
		"ratings": []
	},
	{
		"id": 144,
		"brand": "Washburn",
		"name": "Washburn Nuno Bettencourt Signature N2",
		"type": "Electric Guitar",
		"price": 599,
		"year": 2019,
		"description": "Alder Body Electric Guitar, Satin Natural Finish",
		"ratings": []
	},
	{
		"id": 145,
		"brand": "Washburn",
		"name": "Washburn N4 Authentic Nuno Bettencourt Signature",
		"type": "Electric Guitar",
		"price": 3699,
		"year": 2019,
		"description": "Alder Body Electric Guitar, Natural Matte Finish",
		"ratings": []
	},
	{
		"id": 146,
		"brand": "Washburn",
		"name": "Washburn BT2",
		"type": "Electric Guitar",
		"price": 179,
		"year": 2021,
		"description": "Mahogany Body Electric Guitar, Satin Black Finish",
		"ratings": []
	},
	{
		"id": 147,
		"brand": "Washburn",
		"name": "Washburn Parallaxe PXS29FRQEBM",
		"type": "Electric Guitar",
		"price": 899,
		"year": 2019,
		"description": "Quilted Maple Top Solid Body Electric Guitar, Trans Black Burst Finish",
		"ratings": []
	},
	{
		"id": 148,
		"brand": "PRS",
		"name": "PRS Custom 24",
		"type": "Electric Guitar",
		"price": 3299,
		"year": 2021,
		"description": "A classic PRS model",
		"ratings": []
	},
	{
		"id": 149,
		"brand": "PRS",
		"name": "PRS SE 245",
		"type": "Electric Guitar",
		"price": 849,
		"year": 2021,
		"description": "The PRS SE 245 is a classic single-cutaway guitar with a mahogany body and neck",
		"ratings": []
	},
	{
		"id": 150,
		"brand": "PRS",
		"name": "PRS SE Custom 24",
		"type": "Electric Guitar",
		"price": 899,
		"year": 2021,
		"description": "The PRS SE Custom 24 is based on the PRS Custom 24 model and features a mahogany body and neck with a maple top and 24 frets.",
		"ratings": []
	},
	{
		"id": 151,
		"brand": "PRS",
		"name": "PRS SE Mark Holcomb SVN 7-String",
		"type": "Electric Guitar",
		"price": 1049,
		"year": 2021,
		"description": "A 7-string guitar designed in collaboration with Mark Holcomb of Periphery",
		"ratings": []
	},
	{
		"id": 152,
		"brand": "PRS",
		"name": "PRS CE 24",
		"type": "Electric Guitar",
		"price": 1999,
		"year": 2021,
		"description": "A bolt-on neck version of the Custom 24",
		"ratings": []
	},
	{
		"id": 153,
		"brand": "PRS",
		"name": "PRS SE Hollowbody II",
		"type": "Electric Guitar",
		"price": 1199,
		"year": 2021,
		"description": "A semi-hollow electric guitar with a maple top and back",
		"ratings": []
	},
	{
		"id": 154,
		"brand": "PRS",
		"name": "PRS S2 Custom 22",
		"type": "Electric Guitar",
		"price": 1749,
		"year": 2021,
		"description": "A 22-fret guitar with a mahogany body and neck",
		"ratings": []
	},
	{
		"id": 155,
		"brand": "PRS",
		"name": "PRS McCarty 594",
		"type": "Electric Guitar",
		"price": 4499,
		"year": 2021,
		"description": "Inspired by vintage guitars",
		"ratings": []
	},
	{
		"id": 156,
		"brand": "PRS",
		"name": "PRS Silver Sky",
		"type": "Electric Guitar",
		"price": 2149,
		"year": 2021,
		"description": "Designed in collaboration with John Mayer",
		"ratings": []
	},
	{
		"id": 157,
		"brand": "Ernie Ball Music Man",
		"name": "St. Vincent Signature",
		"type": "Electric Guitar",
		"price": 1799.99,
		"year": 2021,
		"description": "A stylish guitar designed in collaboration with the artist St. Vincent",
		"ratings": []
	},
	{
		"id": 158,
		"brand": "Ernie Ball Music Man",
		"name": "John Petrucci Majesty",
		"type": "Electric Guitar",
		"price": 3199.99,
		"year": 2020,
		"description": "A high-performance guitar designed in collaboration with Dream Theater guitarist John Petrucci",
		"ratings": []
	},
	{
		"id": 159,
		"brand": "Ernie Ball Music Man",
		"name": "Axis Super Sport",
		"type": "Electric Guitar",
		"price": 2399.99,
		"year": 2019,
		"description": "A classic-style guitar with a modern twist",
		"ratings": []
	},
	{
		"id": 160,
		"brand": "Ernie Ball Music Man",
		"name": "Steve Morse Y2D",
		"type": "Electric Guitar",
		"price": 2799.99,
		"year": 2018,
		"description": "A versatile guitar designed in collaboration with Steve Morse",
		"ratings": []
	},
	{
		"id": 161,
		"brand": "Ernie Ball Music Man",
		"name": "Cutlass HSS",
		"type": "Electric Guitar",
		"price": 1799.99,
		"year": 2020,
		"description": "A versatile guitar with a classic look",
		"ratings": []
	},
	{
		"id": 162,
		"brand": "Ernie Ball Music Man",
		"name": "Luke III HSS",
		"type": "Electric Guitar",
		"price": 2199.99,
		"year": 2021,
		"description": "A stylish guitar designed in collaboration with Toto guitarist Steve Lukather",
		"ratings": []
	},
	{
		"id": 163,
		"brand": "Ernie Ball Music Man",
		"name": "Valentine",
		"type": "Electric Guitar",
		"price": 1399.99,
		"year": 2017,
		"description": "A retro-inspired guitar designed in collaboration with Maroon 5 guitarist James Valentine",
		"ratings": []
	},
	{
		"id": 164,
		"brand": "Ernie Ball Music Man",
		"name": "Albert Lee HH",
		"type": "Electric Guitar",
		"price": 2299.99,
		"year": 2020,
		"description": "A versatile guitar designed in collaboration with guitarist Albert Lee",
		"ratings": []
	},
	{
		"id": 165,
		"brand": "Ernie Ball Music Man",
		"name": "StingRay RS",
		"type": "Electric Guitar",
		"price": 1699.99,
		"year": 2021,
		"description": "A modern take on the classic StingRay guitar",
		"ratings": []
	},
	{
		"id": 166,
		"brand": "Ernie Ball Music Man",
		"name": "Armada",
		"type": "Electric Guitar",
		"price": 2599.99,
		"year": 2019,
		"description": "A semi-hollowbody guitar with a unique look and sound",
		"ratings": []
	},
	{
		"id": 167,
		"brand": "Rickenbacker",
		"name": "Rickenbacker 325C64",
		"type": "Electric Guitar",
		"price": 2900,
		"year": 2020,
		"description": "A recreation of the 325 model which gained fame by John Lennon.",
		"ratings": []
	},
	{
		"id": 168,
		"brand": "Rickenbacker",
		"name": "Rickenbacker 620",
		"type": "Electric Guitar",
		"price": 2800,
		"year": 2020,
		"description": "A double cutaway, solid body electric guitar with three pickups.",
		"ratings": []
	},
	{
		"id": 169,
		"brand": "Rickenbacker",
		"name": "Rickenbacker 330",
		"type": "Electric Guitar",
		"price": 2599,
		"year": 2019,
		"description": "A semi-acoustic guitar with a solid maple body and set-in neck.",
		"ratings": []
	},
	{
		"id": 170,
		"brand": "Rickenbacker",
		"name": "Rickenbacker 360",
		"type": "Electric Guitar",
		"price": 2700,
		"year": 2020,
		"description": "A semi-acoustic guitar with a distinctive 'R' tailpiece and stereo output.",
		"ratings": []
	},
	{
		"id": 171,
		"brand": "Rickenbacker",
		"name": "Rickenbacker 620/12",
		"type": "Electric Guitar",
		"price": 3300,
		"year": 2019,
		"description": "A 12-string double cutaway, solid body electric guitar.",
		"ratings": []
	},
	{
		"id": 172,
		"brand": "Rickenbacker",
		"name": "Rickenbacker 381V69",
		"type": "Electric Guitar",
		"price": 3100,
		"year": 2019,
		"description": "A semi-acoustic guitar with a triangular soundhole and 'R' tailpiece.",
		"ratings": []
	},
	{
		"id": 173,
		"brand": "Rickenbacker",
		"name": "Rickenbacker 4003",
		"type": "Electric Guitar",
		"price": 1700,
		"year": 2019,
		"description": "A bass guitar with a distinctive 'cresting wave' shape.",
		"ratings": []
	},
	{
		"id": 174,
		"brand": "Rickenbacker",
		"name": "Rickenbacker 650C Colorado",
		"type": "Electric Guitar",
		"price": 4200,
		"year": 2018,
		"description": "A limited edition electric guitar featuring a figured maple top and Colorado-themed artwork.",
		"ratings": []
	},
	{
		"id": 175,
		"brand": "Rickenbacker",
		"name": "Rickenbacker 360/12",
		"type": "Electric Guitar",
		"price": 3100,
		"year": 2019,
		"description": "A 12-string semi-acoustic guitar with a distinctive 'R' tailpiece and stereo output.",
		"ratings": []
	}
]

module.exports = guitars;
