const adventurer = {
	name: "Tien",
	hitpoints: 10,
	belongings: ["Hammer", "Magic knife", "Wallet"],
	companion: {
		name: "Susan",
		type: "Bat"
	},
	companion2: {
		name: "Duc",
		type: "Incest"
	}
}

console.log(adventurer.belongings[2]);

adventurer.belongings.push("Vogue Magazine");

function findBelongings () {
	for (let i = 0; i < adventurer.belongings.length; i++) {
		console.log(adventurer.belongings[i])
	}
}

findBelongings();

console.log(adventurer.companion.name);

const movie = { title: "Eraserhead", director: "David Lynch", year: 1978 }

for (let key in movie) {
	console.log(movie[key]);
}

const keys = Object.keys(movie);

for (let i = 0; i < Object.keys(movie).length; i++) {
	console.log(movie[keys[i]]);
}