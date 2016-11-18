// This is a function statement
function greet() {
	console.log('hi');
}

greet();

// This is an annonymous function expression. They are not hoisted like function statements!
var anonymousGreet = function() {
	console.log('hi');
};

anonymousGreet();

function log(a) {
	a();
}

log(function() {
	console.log("hi");
});

log(function() {
	a = { 
		message: 'hi',
		second: {
			message: 'hello',
			third: {
				message: 'hola'
			}
		} 
	};
	console.log(a.second.third.message);
});

/*

Expression:
A Unit of code that results in a variable. It doesn't have to save to a variable.

Statement:
A unit of code that just does work but dosn't return a value, e.g. an if statement.

In JavaScript we have function expressions and function statements.

Javascript is a functional programming languages, with first class functions. Functions
can be passed around like variables or objects.

*/