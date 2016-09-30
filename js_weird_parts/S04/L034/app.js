function greet() {
	console.log('hi');
}

greet.language = 'english';

console.log(greet);
console.log(greet.language);


/*

JavaScript is a language that has first class functions.

In JavaScript, functions ARE objects.

This means that everything you can do with other types, you can do with functions.

You can assign functions to variables, pass them around and create them on the fly.

First class functions change the way you program. They open up the possibility of completely
different solutions to problems.

-----

Because functions are objects, you can attach primitive types, object and other functions to them.

They also have other special properties, such as its name (which is optional) and its code property, 
which is where the actual code of the function sits in the function object.

*/