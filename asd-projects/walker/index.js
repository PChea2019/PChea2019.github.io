/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  
  // Game Item Objects
  const KEY = {
    ENTER: 13,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    SPACE: 32,
    W: 87,
    A: 65,
    S: 83,
    D: 68,
  };
  var walker = {
    x: 0,
    y: 0,
    speedX: 0,
    speedY: 0,
  }
    var walkerZ = {
    x: 50,
    y: 50,
    speedX: 0,
    speedY: 0,
  }
  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)

  /* 
  This section is where you set up event listeners for user input.
  For example, if you wanted to handle a click event on the document, you would replace 'eventType' with 'click', and if you wanted to execute a function named 'handleClick', you would replace 'handleEvent' with 'handleClick'.

  Note: You can have multiple event listeners for different types of events.
  */
  $(document).on('keydown', handleKeyDown);     
  $(document).on('keyup', handleKeyUp)                     

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem()
    // console.log(walker.x, walker.y)
    wallCollision()
    boxCollision()
    redrawGameItem()
    

  }
  
  /* 
  This section is where you set up the event handlers for user input.
  For example, if you wanted to make an event handler for a click event, you should rename this function to 'handleClick', then write the code that should execute when the click event occurs.
  
  Note: You can have multiple event handlers for different types of events.
  */
  function handleKeyDown(event) {
    console.log(event.which);
    if (event.which === KEY.LEFT) {
      console.log("left pressed")
      walker.speedX = -5
    }
    if (event.which === KEY.RIGHT) {
      console.log("right pressed")
      walker.speedX = 5
    }
    if (event.which === KEY.UP) {
      console.log("up pressed")
      walker.speedY = -5
    }
    if (event.which === KEY.DOWN) {
      console.log("down pressed")
      walker.speedY = 5
    }
    if (event.which === KEY.ENTER) {
      console.log ("enter pressed")
      makeMine(walker.x + 20, walker.y + 20, "#mine")
    }

    if (event.which === KEY.A) {
      console.log("A pressed")
      walkerZ.speedX = -5
    }
    if (event.which === KEY.D) {
      console.log("D pressed")
      walkerZ.speedX = 5
    }
    if (event.which === KEY.W) {
      console.log("W pressed")
      walkerZ.speedY = -5
    }
    if (event.which === KEY.S) {
      console.log("S pressed")
      walkerZ.speedY = 5
    }
    if (event.which === KEY.SPACE) {
      console.log ("Space pressed")
      makeMineZ (walkerZ.x + 20, walkerZ.y + 20, "#mineZ")
    }
  }
  function handleKeyUp (event) {
    if (event.which === KEY.LEFT) {
      console.log("left released")
      walker.speedX = 0
    }
    if (event.which === KEY.RIGHT) {
      console.log("right released")
      walker.speedX = 0
    }
    if (event.which === KEY.UP) {
      console.log("up released")
      walker.speedY = 0
    }
    if (event.which === KEY.DOWN) {
      console.log("down released")
      walker.speedY = 0
    }

    if (event.which === KEY.A) {
      console.log("A released")
      walkerZ.speedX = 0
    }
    if (event.which === KEY.D) {
      console.log("D released")
      walkerZ.speedX = 0
    }
    if (event.which === KEY.W) {
      console.log("W released")
      walkerZ.speedY = 0
    }
    if (event.which === KEY.S) {
      console.log("S released")
      walkerZ.speedY = 0
    }
  }

  

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  function repositionGameItem() {
    walker.x = walker.x + walker.speedX
    walker.y = walker.y + walker.speedY
    walkerZ.x = walkerZ.x + walkerZ.speedX
    walkerZ.y = walkerZ.y + walkerZ.speedY

  }
  function redrawGameItem(){
    $("#walker").css("left", walker.x)
    $("#walker").css("top", walker.y)
    $("#walkerZ").css("left", walkerZ.x)
    $("#walkerZ").css("top", walkerZ.y)
  }
  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  function wallCollision() {
    if (walker.x < 0) {
      walker.x -= walker.speedX
    }
    if (walker.y < 0) {
      walker.y -= walker.speedY
    }
    if (walker.x + 50 > $("#board").width()) {
      walker.x -= walker.speedX
    }
    if (walker.y + 50 > $("#board").height()) {
      walker.y -= walker.speedY
    }

    if (walkerZ.x < 0) {
      walkerZ.x -= walkerZ.speedX
    }
    if (walkerZ.y < 0) {
      walkerZ.y -= walkerZ.speedY
    }
    if (walkerZ.x + 50 > $("#board").width()) {
      walkerZ.x -= walkerZ.speedX
    }
    if (walkerZ.y + 50 > $("#board").height()) {
      walkerZ.y -= walkerZ.speedY
    }
  }
  function boxCollision() {
    if (walker.x < walkerZ.x + 50 && walker.x + 50 > walkerZ.x && walker.y < walkerZ.y + 50 && walker.y + 50 > walkerZ.y){
      walker.x -= walker.speedX
      walker.y -= walker.speedY
      walkerZ.x -= walkerZ.speedX
      walkerZ.y -= walkerZ.speedY
    }
  }
    function makeMine (x, y, mined){
      $(mined).empty()
    $("<div>")
      .css("height", 15)
      .css("width", 15)
      .css("background-color", "purple")
      .css("position", "absolute")
      .css("left", x)
      .css("top", y)
      .appendTo("#mine")
  
  }
    function makeMineZ (x, y, mined){
      $(mined).empty()
    $("<div>")
      .css("height", 15)
      .css("width", 15)
      .css("background-color", "Orchid")
      .css("position", "absolute")
      .css("left", x)
      .css("top", y)
      .appendTo("#mineZ")
  
  }
}
