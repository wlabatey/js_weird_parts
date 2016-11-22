// Object.create and pure prototypal inheritance

var person = {
	firstname: 'Default',
	lastname: 'Default',
	greet: function() {
		return 'Hi ' + this.firstname;
	}
};


// Below is an example of a polyfill for the object.create method.

// A polyfill is used to fill in gaps for older browsers / javascript engines
// that do not support newer features.

if (!Object.create) {
	Object.create = function(o) {									// If Object.create does not exist, this polyfill
		if (arguments.length > 1) {									// will create it and run this function, which checks
			throw new Error('Object.create implementation' +		// to make sure we only have 1 parameter and then
							' only accepts the first parameter.');	// creates an empty function F(), sets the prototype
		}															// of F() to the 'o' object which we pass in and finally
	function F() {}													// creates a new object using our empty F() constructor.
	F.prototype = o;
	return new F();													// This just creates a new empty object and sets the prototype
	};																// to the object we pass to it (like Object.create would do).
}

// var CreateObject = function(obj) {
// 	function F() {}
// 	F.prototype = obj;
// 	return new F();
// };

var john = Object.create(person);	// Object.create creates a new object and specifies the prototype object.
john.firstname = 'John';
john.lastname = 'Doe';				// This is pure prototypal inheritance in javascript.
									// It is not trying to mimic classical inheritances from other languages,
console.log(john);					// it is a simplified & straightforward approach.
console.log(john.greet());

