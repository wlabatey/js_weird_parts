// typeof and instanceof keywords in javascript.

var a = 3;
console.log("var a: " + typeof a);

var a2 = new Number(4);
console.log("var a2: " + typeof a2); // object!

var b = "Hello";
console.log("var b: " + typeof b);

var c = {};
console.log("var c: " + typeof c);

var d = [];
console.log("var d: " + typeof d);
console.log("Object.prototype.toString.call(d): " + Object.prototype.toString.call(d));

function Person(name) {
	this.name = name;
}

var e = new Person('Jane');
console.log("var e (new Person('Jane')): " + typeof e);
console.log("e instanceof Person: ", e instanceof Person);

console.log("typeof undefined: " + typeof undefined); // makes sense
console.log("typeof null: " + typeof null); // a bug since forever...

var z = function () {};
console.log("var z: " + typeof z);