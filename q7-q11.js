const x = 6;

// 7. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x" using without using arrow functions.
function add2NumberToX(arg1, arg2) {
  const sum = 0;
  sum = arg1 + arg2 + x;
  return sum;
}

// 8. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x", using arrow functions.

const add2NumberToXArrowFunc = (arg1, arg2) => {
  const sum = 0;
  sum = arg1 + arg2 + x;
  return sum;
};
// 9. Write a function that returns another function. (use arrow functions please)

const returnAnotherFunc = () => {
  const y = 10;

  let add = (i) => i + y;

  return add;
};

console.log(returnAnotherFunc()(5));

// 10. given the following code:

const getFunction = () => {
  const y = 5;

  const insideFunc = (a) => y + a;

  return insideFunc;
};

console.log(getFunction()(2));

// Explain why the function that returns from getFunction still has access to "y" if "y" is not a global variable.

// Answer =============================================================================================
// ***It still has access to Y value,  because Y belongs to scope of that callback function when  it was created****



// 11. write a function that takes "couldThrowError()" as a callback argument.
// within that function call "couldThrowError" and console log its result.
// Make sure to handle errors that could be thrown by "couldThrowError()"

const couldThrowError = () => {
  
  if(Math.ceil(Math.random() * 2) < 2){
    throw new Error("Error was thrown");
  }
  
  return 'success'
}


