/** @format */

// function normalize() {
// 	console.log(this.coords.map((n) => n / this.length));
// }

// normalize.call({ coords: [], length: 5 });
console.log(Object.getPrototypeOf(Math.max) == Function.prototype);
console.log(Object.getPrototypeOf([]) == Array.prototype);

let protoRabbit = {
	speak(line) {
		console.log(`The ${this.type} rabbit says '${line}'`);
	},
};
let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("S");

let ages = new Map();
ages.set("Miki 32");
ages.set("herriye 32");
ages.set("darling 32");

console.log(`Julia is ${ages.get("miki")}`);
console.log(`Julia is ${ages.has("miki")}`);
console.log(ages.has("toString"));

console.log({ x: 1 }.hasOwnProperty("x"));

class Matrix {
	constructor(height, width, element = (x, y) => undefined) {
		this.height = height;
		this.width = width;
		this.content = [];

		for (let y = 0; y < this.height; y++) {
			for (let x = 0; x < this.width; x++) {
				this.content[y * width + x] = element(x, y);
			}
		}
	}
	get(x, y) {
		return this.content[y * this.width + x];
	}

	set(x, y, value) {
		this.content[y * this.width + x] = value;
	}
}

class MatrixIterator {
	constructor(matrix) {
		this.x = 0;
		this.y = 0;
		this.matrix = matrix;
	}

	next() {
		if (this.y == this.matrix.height) return { done: true };
		let value = {
			x: this.x,
			y: this.y,
			value: this.matrix.get(this.x, this.y),
		};
		this.x++;

		if (this.x == this.matrix.width) {
			this.x = 0;
			this.y++;
		}
		return { value, done: false };
	}
}

Matrix.prototype[Symbol.iterator] = function () {
	return new MatrixIterator(this);
};

let matrix = new Matrix(2, 2, (x, y) => `value ${x}, ${y}`);

for (let { x, y, value } of matrix) {
	console.log(x, y, value);
}

class Temperature {
	constructor(celsius) {
		this.celsius = celsius;
	}
	get fahrenheit() {
		return this.celsius * 1.8 + 32;
	}

	set fahrenheit(value) {
		this.celsius = (value - 32) / 1.8;
	}

	static formFahrenheit(value) {
		return new Temperature((value - 32) / 1.8);
	}
}

class SymmetricMatrix extends Matrix {
	constructor(size, element = (x, y) => undefined) {
		super(size, size, (x, y) => {
			if (x < y) return element(y, x);
			else return element(x, y);
		});
	}

	set(x, y, value) {
		super.set(y, x, value);
		if (x != y) {
			super.set(y, x, value);
		}
	}
}

class Vec {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	plus(other) {
		return new Vec(this.x + other.x, this.y + other.y);
	}

	minus(other) {
		return new Vec(this.x - other.x, this.y - other.y);
	}

	get length() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}
}

class Group {
	constructor() {
		this.member = [];
	}

	add(value) {
		if (!this.has(value)) {
			this.member.push(value);
		}
	}

	delete(value) {
		return this.member.filter((v) => v !== value);
	}

	isAvailable(value) {
		return this.member.include(value);
	}

	static from(collection) {
		let group = new Group();
		for (let value of collection) {
			group.add(value);
		}
		return group;
	}

	[Symbol.iterator]() {
		return new GroupIterator(this);
	}
}

class GroupIterator {
	constructor(group) {
		this.group = group;
		this.position = 0;
	}

	next() {
		if (this.position >= this.group.members.length) {
			return { done: true };
		} else {
			let result = { value: this.group.members[this.position], done: false };
			this.position++;
			return result;
		}
	}
}

for (let value of Group.from(["a", "b", "c"])) {
	console.log(value);
}
