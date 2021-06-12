// Title: My own functions created (or found) for future reference
//// Note: usages and explanation

// Get a random item in an array
//// (Math.floor(Math.random() * x) gives a random number between 0 and x
function randomItem(arrayName) {
    return arrayName[Math.floor(Math.random() * arrayName.length)];
}

// Get a random number between 2 numbers. [min->max) from inclusive upto exclusive
//// Only handles bigger second number than first number
function random(firstNum, secNum) {
let num;
 if (firstNum < secNum) {
  num = Math.floor(Math.random() * secNum);
   while (num < firstNum) {
   num = Math.floor(Math.random() * secNum);
   }
 } else if (firstNum == secNum) {
 num = secNum;
 } else {
  num = null;
  alert('Second number should be greater than first number!');
 }
return num;
}

// Get and combine all input values into a string separated by comma
//// Use split(',') to convert to an array/object
let inputs = document.getElementsByClassName( 'usrInput' ),
    names  = [].map.call(inputs, function( input ) {
        return input.value;
    }).join( ',' );

// Check if variable is an integer
//// Return true or false
function isInt(value) {
  return (
    !isNaN(value) &&
    parseInt(Number(value)) == value &&
    !isNaN(parseInt(value, 10))
  );
}

//
////