function greet(firstname, lastname, language) {

	languages = language || 'en';

	if (language == 'en') {
		console.log('Hello ' + firstname + ' ' + lastname);
	}

	if (language == 'es') {
		console.log('Hola ' + firstname + ' ' + lastname);
	}
}

function greetEnglish(firstname, lastname) {
	greet(firstname, lastname, 'en');
}

function greetSpanish(firstname, lastname) {
	greet(firstname, lastname, 'es');
}

greetEnglish('John', 'Doe');
greetSpanish('John', 'Doe');

/*

The above approach is one simple pattern we can use to simplify function calls.

It is commmonly used in frameworks and libraries to make it simple to see what is going on.

We have seperated the logic into our 'greet' function and then made two other functions that default the 'language' parameter to 
either 'en' for english or 'es' for spanish, which is then passed into our greet function.

This means we don't have to continually pass in the language to our function calls, but instead use one of the two seperate functions,
which takes care of it for us.

*/