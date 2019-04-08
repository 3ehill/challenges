// Fizz Buzz Solution

for (var i = 1; i <= 100; i++) {
  var a = i % 3 == 0, b = i % 5 == 0;
  console.log(a ? b ? "FizzBuzz" : "Fizz" : b ? "Buzz" : i);
}