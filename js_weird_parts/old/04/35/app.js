// function statement. It just does work, it does not return a value

greet();

function greet() {
	console.log('hi');
}

// below is a function expression

var anonymousGreet = function() {
	console.log('hi');
};

function log(a) {
	a();
}

log(function() {
	console.log('hi');
});