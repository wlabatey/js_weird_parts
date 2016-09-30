var objectLiteral = {
	firstname: "Mary",
	isAProgrammer: true
};

console.log(objectLiteral);

console.log(JSON.stringify(objectLiteral));

var jsonValue = JSON.parse( '{ "firstname": "Mary", "isAProgrammer": true } ' );

console.log(jsonValue);

/*

JSON is Javascript Object Notation.

It is inspired by the object literal syntax from Javascript. It is not completely identical,
as JSON is a little bit stricter in its syntax.

JSON is so widespread now that javascript has some inbuilt functions to convert objects into
JSON strings and to parse JSON strings into objects.

*/