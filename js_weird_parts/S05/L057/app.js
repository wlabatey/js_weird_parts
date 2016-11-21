// Function constructors & the 'new' keyword.

function Person(firstname, lastname) {				// One way to create objects in javascript is with constructor functions,
													// such as this one.
	console.log(this);								
	this.firstname = firstname;						// What this does is automatically set the prototype using the .prototype property
	this.lastname = lastname;						// of the function object.
	console.log('This function is invoked');
													// Note: This is NOT the __proto__ prototype of the function! It is a special property 
}													// used only to set the prototypes of any objects created by function constructors with the new keyword, 
													// like we've done below.

Person.prototype.sayHello = function() {			// Methods are added to the function constructor's .prototype property
	return "Hello, I am " + this.firstname + "!";	// to save memory space, as all created objects will be able to
};													// access this single copy of the method through their prototype chain,
													// rather than creating a new method for every object.

var john = new Person('john', 'doe');
console.log(john);

var jane = new Person('jane', 'dougal');
console.log(jane);

console.log(john.sayHello());
console.log(jane.sayHello());

Person.prototype.getFullName = function() {
	return "My full name is " + this.firstname + " " + this.lastname;
};

console.log(john.getFullName());
console.log(jane.getFullName());

console.log(john);
console.log(Person.prototype); 
console.log(Person.__proto__);