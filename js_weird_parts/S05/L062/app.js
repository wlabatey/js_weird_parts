Array.prototype.myCustomFeature = 'cool!';

var arr = ['John', 'Jane', 'Jim'];

var checkArrayProps = function(arrayToCheck) {
	for (var prop in arrayToCheck) {
		console.log(prop + ': ' + arrayToCheck[prop]);
	}
};

checkArrayProps(arr); // This will also log 'myCustomFeature: cool!' as well as John, Jane and Jim.

console.log(arr);


var arr2 = new Array('John', 'Jane', 'Jim');

console.log(arr2);

checkArrayProps(arr2);

// Do not use 'for in' loops with Arrays. As demonstrated in this example, properties added to the array .property
// will also be iterated over, as well as the array items.