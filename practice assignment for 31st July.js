var age = 19;
var canDrive = age > 16 ? 'yes' : 'no';

function foo(bar) {
  bar = typeof(bar) !== 'undefined' ? bar : 10;
  console.log(bar);
}
foo();
foo(20);

var authenticated = true;
var nextURL = authenticated ? (
  console.log('You will redirect to admin area'),
  '/admin'
) : (
  console.log('Access denied'),
  '/403'
);
console.log(nextURL);

var locked = 1;
var canChange = locked != 1;

var speed = 90;
var message = speed >= 120 ? 'Too Fast' : (speed >= 80 ? 'Fast' : 'OK');
console.log(message);




