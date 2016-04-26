function test(test1) {
	console.log(test1);
}

test.object = {
	property1: "hmmm",
	property2: "this is two"
};

console.dir(test);
console.log(test.object);