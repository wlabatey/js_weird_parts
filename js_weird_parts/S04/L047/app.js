function buildFunctions() {

	var arr = [];

	for (var i=0; i<3; i++) {

		arr.push(
				function() {
					console.log(i);
				}				
		);
	}

	return arr;
}

