// Greetr.js
// by Will Batey - 24/11/16
//
// Requirements:
//
// - When given a firstname, lastname and optional languages, it generates formal and informal greetings.
// - Support English & Spanish
// - Reusable library/framework
// - Easy to Type 'G$()' structure



// IIFE used to safe guard our code from the outside world.
// We pass in global & jQuery parameters.

(function(global, jQuery) {


	// As seen in jQuery, our main Greetr function simply returns
	// a new object created with Greetr.init.

	// This saves us from having to use 'new' all the time when using Greetr.

	var Greetr = function(firstName, lastName, language) {
		return new Greetr.init(firstName, lastName, language);
	};

	var supportedLangs = [ 'en', 'es'];

	var greetings = {
		en: 'Hello',
		es: 'Hola'
	};

	var formalGreetings = {
		en: 'Greetings',
		es: 'Saludos'
	};

	var logMessages = {
		en: 'Logged in',
		es: 'Inicio sesion'
	};

	// Our Greetr prototype. This is where our methods and properties will live.
	Greetr.prototype = {

		fullName: function() {
			return this.firstName + ' ' + this.lastName;
		},

		validate: function() {
			if (supportedLangs.indexOf(this.language) === -1) {
				throw this.language + " is an invalid language";
			} else {
				console.log("'"+this.language+"'" + " is a supported language.");
			}
		},

		greeting: function() {
			// if (greetings[this.language] === undefined) {
			// 	throw this.language + " is an invalid language";
			// } else {
				return greetings[this.language] + ' ' + this.firstName + '!';
			// }
		},

		formalGreeting: function() {
			return formalGreetings[this.language] + ', ' + this.fullName();
		},

		greet: function(formal) {
			var msg;

			// if undefined or null it be coerced to 'false'
			if (formal) {
				msg = this.formalGreeting();
			} else {
				msg = this.greeting();
			}

			if (console) {
				console.log(msg);
			}

			// 'this' refers to the calling object at execution time
			// it will make the method chainable.
			return this;
		},

		log: function() {
			if (console) {
				console.log(logMessages[this.language] + ': ' + this.fullName());
			}

			return this;
		},

		setLang: function(newLang) {
			this.language = newLang;
			console.log("Language changed to " + "'"+newLang+"'");
			this.validate();

			return this;
		}
	};

	// Greetr.init function constructor.

	var init = Greetr.init = function(firstName, lastName, language) {

		var self = this;
		self.firstName = firstName || ''; 
		self.lastName = lastName || '';
		self.language = language || 'en';

		return self;

	};

	// Set the prototype of the objects created from our Greetr.init 
	// function constructor to the Greetr.prototype object
	Greetr.init.prototype = Greetr.prototype;

	// Expose the Greetr object to the global object for use.
	global.Greetr = global.G$ = Greetr;


// Invoke Greetr and pass in 'window' as our global parameter and  a reference to jQuery.
})(window, jQuery);