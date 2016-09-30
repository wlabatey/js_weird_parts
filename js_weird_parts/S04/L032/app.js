var greet = "Hello!";
var greet = 'Hola';

console.log(greet);

var english = { 
	greetings: { 
		basic: 'Hello!'
	}
};

var spanish = {};

spanish.greet = "Hola!";

console.log(english);

/* Framework Aside - Faking namespaces

	In many Javascript and many of it's popular frameworks, we can 'fake'
	name spaces by using objects to contain our key/value pairs and 
	reference them as above.

	This allows us to ensure we won't overwrite previously assigned variables &
	also to replicate the 'namespaces' of other programming languages.


*/
