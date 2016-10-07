var person = {
	firstname: 'Default',
	lastname: 'Default',
	getFullName: function() {
		return this.firstname + ' ' + this.lastname;
	}
};

var john = {
	firstname: 'John',
	lastname: 'Doe'
};


// don't do this EVER! for demo purposes only!!

john.__proto__ = person;

console.log(john.getFullName()); // John Doe
console.log(john.firstname);

// Whichever object originated the call will be what is referenced to by 'this'.

// So in the above instance, 'this' will point to the john object, not the person object.

var jane = {
	firstname: 'Jane'
};

jane.__proto__ = person;

console.log(jane.getFullName()); // Jane Default
console.log(jane.lastname); // Default