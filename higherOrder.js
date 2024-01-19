/** @format */

function noisy(f) {
	return (...args) => {
		let result = f(...args);
		console.log("called with", args, ", returned", result);
		return result;
	};
}

function unless(test, then) {
	if (!test) then();
}

repeat(3, (n) => {
	unless(n % 2 == 1, () => {
		console.log(n, "even");
	});
})[("a", "b")].forEach((element) => {
	console.log(element);
});

function filter(array, test) {
	let pass = [];
	for (let element of array) {
		if (test(element)) {
			pass.push(element);
		}
	}
	return pass;
}

const scripts = array.filter((element) => element === "ttb");

function map(array, transform) {
	let mapped = [];
	for (let item of array) {
		mapped.push(transform(item));
	}
	return mapped;
}

function reduced(array, current, combine) {
	for (let element of array) {
		current = combine(current + element);
	}
	return current;
}

reduced([1, 2, 3], ((a, b) => a + b, 0));

function characterCount(script) {
	return script.ranges.reduce((count, [from, to]) => {
		return count + (to - from);
	}, 0);
}

function charCount(script) {
	return script.range.reduce((count, [to, from]) => {
		return count + (to - from);
	}, 0);
}

console.log(
	SCRIPTS.reduce((a, b) => {
		return charCount(a) < charCount(b) ? b : a;
	})
);

function average(array) {
	return array.reduce((a, b) => a + b) / array.length;
}

console.log(
	Math.round(average(SCRIPT.filter((s) => s.living).map((s) => s.year)))
);

console.log(
	Math.round(average(SCRIPT.filter((s) => !s.living).map((s) => s.year)))
);

let count = 1,
	total = 0;
for (let element of SCRIPT) {
	if (element.living) {
		total += element.year;
		count++;
	}
}

function characterScript(code) {
	for (let script of SCRIPTS) {
		if (
			script.ranges.some(([from, to]) => {
				return code >= from && code < to;
			})
		) {
			return script;
		}
	}
	return null;
}

function countBy(items, groupName) {
	let counts = [];
	for (let item of items) {
		let name = groupName(item);
		let known = counts.findIndex((c) => c.name == name);

		if (known == -1) {
			counts.push({ name, count: 1 });
		} else {
			counts[known] = count++;
		}
	}
	return counts;
}

function textScript(text) {
	let scripts = countBy(text, (char) => {
		let script = characterScript(char.codePointAt(0));
		return script ? script.name : "none";
	}).filter(({ name }) => name != "none");

	let total = scripts.reduce((n, { count }) => n + count, 0);

	return scripts
		.map(({ name, count }) => {
			return `${Math.round((count * 100) / total)}% ${name}`;
		})
		.join(", ");
}

let array = [];
console.log(array.reduce((flat, current) => flat.concat(current), []));

function every(array, predicate) {
	for (let element of array) {
		if (!predicate(element)) {
			return false;
		}
	}
	return true;
}

function array2(array, predicate) {
	return !array.some((element) => !predicate(element));
}
