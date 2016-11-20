function sayHiLater() {

	var greeting = 'Hi';


	// The below is an example of a callback function. 

	// We pass in a function to the setTimeout function, which is then 'called back'
	// after the setTimeout function is finished.

	// The function you call/invoke 'calls back' the function you gave it when it finishes.


	setTimeout(function() {

		console.log(greeting);

	}, 3000);
}

sayHiLater();

// jQuery uses function expressions and first-class functions!

// The click function accepts another function which we pass it, which is then executed.

// $("button").click(function(){

// });

function tellMeWhenDone(callback) {

	console.log("I am done.");

	callback(); // the 'callback', it runs the function we pass to it.

}

tellMeWhenDone(function() {

	console.log('I am also done.');

});