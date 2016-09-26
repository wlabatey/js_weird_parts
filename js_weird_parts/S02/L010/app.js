b(); 
console.log(a);

/*

In Javascript, when the execution context is created (the creation phase), 

memory space is set aside for variables and functions

so that we can access them before they are created.


-------


Functions are hoisted in their entirety, but variables are only defined in the execution phase,

therefore we should not rely on hoisting at all as it can result in odd behaviour.

e.g. console.log(a); would result in 'undefined' but b(); would run correctly.

*/


var a = "Hello world";

function b() {
	console.log("Called b!");
}

