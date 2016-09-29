function greet(name) {
	name = name || "<Your name here>";
	console.log('Hello ' + name);
}

greet('Will');
greet();


/*

In ES6, there is now a better way to set default parameters. See here: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Default_parameters

We can use the logical OR operator || to set a default value for a variable, as above.

This is because the logical OR operator is just a function (as we learned in the last video),
and what it does is return the value that would have been coerced to true.

undefined is coerced to false and a string or value (not 0) will be coerced to true and thus returned.

*/