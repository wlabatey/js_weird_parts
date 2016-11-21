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

console.log(john);

// console.log(person.getFullName.call(john)); // John Doe

console.log(john.getFullName());
console.log(john.firstname);

// Whichever object originated the call will be what is referenced to by 'this'.

// So in the above instance, 'this' will point to the john object, not the person object.

var jane = {
	firstname: 'Jane'
};

jane.__proto__ = person;

console.log(jane.getFullName()); // Jane Default
console.log(jane.lastname); // Default

// Reflection & Extend

for (var prop in john) {
	if (john.hasOwnProperty(prop)) { 			// We use the .hasOwnProperty to only check the members 
		console.log(prop + ': ' + john[prop]); 	// of the john object, but not it's prototype.
	}
}

var jane = {
	address: '111 Main St.',
	getFormalFullName: function() {
		return this.lastname + ', ' + this.firstname;
	}
};

var jim = {
	getFirstName: function() {
		return firstname;
	}
};

_.extend(john, jane, jim);

console.log(_.allKeys(john));

console.log(john);
