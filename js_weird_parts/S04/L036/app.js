// by value (primitives)

var a = 3;
var b;

b = a;
a = 2;

console.log(a);
console.log(b);


// by reference (all objects (including functions))

var c = { greeting: 'hi' };
var d;

d = c;
c.greeting = 'hello'; // mutate

console.log(c);
console.log(d);

// by reference (even as parameters)



/*

In JavaScript, primitive values (numbers, strings, Booleans, Undefined & Null) are set by value.

This means that on line 3 & 4, when we set variable b = a, we are actually creating another space in memory that has the same value.

By contrast, objects and functions are set by reference, which means that on line 18, when we set d = c, we are pointing
to the same memory space as c. If we make any changes, or 'mutate', variable c, it will also apply to d. 

*/