/*Create a progra to account or their growth compared to a human of the same age

8 years in a human’s life equates to 45 years in a dog’s life. How old would you be if you were a dog?*/

let myName = 'Allan'
//That's variable control the name. Feel free to change to your name! ; )

const myAge = 21;
//I creat a variable named myAge and set it up my age. Stay free to change to your age!

let myAgeInDogYears = myAge * 5.63;

myAgeInDogYears = Math.floor(myAgeInDogYears)
//To Round Down the Age

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} in dog years!`)