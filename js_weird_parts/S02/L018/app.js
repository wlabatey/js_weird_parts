// long running function
function waitThreeSeconds() {
	var ms = 3000 + new Date().getTime();
	while (new Date() < ms){}
	console.log('finished function');
}

function clickHandler() {
	console.log('click event!');
}

// listen for the click event
document.addEventListener('click', clickHandler);

waitThreeSeconds();
console.log('finished execution');

/*

Javascript is synchronous, this means it runs one line of code at a time.

The way it processes events is by having a seperate event queue which is 
processed only once the execution stack is empty.

This means that in the above example, if the user clicks the screen while
the waitThreeSeconds() function is running, it will not be processed until
after the function has run and the global execution context has finished running.

*/