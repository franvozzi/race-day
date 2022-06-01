let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false;
//registered to race earlier or not
let age = 17;
//runner's age

if (age >= 18 && registeredEarly) {
  console.log(`${raceNumber} starts at 9:30 am`)
}
else if (age >= 18 && !registeredEarly) {
  console.log(`${raceNumber} starts at 11:00 am`)
}
else if (age < 18) {
  console.log(`${raceNumber} starts at 12:30 pm`)
}



