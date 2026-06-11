$(document).ready(function () {
  // Your code goes here
  $("<div>")
    .css("height", 15)
    .css("width", 15)
    .css("background-color", "black")
    .css("position", "absolute")
    .css("top", 42)
    .css("left", 42)
    .appendTo("#die")


  function makeDot (top, left, elementID){
    $("<div>")
      .css("height", 15)
      .css("width", 15)
      .css("background-color", "black")
      .css("position", "absolute")
      .css("top", top)
      .css("left", left)
      .appendTo(elementID)
  
  }
 

  function rollDie(dieID) {
    $(dieID).empty()
    var randomNum = Math.ceil(Math.random() * 6)
    console.log(randomNum)
    if (randomNum === 1) {
      makeDot(42, 42, dieID); // middle middle
    } else if (randomNum === 2) {
      makeDot(21, 21, dieID); // top left
      makeDot(63, 63, dieID); // bottom right
    } else if (randomNum === 3) {
      makeDot(21, 21, dieID); // top left
      makeDot(63, 63, dieID); // bottom right
     makeDot(42, 42, dieID); // middle middle
    } else if (randomNum === 4) {
      makeDot(63, 63, dieID); // bottom right
      makeDot(21, 21, dieID); // top left
      makeDot(21, 63, dieID); // bottom left
      makeDot(63, 21, dieID); // top right
    } else if (randomNum === 5) {
      makeDot(42, 42, dieID); // middle middle
      makeDot(63, 63, dieID); // bottom right
      makeDot(21, 21, dieID); // top left
      makeDot(21, 63, dieID); // bottom left
      makeDot(63, 21, dieID); // top right
    } else if (randomNum === 6) {
      makeDot(42, 63, dieID); // right middle
      makeDot(42, 21, dieID); // left middle
      makeDot(63, 63, dieID); // bottom right
      makeDot(21, 21, dieID); // top left
      makeDot(21, 63, dieID); // bottom left
      makeDot(63, 21, dieID); // top right
    } 
   
  }
 
  function rollDieTwo(dieID) {
    $(dieID).empty()
    var randomNum = Math.ceil(Math.random() * 7)
    console.log(randomNum)
    if (randomNum === 1) {
      makeDot(42, 42, dieID); // middle middle
    } else if (randomNum === 2) {
      makeDot(21, 21, dieID); // top left
      makeDot(63, 63, dieID); // bottom right
    } else if (randomNum === 3) {
      makeDot(21, 21, dieID); // top left
      makeDot(63, 63, dieID); // bottom right
     makeDot(42, 42, dieID); // middle middle
    } else if (randomNum === 4) {
      makeDot(63, 63, dieID); // bottom right
      makeDot(21, 21, dieID); // top left
      makeDot(21, 63, dieID); // bottom left
      makeDot(63, 21, dieID); // top right
    } else if (randomNum === 5) {
      makeDot(42, 42, dieID); // middle middle
      makeDot(63, 63, dieID); // bottom right
      makeDot(21, 21, dieID); // top left
      makeDot(21, 63, dieID); // bottom left
      makeDot(63, 21, dieID); // top right
    } else if (randomNum === 6) {
      makeDot(42, 63, dieID); // right middle
      makeDot(42, 21, dieID); // left middle
      makeDot(63, 63, dieID); // bottom right
      makeDot(21, 21, dieID); // top left
      makeDot(21, 63, dieID); // bottom left
      makeDot(63, 21, dieID); // top right
    } else if (randomNum === 7) {
      makeDot(42, 42, dieID); // middle middle
      makeDot(42, 63, dieID); // right middle
      makeDot(42, 21, dieID); // left middle
      makeDot(63, 63, dieID); // bottom right
      makeDot(21, 21, dieID); // top left
      makeDot(21, 63, dieID); // bottom left
      makeDot(63, 21, dieID); // top right
      alert ("Secret 7 on a 6-sided dice")
    } 
   
  }

  function handleClick(){
    rollDie("#die")
    rollDieTwo("#dietwo")
  }
  $("#die").on("click", handleClick)
  $("#dietwo").on("click", handleClick)
});
