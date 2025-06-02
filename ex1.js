let user = {
  name: "John",
  years: 30
}
// name property into the variable name.
//years property into the variable age.
//isAdmin property into the variable isAdmin (false if absent)
let { name, years:age , isAdmin = false } = user;

///////////////////////////////////////////////////////////////////////
//example 2
const ourPlanet = "Earth";
const currentUser = "John Doe";
///////////////////////////////////////////////////////////////////////
//example 3
let phrase = "Hello"

if (true) {
  let user = "John";
  function sayHi() {
    alert(`${phrase}, ${user}`)
  }
}

sayHi()///error: sayHi is not defined
//sayHi(); //uncommenting this will throw an error because sayHi is not defined in the global scope
///////////////////////////////////////////////////////////////////////
//example 4
const user2={
    name: "John",
    surname : "Smith",
}
user2.name = "Pete";
console.log(user2.name); // Pete
delete user2.name;
console.log(user2.name); // undefined
///////////////////////////////////////////////////////////////////////                                                                                                                                     
//example 5
const user2 = {
  name: "John"
}

// does it work?
user2.name = "Pete"

// yes, it works. Objects are mutable in JavaScript.
///////////////////////////////////////////////////////////////////////
//example 6
//If salaries is empty, then the result must be 0.
let salaries = {
  Fred: 100,
  Ted: 160,
  Ghaith: 130
}
if (Object.keys(salaries).length === 0) {
    console.log(0);
}
let sum =0;
for (let item in salaries){
    sum =+ salaries[item];
}
console.log(sum); // 390
//////////////////////////////////////////////////////
//example 7
/*if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}*/
let a =1;
let b=2;
console.log(a + b < 4 ? 'Below' : 'Over');
///////////////////////////////////////////////////////////////////////
//example 8
/*if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}*/
let login = 'Employee';
let massage =login === 'Employee' ? 'Hello' :login== 'Director'?' Greetings':login === ' '? 'No Login':'';
console.log(massage); // Hello