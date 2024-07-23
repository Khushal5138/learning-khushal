// Currying example : 
function multiply(a, b, c) 
{
    return a * b * c;
}

function multiply_curried(a) 
{
    return function(b) 
    {
        return function(c) {
            return a * b * c;
        }
    }
}

let res1 = multiply(1, 2, 3);
console.log(res1); // Output: 6

let mc1 = multiply_curried(1);
let mc2 = mc1(2);
let res2 = mc2(3);
console.log(res2); // Output: 6

let res3 = multiply_curried(1)(2)(3);
console.log(res3); // Output: 6


// Currying example using arrow functions from basic2.js
let multiply_arrow = (a, b, c) => {
    return a * b * c;
}

let multiply_curried_arrow = (a) => (b) => (c) => {
    return a * b * c;
}

let res4 = multiply_arrow(1, 2, 3);
console.log(res4); // Output: 6

let res5 = multiply_curried_arrow(1)(2)(3);
console.log(res5); // Output: 6


// Context manipulation examples using call, apply, and bind
let human = { name: 'JC' };

function sayName(greeting) 
{
    console.log(greeting + ' ' + this.name);
}

sayName.call(human, 'Hi!'); // Outputs Hi! JC

sayName.apply(human, ['Hello!']); // Outputs Hello! JC

let greet = sayName.bind(human);
greet('Hey!'); // Outputs Hey! JC

var func1 = function() 
{
    console.log(this);
}.bind(1);
func1(); // Outputs Number {1}

var func2 = function() 
{
    console.log(this);
}.bind(1);
var obj = {
    callFun: func2
};
obj.callFun(); // Outputs Number {1}

function checkFun(a, b, c) 
{
    console.log(this);
    console.log(a);
    console.log(b);
    console.log(c);
}
checkFun.call(1, 2, 3); // Outputs Number {1} 2 3

function sumOfNumbers() 
{
    var total = 0;
    for (var i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}
var sum1 = sumOfNumbers(1, 2, 3);
console.log(sum1); // Output: 6

var sum2 = sumOfNumbers.call(null, 1, 2, 3);
console.log(sum2); // Output: 6

var numbers = [1, 2, 3];
var sum3 = sumOfNumbers.apply(null, numbers);
console.log(sum3); // Output: 6

"use strict";
var zipcode = {
    checkZipcode: function() {
        console.log(this);
        function updateZipCode() {
            console.log(this);
        }
        updateZipCode.call(this);
    }
}
zipcode.checkZipcode(); // Outputs Object {checkZipcode: ƒ}

"use strict";
var zipcode2 = {
    checkZipcode: function() {
        console.log(this);
        var updateZipCode = function() {
            console.log(this);
        }.bind(this);
        updateZipCode();
    }
}
zipcode2.checkZipcode(); // Outputs Object {checkZipcode: ƒ}

"use strict";
var person = {
    name: "Jack",
    prop: {
        name: "Daniel",
        getName: function() {
            return this.name;
        }
    }
}
var name1 = person.prop.getName.bind(person);
console.log(name1()); // Output: Jack

var name2 = person.prop.getName();
console.log(name2); // Output: Daniel



// Recursion


function log(num)
{
    if(num > 5)
    {
        return;
    }
    console.log(num);
    log(num + 1);
}
log(1);

for(let i = 1; i <= 5; i++)
{
    console.log(i);
}

function randomUntilFive(result = 0, count = 0)
{
    if(result === 5)
    {
        console.log(`The random result: ${result}`);
        console.log(`How many times random is executed: ${count}`);
        return;
    }
    result = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    count++;
    randomUntilFive(result, count);
}
randomUntilFive();

let result = 0;
let count = 0;
while(result !== 5) 
{
    result = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    count++;
}
console.log(`The random result: ${result}`);
console.log(`How many times random is executed: ${count}`);

function factorial(num)
{
    if(num === 1)
    {
        return num;
    }
    return num * factorial(num - 1);
}
console.log(factorial(5));

function randomUntilFiveRead(result = 0, count = 0)
{
    if(result === 5)
    {
        console.log(`The random result: ${result}`);
        console.log(`How many times random is executed: ${count}`);
        return;
    }
    result = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    count++;
    randomUntilFiveRead(4);
}

function factorialWrite(num)
{
    if(num === 1){
        return num;
    }
    return num * factorialWrite(num - 1);
}
console.log(factorialWrite(5));

