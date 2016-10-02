// IIFE

(function(global, name) {

	var greeting = 'Hello';
	
	// global.greeting = 'Hello';				
	// If required, we can intentionally reference & modify the global object like this.
	
	console.log(greeting + ' ' + name);		

}(window, 'Will'));

console.log(greeting);

/*

The reason Immediately Invoked Function Expressions are so useful and so commonly used,
is that they allow us to create a new execution context with its own limited variable scope.

This means we protect the code in our IIFE from colliding with anything in the global execution context.

This is very common with JS frameworks.

*/