function b() {
	var myVar;
	console.log(myVar);
}

function a() {
	var myVar = 2;
	console.log(myVar);
	b();
}

var myVar = 1;
console.log(myVar);
a();

console.log(myVar);

/*

What we can expect to see in the console here is the following:

1
2
undefined
1

-----

-> This is because each function has it's own execution context and variable scope 

	which is seperate from the global execution context.

-> Therefore, when we first define myVar = 1, it is set in the global execution context 

	and attached to the global object (window.myVar).

-> When we invoke the function a(), a new execution context is created and added to

	the 'execution stack', with it's own variable scope that is seperate from the global one.

	So another variable is created and defined as 2.

-> Then b() is invoked and a third execution context is created and again added to the stack.

	myVar is again created but left undefined.

-> Lastly, to prove we haven't changed the global 'myVar', we log it again to see it is still 1.


*/