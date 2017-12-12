const adventurer = {
	name: "Tien",
	hitpoints: 10,
	belongings: ["Hammer", "Magic knife", "Wallet"]
}

console.log(adventurer.belongings[2]);

adventurer.belongings.push("Vogue Magazine");

function findBelongings () {
	for (i = 0; i < adventurer.belongings.length; i++) {
		console.log(adventurer.belongings[i])
	}
}

findBelongings();
