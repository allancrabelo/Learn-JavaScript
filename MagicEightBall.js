/*OBJECTIVE: Create  a "Magical Eight Ball" using JavaScript.The user will be able to input a question, then our program will output a random fortune.*/


let username = 'Allan';
//I create a vareable to put the user name. Put your name inside ''. 

username ? console.log(`Hello, ${username}!`) : console.log('Hello!');
//That's a ternary expresion to decides if will show or not the username in output.

const userQuestion = 'the meaning of life, the universe, and everything';
//Here its a vareable to save the user question.

let randomNumber
//Create to save the Ball Random Name.

randomNumber = Math.floor(Math.random() * 8);
//That structure generate a random number (0 - 7).

let eightBall = '';
eightBall = randomNumber;
//Create only to save the result.

console.log(`The Magic 8-Ball unveils with its mysterious magic that the answer to your dilemma "${userQuestion}" is...`)
//To show in the output a standard massage with the user question.
switch(eightBall) {
  case 0:
    console.log('It is certain');
    break;
  case 1:
    console.log('It is decidedly so');
    break;
  case 2:
    console.log('Reply hazy try again');
    break;
  case 3:
    console.log('Cannot predict now');
    break;
  case 4:
    console.log('Do not count on it');
    break;
  case 5:
    console.log('My sources say no');
    break;
  case 6:
    console.log('Outlook not so good');
    break;
  case 7:
    console.log('Signs point to yes');
    break;
  default:
    console.log('Error')
    break;
}
//Thats a stucture of switch. Take a random number and associate with phrases to show in output.

//Everyone know thats wrong! Should be 42!