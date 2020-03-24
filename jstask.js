// function to find and display possible even numbers
function evenNumberBasedOnCoursesLength(num) {
  for (let i=1; i<=num; i++) {
    if(i % 2 === 0) {
      console.log(i);
    }
  }
}
// function stops

console.log("a program to display odd or even numbers from 1 to 200 inclusive, based on the numbers of courses offered. \n");

// store name in var
var name = "Edem Essang Ukoh";

// create array storing courses
courses = ["Node.js", "Html", "CSS", "javascript"];
console.log("My name is: "+name +"\n");
console.log("my courses are: " +courses +"\n");

 console.log("Since my courses are even, these are the posible even numbers from 1 to 200 inclusive \n");


// checks if courses index is even by using the modulo, then it calls the function  evenNumberBasedOnCoursesLength with an argument of int 200. but if for some reasons it is not then it displays the stay safe message.
if (courses.length %2 == 0){
  evenNumberBasedOnCoursesLength(200);
}else{
  console.log("stay safe this period!")
}