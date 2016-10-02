var arr = [
	1,
	false,
	{
		name: 'Tony',
		address: '111 Main St.'
	},
	function(name) {
		var greeting = 'Hello ';
		console.log(greeting + name);
	},
	"hello"
];

console.log(arr);
arr[3](arr[2].name);

/*

Arrays in JavaScript can contain anything, which can result in some terse lines of code line line 16.

This is a useful aspect of JavaScript's dynamic typing and can be very useful.

*/