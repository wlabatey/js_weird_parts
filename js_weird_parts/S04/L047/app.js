function buildFunctions() {

	var arr = [];

	for (var i=0; i<3; i++) {

		arr.push(
				function() {
					console.log(i);
				}				
		);
	}

	return arr;
}

var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();

console.log('----------');

console.log(fs);

console.log('----------');

/*

In this example, the result of our 3 function calls on lines 19-21 are all 3.

This is again due to closures.

What happens is that buildFunctions() creates the array 'arr' and pushes the function objec on lines 8-10 to it, three times.

The array is returned and then assigned to the variable fs on line 17.

On line 19-21, we invoke the annonymous functions we pushed to each index of the array.

All three look for the variable 'i' but can't find it in the current execution context, so each of them look at their outer reference
and find it as '3' in the buildFunction() execution context, because this is the last value it was set to by our 
for loop before it stopped running.

*/

function buildFunctions2() {

	var arr = [];

	for (var i=0; i<3; i++) {
		let j = i;				// In ES6 we can use 'let j = i' to create a block scoped
		arr.push(				// variable that is assigned to a new spot in memory each time.
				function() {	// This results in the expected result of 0, 1, 2 when we call the functions
					console.log(j);	// on line 62, 63 & 64 below.
				}				
		);
	}

	return arr;
}

var fs2 = buildFunctions2();

fs2[0]();
fs2[1]();
fs2[2]();

console.log('----------');

console.log(fs2);

console.log('----------');


function buildFunctions3() {

	var arr = [];

	for (var i=0; i<3; i++) {

		arr.push(							// In ES5 we can get the desired outcome by creating an 
				(function(j) {				// IIFE and passing the variable 'i' to it each time the loop is run
					return function() {		// while returning the inner function to our array.
						console.log(j);	
					};						// This then creates three seperate execution contexts with individual
				}(i))						// references to the variable i, each time the loop is run.
		);
	}

	return arr;
}

var fs3 = buildFunctions3();

fs3[0]();
fs3[1]();
fs3[2]();

console.log('----------');

console.log(fs3);

console.log('----------');
