// call, apply & bind

var person = {
	firstname: 'John',
	lastname: 'Doe',
	getFullName: function() {

		var fullname = this.firstname + ' ' + this.lastname;		// Remeber that in an object,
		return fullname;											// 'this' refers to the current object.

	}
};

var logName = function(lang1, lang2) {

	console.log('Logged: ' + this.getFullName());
	console.log('Arguments: ' + lang1 + ' ' + lang2);
	console.log('-----------------');

}.bind(person);

// var logPersonName = logName.bind(person);

//logPersonName('en', 'es');

logName('en', 'es');

// ---------------------------------------------

// ---- bind -----

// What we are doing above is using the .bind method. What this method does is returns a new copy of 
// the original function and sets up a new function object.

// It controls what the 'this' keyword refers to, rather than using the default.

// We can either make a new variable or use it at the end of the function as on line 20.

// -----------------------------------------------


// ---- call ----

// So far, we have been invoking functions with the parenthesis operator ().

// An alternative is to use the .call method of the object object.

// The benefit is that it allows us to pass what the 'this' keyword should point to as the first parementer,
// followed by any other parameters.

// The different between .bind and .call is that .call simply executes the function, it doesn't make a copy of it.

logName.call(person, 'en', 'es');

// -----------------------------------------------

// ---- apply ----

logName.apply(person, ['en', 'es']);

// The only difference between .call and .apply is that .apply expects us to pass parameters in an array.

// This can be useful in certain circumstances, like when we are working with maths.

(function(lang1, lang2) {

	console.log('Logged: ' + this.getFullName());
	console.log('Arguments: ' + lang1 + ' ' + lang2);
	console.log('--------');

}).apply(person, ['en', 'es']);

// Here we create a function on the fly and invoke it using the .apply method, set this to person and 
// pass in two parameters in an array.


// -----------------------------------------------


// function borrowing

var person2 = {
	firstname: 'Jane',
	lastname: 'Doe'
};

console.log(person.getFullName.apply(person2));

// What we have done here is demonstrate function borrowing.

// We have created a new person2 object, and then we access the getFullName method of 
// our original person object, but use the .apply method to 'borrow' the function and use
// it on our new object.


// -----------------------------------------------

// function currying

function multiply(a, b) {
	return a*b;
}

var multiplyByTwo = multiply.bind(this, 2);

console.log(multiplyByTwo(10));

// Function currying is a way of using .bind to make a copy of a function we have already made
// but set a default value to one or more of the parameters.