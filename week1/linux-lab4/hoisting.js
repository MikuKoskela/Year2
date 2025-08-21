// 1.
const cube = function(x) {
  return x * x * x;
}

// 2.
const fullName = function(first, last) {
  return first + " " + last;
}

// 3.
const power = function(base, exp) {
  if (exp === 0) {
    return 1;
  }
  return base * power(base, exp - 1);
}

// 4.
const sumCubes = function(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total = total + cube(numbers[i]);
  }
  return total;
}