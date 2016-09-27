function b() {
	console.log(myVar);
}

function a() {
	var myVar = 2;
	b();
}

var myVar = 1;
a();

/*

In the above example, the result of console.log(myVar) from function b() will result in a 1.

This is because when a variable cannot be found in the current execution context, JavaScript will
then look at the outer lexical environment to check for variables there.

This is known as the scope chain.

*/


// Helper function to repeat a string 'str' by 'n' times

function repeat(str, n) {

	// Create an array of length n+1 and use .join to seperate the elements by the specified character. 	
	return Array(n+1).join(str);
}

console.log(repeat('-', 10));



/*

In the below example, because function d() is sitting lexically within function c(), the reference to the outer 
environment is function c(), so the result of console.log(myVar2) is 2.

Where something sits lexically is an easy way to figure out how something will be found in the scope chain.

*/


function c() {

	function d() {
		console.log(myVar2);
	}

	var myVar2 = 2;
	d();

}

var myVar2 = 1;
c();