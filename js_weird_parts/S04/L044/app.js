
function greet(name) {				// function statement

	console.log('Hello ' + name);

}
greet('John');

var greetFunc = function(name) { 	// using a function expression

	console.log('Hello ' + name);

};
greetFunc('John');


console.log('------------');

var greeting = function(name) { 	// Using an Immediately Invoked Function Express (IIFE)

	return('Hello ' + name);

}('Joe'); 		// we invoke it immediately by using the parenthesis at the end of it, and pass it the name argument 'Joe'.

console.log(greeting);

/*

An IIFE (immediately invoked function expression) allows us to create a function on the fly and invoke it immediately
after creating it.

We then return the result to the variable 'greeting'.

*/

(function(name) {							// Another common example of an IIFE. We wrap the function in parenthesis
											// to trick the syntax parser, as this is not a function statement but
	var greeting = 'Inside IIFE: Hello';	// a function expression.
	console.log(greeting + ' ' + name);

}('Will'));									// We then use parenthesis at the end to invoke it & pass arguments to it.