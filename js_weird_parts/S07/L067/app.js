function logNewPerson() {
	"use strict";				// Use strict enables a stricter way of checking in javascript
	var person2;				// that can be useful to track down some bugs
	persom2 = {};				// such as the one here, with typos in variables and using them
	console.log(persom2);		// before they are declared.
}

var person;						// Beware, though, that not all browsers implement it the same way
persom = {};					// and so it is not something you should rely on.
console.log(persom);
logNewPerson();					// Also, it may not be compatible with some frameworks or libraries.
