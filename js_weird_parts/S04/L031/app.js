var Tony = { 
	firstname: 'Tony',
	lastname: 'Alicea',
	address: {
		street: '111 Main St.',
		City: 'New York',
		State: 'NY'
	}
};

function greet(person) {
	console.log('Hi ' + person.firstname);
}

greet(Tony);

greet({ 
	firstname: 'Mary',
	lastname: 'Doe'
});

/*

In JavaScript, object literal syntax is generally preferred to the object construtor function.

It is much quicker to write, performs slightly better and is much easier to read.

Object literal syntax also allows us to create new objects on the fly, as in line 17.

*/