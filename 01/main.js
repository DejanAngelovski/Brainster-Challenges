// 1. Use conditions to check if a given number is even. If so , print with
// console.log “ The Number (TheNumberYouWrote) is even ". If the
// number is not even, print " The Number (TheNumberYouWrote) is not
// even".

const myNumber = Number(prompt("Type a number and see if its even or NOT even."))


if (myNumber % 2 == 0){
    console.log(`The number ${myNumber} is even`)
} else{
    console.log(`The number ${myNumber} is NOT even`)
}