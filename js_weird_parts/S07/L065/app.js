// Initialization

var people = [
	{
		firstname: 'John',
		lastname: 'Doe',
		addresses: [
			'111 Main Street',
			'222 Third Street',
			]
	},
	{
		firstname: 'Jane',
		Lastname: 'Doe',
		addresses: [
			'333 Main Street',
			'444 Fifth Street'
		],
		greet: function() {
			return 'Hello '  + this.firstname;
		}
	}
];

console.log(people);

var hello = people[1].greet.bind(people[0]);
var helloJane = people[1].greet.bind(people[1]);

console.log(people[1].greet()); // "Hello Jane"

console.log(helloJane()); // "Hello Jane"

console.log(people[1].greet.call(people[0])); // "Hello John"

console.log(hello()); // "Hello John"