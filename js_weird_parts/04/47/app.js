function buildFunctions() {

	var arr = [];

	for (var i = 0; i < 3; i++) {

		arr.push(
			function() {
				console.log(i);
			});
	}

	return arr;
}

var fs = buildFunctions();

console.log(fs);

fs[0]();
fs[1]();
fs[2]();

function buildFunctions2() {

	var arr = [];

	for (var i = 0; i < 3; i++) {

		arr.push(

			(function(j) {
				return function() {
					console.log(j);
				};
			}
			(i)));
	}

	return arr;
}

var fs2 = buildFunctions2();

// console.dir(fs); 
console.log(fs2);

fs2[0]();
fs2[1]();
fs2[2]();



