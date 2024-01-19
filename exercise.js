/** @format */

// /** @format */

// for (let x = 0; x < 7; x++) {
// 	for (let y = 0; y < x; y++) {
// 		let total = "";
// 		total = total + "#";
// 		console.log(total);
// 	}
// 	console.log("");
// }

// for (let line = "#"; line.length < 8; line += "#") {
// 	console.log(line);
// }

// for (let x = 1; x <= 100; x++) {
// 	if (x % 3 == 0 && x % 5 == 0) {
// 		console.log("FizzBuzz" + x);
// 	} else if (x % 3 == 0) {
// 		console.log("Buzz" + x);
// 	} else {
// 		console.log("Fizz" + x);
// 	}
// }
let board = "";
let size = Number(prompt("Please enter any number"));

for (let i = 0; i < size; i++) {
	for (let j = 0; j < size; j++) {
		if ((j + i) % 2 == 0) {
			board += " ";
		} else {
			board += "#";
		}
	}
	board += "\n";
}

console.log(board);

function arrayToList(array) {
	let list = null;
	for (let i = array.length - 1; i >= 0; i--) {
		list = { value: array[i], rest: list };
	}
	return list;
}
function listToArray(list) {
	let array = [];
	for (let node = list; node; node = node.rest) {
		array.push(node.value);
	}
	return array;
}

function prepend(value, list) {
	return { value, rest: list };
}

function nth(list, n) {
	if (!list) return undefined;
	else if (n == 0) return list.value;
	else return nth(list.rest, n - 1);
}

listToArray(arrayToList());

function deepComparison(a, b) {
	if (a === b) return true;
	if (a == null || typeof a !== "object" || b == null || typeof b !== "object")
		return false;
	let keysA = Object.keys(a),
		keysB = Object.keys(b);
	if (keysA.length != keysB.length) return false;

	for (let key of keysA) {
		if (!keysB.includes(key) || deepComparison(a[key], b[key])) return false;
	}
	return true;
}
