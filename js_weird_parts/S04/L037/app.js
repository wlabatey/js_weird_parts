console.log(this);

function a() {
	console.log(this);
	this.newVariable = 'hello';
}

var b = function() {
	console.log(this);
};

a();

console.log(newVariable);

b();

/*

In the above function statement & function expression, the this keyword is still pointing to the global object 'window'.

This is because we haven't assigned it to anything else.

So, when we assign this.newVariable = 'hello' inside of function a(), it is actually being attached to the window object 
and intruding on the global namespace. This is can cause a lot of problems if you don't know it is happening.

*/

var c  = {
	name: 'The c object',
	log: function() {
		var self = this; 

		/*

		The above self = this; pattern is a quite useful way to get around the sometimes odd way javascript assigns 'this'.

		self = this; will create a reference to where 'this' is current pointing (the object we are inside of) and then
		we can use self instead of this to be sure we are still referencing the current object.

		Otherwise, if we try to use 'this' inside the below function expression, javascript points it to the global object again!	

		This will be relieved somewhat by the 'let' keyword in ES6 which creates block scoping for variables.

		*/

		self.name = 'Updated c object';
		console.log(this);	// In this case, the this keyword points to the object that the method (function) is sitting inside of.

		var setname = function(newname) {
			self.name = newname;
		};

		setname('Updated the c object again!');

		console.log(self);

	}
};

c.log();