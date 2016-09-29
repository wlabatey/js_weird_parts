console.log(3 < 2 < 1);

/*

Coercion can cause some surprising results & problems which are hard to debug.

Comparison operators should be used with care. 

Always use the strict variations by default rather than the standard types which coerce values.

*/

var a = 0;
var b = false;

if (a === b) {
	console.log("They are equal!");
} else {
	console.log("Nope, not equal!");	
}