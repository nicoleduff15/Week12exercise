// console.log("connected");

//#4 create an array of 5 numbers each with 2 decimal places
var numbersArray =[1.50, 2.23, 5.15, 9.10, 5.23];
var newNumbersArray =[];

//#5 Loop through the array
for (var i = 0; i < numbersArray.length; i++) {
  // round all numbers to the nearest whole integer
  var x = Math.round(numbersArray[i]);
  // add each to a new array
  newNumbersArray.push(x);
}
console.log(newNumbersArray);

// #6 Create a function that produces 10 random numbers between 1 and 100, and add each number to another array of numbers.
var newNumbersArray2 = [];
function randomNumbers() {
  var y = Math.ceil( Math.random() * 100 );
  newNumbersArray2.push(y);
};
for (var i = 0; i < 10; i++) {
  randomNumbers();
};
console.log(newNumbersArray2);

// #7 Create a function that creates a few variables to store: date, the current hour, the current minute and the current second.
function newDate() {
  var today = new Date();
  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();


// #8 Inside the function, create a variable that will display the current time in the hh:mm:ss format. Don't forget to account for single-digit numbers!
  var currentTime = hours + ":" + minutes + ":" + seconds;
  console.log(currentTime)


// #9 Inside the function, create a few more variables to store the current month, day and year.
  var day = today.getDate();
  var month = today.getMonth() + 1;
  var year = today.getFullYear() - 2000;

// #10 Inside the function, create a variable that will display the current date in the dd/mm/yy format. Don't forget to account for single-digit numbers!
  var currentDate = month + "/" + day + "/" + year;
  console.log(currentDate);

// #11 By now, you should have a function which displays the date and time in the hh:mm:ss dd/mm/yy format. Change your function to print this time and date onto your document.
  document.body.innerHTML = currentTime + " " + currentDate;

// #12 Now write some code that will run this time/date function every second. To do this, your function will need to use setTimeout to invoke itself after a delay.
  setTimeout(function() {
    newDate();
  }, 1000)
}
newDate();
