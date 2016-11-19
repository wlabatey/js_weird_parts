function greet(firstname, lastname, language, ...other) {

	language = language || 'en';

	if (arguments.length === 0) {	
		console.log("Missing parameters!");
		console.log('-------');
		return;
	}

	console.log(firstname);
	console.log(lastname);
	console.log(language);
	console.log(arguments);
	console.log('-------');

}

greet();
greet('John');
greet('John', 'Doe');
greet('John', 'Doe', 'es');
greet('John', 'Doe', 'es', 'stuff1', 'stuff2');

/*

'arguments' is an Array-like object corresponding to the arguments passed to a function.

We can use this to check what has been passed to the function and check the length.

In ES6, we can use '...theRest' spread parameter to represent an indefinite number of arguments as an array. 

*/