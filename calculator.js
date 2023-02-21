// Getting button for html
/* var screen = document.getElementById("show");
var zero = document.getElementById("zero-btn");
var double = document.getElementById("double-zero-btn");
var one = document.getElementById("one-btn");
var two = document.getElementById("two-btn");
var three = document.getElementById("three-btn");
var four = document.getElementById("four-btn");
var five = document.getElementById("five-btn");
var six = document.getElementById("six-btn");
var seven = document.getElementById("seven-btn");
var eight = document.getElementById("eight-btn");
var nine = document.getElementById("nine-btn");
var add = document.getElementById("add-btn");
var minus = document.getElementById("minus-btn");
var multiply = document.getElementById("multiplication-btn");
var divide = document.getElementById("divide-btn");
var module = document.getElementById("module-btn");
var equal = document.getElementById("equal-btn");
var remove = document.getElementById("delete-btn");
var clear = document.getElementById("clear-btn");
 */
// Adding Click event to buttons
/* one.addEventListener("click", function(e){
    var put = screen.innerHTML;
    var last = put[put.length - 1];
})
 */




/* // adding click handlers to number buttons
for (var i = 0; i < one.length; i++) {
    one[i].addEventListener("click", function(e) {
  
      // storing current input string and its last character in variables - used later
      var currentString = screen.innerHTML;
      var lastChar = currentString[currentString.length - 1];
  
      // if result is not diplayed, just keep adding
      if (resultDisplayed === false) {
        screen.innerHTML += e.target.innerHTML;
      } else if (resultDisplayed === true && lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
        // if result is currently displayed and user pressed an operator
        // we need to keep on adding to the string for next operation
        resultDisplayed = false;
        screen.innerHTML += e.target.innerHTML;
      } else {
        // if result is currently displayed and user pressed a number
        // we need clear the input string and add the new input to start the new opration
        resultDisplayed = false;
        screen.innerHTML = "";
        screen.innerHTML += e.target.innerHTML;
      }
  
    });
  } */

  function one(){
   let screen =  document.getElementById("screen");
   screen.setAttribute("value", "1");
  }
  function two(){
    var screen = document.getElementById("screen");
    screen.setAttribute("value", "2");
  }