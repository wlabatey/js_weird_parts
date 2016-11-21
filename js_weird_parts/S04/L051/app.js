// Functional programming in JavaScript

function mapForEach(arr, fn) {

	// console.log(fn);

	var newArr = [];

	for (var i=0; i < arr.length; i++) {
		newArr.push(
			fn(arr[i])
			);
	}
	return newArr;
}

var arr1 = [1,2,3];
console.log(arr1);

// var arr2 = [];
// for (var i=0; i<arr1.length; i++) {
// 	arr2.push(arr1[i]*2);
// }


var arr2 = mapForEach(arr1, function(item) {
	return item * 2;
});

console.log(arr2);

var arr3 = mapForEach(arr1, function(item) {
	return item > 2;
});

console.log(arr3);

// -----------------------------------------------

var checkPastLimit = function(limiter, item) {
	return item > limiter;
};

var checkPastLimitOfOne = checkPastLimit.bind(this, 1);

// console.log(checkPastLimit);
// console.log(checkPastLimitOfOne);

var arr4 = mapForEach(arr1, checkPastLimitOfOne);

console.log(arr4);


// -----------------------------------------------

/*

What we are doing in the above example is using .bind to make a copy of the
function object 'checkPastLimit', but presetting the limiter value to 1 and then passing
this copy of the function object into our mapForEach function.

As demonstrated below, we can simplify this even further to avoid having to constantly use
.bind every time we want to do this.

*/

// -----------------------------------------------


var checkPastLimitSimplified = function(limiter) {
	
	return function(item) {

		return item > limiter;
	};
};

// console.log(checkPastLimiter);

var arr5 = mapForEach(arr1, checkPastLimitSimplified(1)); //checkPastLimiter(2)); 

console.log(arr5);

// -----------------------------------------------


/*

What we have done above is create a function factory.

We call the outer function 'checkPastLimiter' and set the limiter parameter to 1.

This then returns the inner annonymous function object, which is passed to our mapForEach function. checkPastLimiter is now finished.

Our inner annonymous function is then executed on line 11 and is passed the current array index as the 'item'.

Notice that we rely on the closure from the inner annonymous function to access the 'limiter' parameter, 
as it is not defined in the inner function.

*/


// -----------------------------------------------


/*

What we started out with was the code on lines 18-21. This was doing all of the work in taking our 
original array, iterating over it in a for loop, then returning the doubled result to our second array.

This is a lot of work & we don't want to have to repeat this.

In JavaScript we can break this up and do it a better way, which is by dividing it up into seperate functions
and passing one into the other. We can reuse these functions later if we need to.

So, we have created the main function mapForEach that does the work of iterating over an array that we pass to it and then pushing
the result of another function we pass to it into the new array (lines 8-10). It then returns the new arary.

What this does is create a useful function that performs a lot of work, but lets us specify what we want to do with the item at
each array index by passing in another function of our choice to it.

*/


