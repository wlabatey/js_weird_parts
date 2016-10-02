// Closures

function greet(whattosay) {

	return function(name) {
		console.log(whattosay + ' ' + name);
	};

}

 var sayHi = greet('Hi');

 sayHi('Will');

 /*

Closures allow functions inside of other functions to have access to the actual variables in the outer function,
even after the outer functions have completed running.

This is why in the above example, our function sayHi(); has access to the whattosay variable, even after the greet()
function has returned the inner annonymous function and it's execution context has finished running.

The sayHi() execution context still contains a reference to it's outer environment and because of closure, it will
still find the whattosay variable there.

In normal circumstances, the javascript engine will clean out the memory space of past execution contexts. This
is called garbage collection.

 */