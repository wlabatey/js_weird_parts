// Deep Dive Into jQuery source code

var q = $("ul.people li");

console.log(q); // Returns an object of the type 'jQuery.fn.init'.
				// The __proto__ of this object contains all the methods and properties of jQuery.