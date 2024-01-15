let raceNumber = Math.floor(Math.random() * 1000);
//Variable to random and add number to racers

let subscribe = "yes";
//Variable to check if subscribe or not (put "yes" if already subscribe or "not" if not yet)

let age = 18;
//Variable to sabe the racer's age (add the user age)

let adult = age
  if (age >= 18){
    raceNumber += 1000;
  }
//If its a adult racer the number should be greater the 1000;

let raceTime;
//Varable to save the Race time

  if (age >= 18 && subscribe==="yes")
    raceTime = "9:30 a.m"
  else if (age >= 18 && subscribe==="not")
    raceTime = "11 a.m"
  else
    raceTime = "12:30 a.m"
//If age is greter or equal than 18 AND the race already subscribe, should race at 9:30 a.m.
//If age is greter or equal than 18 AND the race not yet subscribe, should race at 11 a.m.
//If age is not greter or equal than 18 independent if it's already subscribe or not, should race at 12:30 a.m.

console.log(`Race Number: ${raceNumber}`)
console.log(`Race Time: ${raceTime}`)
//To show in Output
