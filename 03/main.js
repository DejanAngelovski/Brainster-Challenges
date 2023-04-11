// 3. From the given 3 numbers , find the smallest and largest, and check
// are they prime.
// Example:
// Number = 13;
// Number2 = 15;
// Number3 = 20;
// Smallest - 13 , Largest-20
// The smallest number 13 is prime , The largest number 20 is not prime.


// Replace the numbers below with the ones you want to check
const number1 = 13;
const number2 = 15;
const number3 = 20;

//smallest
let smallest;
    if(number1 <= number2 && number1 <= number3){
        smallest = number1 
    } else if (number2 <= number1 && number2 <= number3){
        smallest = number2
    } else{
        smallest = number3
    }
 
 //largest
let largest;
    if(number1 >= number2 && number1 >= number3){
        largest = number1 
    } else if (number2 >= number1 && number2 >= number3){
        largest = number2
    } else{
        largest = number3
    }


// Function to check if a number is prime
function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}


// Check if the smallest and largest numbers are prime
if (isPrime(smallest)) {
  console.log(`The smallest number ${smallest} is prime`);
} else {
  console.log(`The smallest number ${smallest} is not prime`);
}

if (isPrime(largest)) {
  console.log(`The largest number ${largest} is prime`);
} else {
  console.log(`The largest number ${largest} is not prime`);
}

