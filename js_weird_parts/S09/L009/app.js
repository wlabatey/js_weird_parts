/* The global object in the browser is the 'window' object. 

 It can be different if javascript is being run on the server, like NodeJS.

 'this' is set to the global object by default.

*/

var a = "Hello world";

function b() {



}

/* When you run Javascript, an execution context is created.

	At the base level, when you define variables outside of a function (in the global execution context) 

	they get attached to the global object.

*/