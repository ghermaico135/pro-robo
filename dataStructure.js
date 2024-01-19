/** @format */

// let day1 = {
// 	squirrel: false,
// 	events: ["work", "touched tree", "pizza", "running"],
// };

// console.log(day1.squirrel);
// day1.squirrel = true;
// console.log(day1.squirrel);
// let description = {
// 	work: "went to work",
// 	"touched tree": "touched",
// 	4: "miki",
// };

// let objectA = { a: 1, b: 3 };
// Object.assign(objectA, { b: 4, c: 5 });
// console.log(objectA);

// let journals = [
// 	{
// 		events: ["work", "touched tree", "pizza", "running", "television"],
// 		squirrel: false,
// 	},
// 	{
// 		events: [
// 			"work",
// 			"ice cream",
// 			"cauliflower",
// 			"lasagna",
// 			"touched tree",
// 			"brushed teeth",
// 		],
// 		squirrel: false,
// 	},
// 	{
// 		events: ["weekend", "cycling", "break", "peanuts", "beer"],
// 		squirrel: true,
// 	},
// ];

// let journal = [];
// function addEntry(events, square) {
// 	journal.push({ events, squirrel });
// }

// addEntry(
// 	[
// 		"work",
// 		"ice cream",
// 		"cauliflower",
// 		"lasagna",
// 		"touched tree",
// 		"brushed teeth",
// 	],
// 	false
// );

// function phi(table) {
// 	return (
// 		(table[3] * table[0] - table[2] * table[1]) /
// 		Math.sqrt(
// 			(table[2] + table[3]) *
// 				(table[0] + table[1]) *
// 				(table[1] + table[3]) *
// 				(table[0] + table[2])
// 		)
// 	);
// }

// function tableFor(event, journal) {
// 	let table = [0, 0, 0, 0];
// 	for (let i = 0; i < journal.length; i++) {
// 		let entry = journal[i],
// 			index = 0;
// 		if (entry.events.include(event)) {
// 			index += 1;
// 		}
// 		if (entry.squirrel) index += 2;
// 		table[index] += 1;
// 	}
// 	return table;
// }

// function journalEvents(journal) {
// 	let events = [];
// 	for (let entry of journal) {
// 		for (let entry2 of entry.events) {
// 			if (!events.include(entry2)) {
// 				events.push(entry2);
// 			}
// 		}
// 	}
// 	return events;
// }

// for (let entry of journal) {
// 	if (
// 		entry.events.includes("peanuts") &&
// !entry.events.includes("brushed teeth")
// 	) {
// 		entry.events.push("peanut teeth");
// 	}
// }

// function indexs(array, index) {
// 	return array.slice(0, index).concat(array.slice(index + 1));
// }

let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" ");
console.log(words);
let wordJoin = words.join(". ");
console.log(wordJoin);

function max(...numbers) {
	let result = -Infinity;
	for (let number of numbers) {
		if (number > result) result = number;
	}
	return result;
}

console.log(max(4, 5, 6, 7));

let string = JSON.stringify({ squirrel: false, events: ["weekend"] });
console.log(JSON.parse(string).events);
