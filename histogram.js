/** @format */

let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
	console.log("You number is the square root of " + theNumber * theNumber);
} else {
	console.log("");
}

let number = prompt("Please enter a number");

if (number < 10) {
	console.log("less than ten");
} else if (number < 100) {
	console.log("less than t");
}

let result = 1;
let counter = 0;

while (counter < 10) {
	result *= 2;
	counter += 1;
}
console.log(result);

let yourName = "";
do {
	yourName = prompt("Who are you ?");
} while (!yourName);

for (let i = 0; i <= 12; i++) {
	console.log(i);
}

for (let i = 0; i <= 10; i + 2) {
	result *= 2;
}

console.log(result);

for (let i = 0; i <= 20; i++) {
	if (i % 7 == 0) {
		break;
	}
	result += i;
}

console.log(result);

switch (prompt("please enter a character")) {
	case "a":
		console.log("a");
		break;
	case "b":
		console.log("b");
		break;
	default:
		console.log("not found");
}

const power = (base, exponent) => {
	let result = 1;
	for (let count = 0; count < exponent; count++) {
		result *= base;
	}
	return result;
};

console.log(power(2, 10));
const hummus = function (factor) {
	const ingredient = function (amount, unit, name) {
		let ingredientAmount = amount * factor;
		if (ingredientAmount > 1) {
			unit += "s";
		}
		console.log(`${ingredientAmount} ${unit} ${name}`);
	};
	ingredient(1, "can", "chickpeas");
};

console.log(hummus(2));

function power(base, exponent) {
	if (exponent === 0) {
		return 1;
	} else {
		return base * power(base, exponent - 1);
	}
}

function findSolution(target) {
	function find(current, history) {
		if (current == target) {
			return history;
		} else if (current > target) {
			return null;
		} else {
			return (
				find(current + 5, `(${history} + 5)`) ||
				find(current * 3, `(${history} * 3)`)
			);
		}
	}
	return find(1, "1");
}

function printFarmInventory(cows, chickens) {
	let cowString = String(cows);
	while (cowString.length < 3) {
		cowString = "0" + cowString;
	}
	console.log(`${cowString} Cows`);
	let chickenString = String(chickens);
	while (chickenString.length < 3) {
		chickenString = "0" + chickenString;
	}
	console.log(`${chickenString} chickens`);
}
printFarmInventory(3, 4);

function printZeroPaddedWithLabel(number, label) {
	let numberString = String(number);
	while (numberString.length < 3) {
		numberString = "0" + numberString;
	}
	console.log(`${numberString} ${label}`);
}

function printFarmInventory(cows, chickens, pigs) {
	printZeroPaddedWithLabel(cows, "Cows");
	printZeroPaddedWithLabel(chickens, "Chickens");
	printZeroPaddedWithLabel(pigs, "pigs");
}

printFarmInventory(7, 11, 3);

function zeroPadding(number) {
	let string = String(number);
	while (string.length < 3) {
		string = "0" + string;
	}
	return string;
}

function printFarmInventory(cows, chicken, pigs) {
	console.log(`${zeroPadding(cows)}, cows`);
	console.log(`${zeroPadding(chicken)}, chicken`);
	console.log(`${zeroPadding(pigs)}, cows`);
}

function zeroPad(number, width) {
	let string = String(number);
	while (string.length < width) {
		string = "0" + string;
	}
	return string;
}

function printFarmInventory(cows, chicken, pigs) {
	console.log(`${zeroPadding(cows, 3)}, cows`);
	console.log(`${zeroPadding(chicken, 4)}, chicken`);
	console.log(`${zeroPadding(pigs, 7)}, cows`);
}
