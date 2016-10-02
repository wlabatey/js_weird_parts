function getPerson() {

	return {				// It's important to note that, in javascript
		firstname: 'Tony'	// if you do not input semicolins, it will try to automatically insert them.
	
	};						// This can cause unexpected problems, especially with return statements like this one.

}							// Always be sure to input all semicolons and never leave them out.

console.log(getPerson());	// And be very careful with return statements and using whitespace around them,
							// as Javascript will automatically insert a semicolon if it sees a carriage return after a return statement.