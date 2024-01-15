/*Create a program to convert Kelvin to Celsius, then to Fahrenheit in JavaScript*/

const kelvin = 300;
//Set a temperature in constant Kelvin 

console.log(`The temperature ${kelvin} KELVIN it's: `)

let celsius = kelvin - 273;
//Only difference is that Celsius is 273 degrees less than Kelvin.

console.log(`${celsius} degrees in Celsius;`)

let fahrenheit = celsius * (9 / 5) + 32;
//formule to convert Celsius in Fahrenheit.

fahrenheit = Math.floor(fahrenheit);
//When you convert from Celsius to Fahrenheit, you often get a decimal number. I used the .floor to round down

console.log(`${fahrenheit} degrees in Fahrenheit;`)

//EXTRA: Let's convert Celsius to Newton

let newton = celsius * (33 / 100);
//Convert to Newton
newton = Math.floor(newton);
//Round Down
console.log(`${newton} degrees in Newton`)