;(function() {

	var me = G$('Will', 'Batey');

	// listen to click on #login

	// get value from option dropdown 'en' or 'es'.

	// set text of h1 using .updateElement on #greeting

	var loginButton = document.getElementById('login');
	var languageOption = document.getElementById('lang');
	var formality = document.getElementById('formal');
	var selectedLanguage;
	var selectedFormality;

	loginButton.addEventListener("click", function() {

		selectedLanguage = languageOption.value;
		selectedFormality = formality.value;
		// console.log(selectedFormality);
		// console.log(me);
		// console.log(me.language);
		me.setLang(selectedLanguage).updateElement("#greeting", selectedFormality).log();

	}, false);

})();

