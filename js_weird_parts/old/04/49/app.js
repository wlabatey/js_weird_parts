function sayHiLater() {

	var greeting = "Hi!";

	setTimeout(function() {

		console.log(greeting);

	}, 3000);

}

sayHiLater();

// jQuery uses function expressions and first-class functions!
// $("button").click(function() {

// });

function tellMeWhenDone(callback) {

	var a = 1000; // some work
	var b = 1000; // some work

	console.log(a, b);

	setTimeout(function() {

		callback();

	}, 3000);
}

tellMeWhenDone(function(){

	console.log('I am done!');

});

tellMeWhenDone(function() {

	console.log('I am done too!');

});