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

;(function(global, jQuery) {


	// As seen in jQuery, our main Greetr function simply returns
	// a new object created with Greetr.init.

	// This saves us from having to use 'new' all the time when using Greetr.

	var Greetr = function(firstName, lastName, language) {
		return new Greetr.init(firstName, lastName, language);
	};

	// an array with our supported languages

	var supportedLangs = [ 'en', 'es'];

	// an object with our greetings

	var greetings = {
		en: 'Hello',
		es: 'Hola'
	};

	// another object with our formal greetings

	var formalGreetings = {
		en: 'Greetings',
		es: 'Saludos'
	};

	// another object with our log messages

	var logMessages = {
		en: 'Logged in',
		es: 'Inicio sesion'
	};

	// Our Greetr prototype. This is where our methods and properties will live.
	Greetr.prototype = {

		// returns our Greetr object's first and last name

		fullName: function() {
			return this.firstName + ' ' + this.lastName;
		},

		// checkes to see if the language supplied is contained within our supportedLangs array

		validate: function() {
			if (supportedLangs.indexOf(this.language) === -1) {
				throw this.language + " is an invalid language";
			} else {
				console.log("'" + this.language + "'" + " is a supported language.");
			}
		},

		// returns greeting in specified language along with the first name

		greeting: function() {
			// if (greetings[this.language] === undefined) {
			// 	throw this.language + " is an invalid language";
			// } else {
				return greetings[this.language] + ' ' + this.firstName + '!';
			// }
		},

		// returns formal greeting in specified language and the full name.

		formalGreeting: function() {
			return formalGreetings[this.language] + ', ' + this.fullName();
		},


		// test function. Logs either greeting or formal greeting to console.

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

		// Uses jquery selector to update element's text content to greeting.

		// Accepts a jQuery selector and true/false parameter for formal greeting.

		updateElement: function(selector, formal) {

			// HANDLE: $(""), $(null), $(undefined), $(false)

			if (!selector) {
				throw 'Missing jQuery selector';
			}

			// Throw error if jQuery not loaded.

			if (!$) { 
				throw 'jQuery not loaded';

			}

			// Check if selector is a string

			if (typeof selector === "string" ) {

				// get jQuery.length property - 
				//								0 = nothing selected 
				//								1 = single element
				//								2+ = nodelist
				//
				// If more than one element selected, we only use the first.
				
				var selectorLength = $(selector).length;

				var greetFormality = formal === "true" ? this.formalGreeting() : this.greeting();

				// console.log(formal);

				// If we have one item selected, use jQuery to change text to greeting

				if ( selectorLength === 1) {
					// if (formal === "true") {
					// 	$(selector).text(this.formalGreeting());
					// }
					// else {
					// 	$(selector).text(this.greeting());
					// }

							// Better way to write this... Use ternary operator above.

							$(selector).text(greetFormality);

				}

				// If we have more than one, only change the first item selected.

				if (selectorLength > 1){
				// 	if (formal === "true") {
				// 		$(selector)[0].text = this.formalGreeting();
				// 	}
				// 	else {
				// 		$(selector)[0].text = this.greeting();
				// 	}

						$(selector)[0].text = greetFormality;


				}  	

			return this;

			}

			// If not a string, throw an error.

			else {
				throw selector + " is not a valid selector. Please enter a valid jQuery selection as a string.";
			}

		},

		// Log to console with specified language and the full name.

		log: function() {
			if (console) {
				console.log(logMessages[this.language] + ': ' + this.fullName());
			}

			return this;
		},

		// Change the language property of our greetr object.

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

		self.validate();

	};

	// Set the prototype of the objects created from our Greetr.init 
	// function constructor to the Greetr.prototype object
	Greetr.init.prototype = Greetr.prototype;

	// Expose the Greetr object to the global object for use.
	global.Greetr = global.G$ = Greetr;


// Invoke Greetr and pass in 'window' as our global parameter and  a reference to jQuery.
})(window, jQuery);