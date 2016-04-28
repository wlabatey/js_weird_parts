// function statement

function greet(name) {
	console.log('Hello ', name);
}

greet('Will');

// function expression

var greetFunc = function(name) {
	console.log('Hello ', name);
};

greetFunc('Will');

// immediately invoked function express (IIFE)
// See the parenthesis at the end? That invokes it immediately after it is created.

var greeting = function(name) {
		return 'Hello ' + name;
}('Will');

console.log(greeting);


// Another way of writing an IIFE
// Wrap the function with brackets (so as not to make the syntax parser think it's a function statement)

// Then add parenthesis at the end to invoke it immediately.

var firstname = 'John';

(function(name) {
	var greeting = 'Hello';
	console.log(greeting + ' ' + name);
}(firstname));