/*
** | variables
*/

//variable names should be in camel case, only number, letter, _ , $.
//capitalized variables are reserved for known constants, e.g PI.
// must be descriptive

/*
** | data types
*/

//dynamic typed - the variable doesn't have a value type, but the value does 
//command + slash to comment
//assignment operators 

/*
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
x--;
// console.log(x);
*/ 


/*
** | comparison operators
*/

/*
const ageJonas = 46;
const ageSarah = 19;
console.log(ageJonas > ageSarah);
*/

//operator precedence
//MDN precedence table
/*
let now = 2037;
const ageJonas = now - 1991;
const ageSarah =  now - 2018;

console.log(now - 1991 > now - 2018);

let x,y;
x = y = 10-5-2;
console.log(x,y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/


/*
** |  coding exercise one, dynamic + scalable. 
*/

/*

function calculateBMI(person) {
  return person.weight / (person.height * person.height);
}
var mark = {
  height: 1.69,
  weight: 78
};
var john = {
  height: 1.5,
  weight: 68
};
var bmiMark = calculateBMI(mark);
var bmiJohn = calculateBMI(john);

console.log("Mark's BMI:", bmiMark);
console.log("John's BMI:", bmiJohn);

if (bmiJohn > bmiMark) {
  console.log(`John's BMI is ${bmiJohn}, which is higher than mark's (${bmiMark})`);
} else {
  console.log(`Mark's BMI is ${bmiJohn}, which is higher than john's (${bmiJohn})`);
}

/*
** |  Section 18 
*/

/*
const katherine = 15;

if (katherine >= 18) {
  console.log('katherine can drive🤘');
} else {
  let years = 18- katherine;
  console.log(`katherine can't drive yet, Katherine must wait ${years} years, before she can drive 😄`);
}

// this is called a control structure, because it allows us to take control of our programme by making better decisions
*/

/*
** |  Section 20 - Type conversion
*/

//type comversion
const inputYear = `2000`;
console.log(Number(inputYear));
console.log(inputYear + 18); 
//produces a bug because the original constant isn't modified.

//type coersion
console.log('i am ' + 28 + ' years old');
//in this programme the + operator triggers a type coercion 
//because the plus operator is placed between two strings
console.log(`I will be ${28 + 2} in ${30 - 28} years`);
console.log('23' - '10' - 3);
//produces 10
console.log('23' + '10' + 3);
//produces 23103
//this happens because not all operators act the same
//eg, ('' - number), converts the strings to numbers
//but ('' + number), converts all the numbers to strings
let n = '1' + 1;
n = n - 1;
console.log(n);
//produces 10

/*
** |  Section 21 - Type conversion
*/

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

//here, 0 will be flase
const money = 0;
if(money) {
  console.log('buy an iPad Pro');
} else {
  console.log('go get a job ya big hippie!')
}
