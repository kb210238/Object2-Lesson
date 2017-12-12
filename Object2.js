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
	for (i = 0; i < adventurer.belongings.length; i++) {
		console.log(adventurer.belongings[i])
	}
}

findBelongings();

console.log(adventurer.companion.name);