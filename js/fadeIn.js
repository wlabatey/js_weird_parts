$(document).ready(function() {

	var $pageItems = $('section').add('footer');

	console.log($pageItems);

	$pageItems.hide().each(function(index) {

		$(this).delay(500 * index).fadeIn(1000);

	});
});

