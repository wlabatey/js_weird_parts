String.prototype.isLengthGreaterThan = function(limit) {
	return this.length > limit;
};

Number.prototype.isPositive = function() {
	return this > 0;
};

var a = "john";
console.log(a.isLengthGreaterThan(4));

var b = String;
console.log(b);

var c = 3;
console.log(c.isPositive());

var d = new Number(3);
 console.log(d.isPositive());

console.log(c==d); // true (due to coercion)
console.log(c===d); // false (comparing a number with an object)

 // Built in function constructors are somewhat useful, but can be dangerous due to unpredictable behavior.

 // Built in function constructors create OBJECTS and not primitives, therefore it is preferred to use
 // literals to create primitives rather than function constructors.

 // Beware of them, and do not use them as your default method of creating objects.
