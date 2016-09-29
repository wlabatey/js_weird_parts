var a;

// goes to internet and looks for a value

a = 0;

if (a || a === 0) {
	console.log("Something is there.");
} else {
	console.log("Nothing there.");
}

/*

Coercion can be useful when checking for existence, as in the above example

If the variable 'a' exists, it will be coerced to true and the respective branch  of the if statement will run.

If there is a chance that it will equal '0', we can make sure that the correct branch will run by using the logical OR operator,
which will check if a exists OR if a is equal to 0. 

*/