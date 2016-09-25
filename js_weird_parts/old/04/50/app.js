var person = {
	firstname: "Will",
	lastname: "Batey",
	getFullName: function() {

		var fullname = this.firstname + ' ' + this.lastname;
		return fullname;

	}
};

var logName = function(lang1, lang2) {

	lang1 = lang1 || 'en';
	lang2 = lang2 || 'es';
	console.log('Logged: ' + this.getFullName());
	console.log('Arguments: ' + lang1 + ' ' + lang2);
	console.log('-------------');

};

var logPersonName = logName.bind(person);

logPersonName('en');

logName.call(person, 'en', 'es');

logName.apply(person, ['en', 'es']);

var langArray = ['en', 'es'];

logName.apply(person, langArray);

(function(lang1, lang2) {

	console.log('Logged: ' + this.getFullName());
	console.log('Arguments: ' + lang1 + ' ' + lang2);
	console.log('-------------');

}).apply(person, ['en', 'es']);

// function borrowing

var person2 = {
	firstname: 'Jane',
	lastname: 'Doe'
};

console.log(person.getFullName.apply(person2));

// function currying

function multiply(a, b) {
	return a * b;
}

var multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(2));

var multiplybyThree = multiply.bind(this, 3);
console.log(multiplybyThree(2));