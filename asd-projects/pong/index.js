/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  const FRAME_RATE = 60;
  const FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  
  // Game Item Objects
  var ball = {}
  ball.id = ball;
  ball.x = 200;
  ball.y = 200;
  ball.width = 20;
  ball.height = 20;
  ball.speedX = 1;
  ball.speedY = 1;

  var paddleL = {}
  paddleL.id = paddleL;
  paddleL.x = 10;
  paddleL.y = 0;
  paddleL.width = 20;
  paddleL.height = 80;
  paddleL.speedX = 1;
  paddleL.speedY = 1;
  
  var paddleR = {}
  paddleR.id = paddleR;
  paddleR.x = 410;
  paddleR.y = 0;
  paddleR.width = 20;
  paddleR.height = 80;
  paddleR.speedX = 1;
  paddleR.speedY = 1;



  // var ball = gameObject(ball, 200, 200, 20, 20, 1, 1)
  // var paddleL = gameObject(paddleL, 10, 0, 20, 80, 0, 0)
  // var paddleR = gameObject(paddleR, 410, 0, 20, 80, 0, 0)
  
  // function gameObject (id, x, y, width, height, speedX, speedY){
  //   var gameObject = {};
  //   gameObject.id = id
  //   gameObject.x = parseFloat($("#id").css("left"))
  //   gameObject.y = parseFloat($("#id").css("top"))
  //   gameObject.width = parseFloat($("#id").width)
  //   gameObject.height = parseFloat($("#id").height)
  //   gameObject.speedX = speedX
  //   gameObject.speedY = speedY
  // }

  //Keyboard Keys

  var KEY = {
    LEFT: 37,
    RIGHT: 39,
    UP: 38,
    DOWN: 40,
    A: 65,
    W: 87,
    D: 68,
    S: 83,
  }

  //Handling Keys pressed

  function handleKeyDown () {
    var keycode = event.which;
    console.log(keycode);
    if (keycode === KEY.DOWN) {
      console.log("down pressed")
      //paddleR.speedY = -5
    }
    if (keycode === KEY.UP) {
      console.log("up pressed")
      //paddleR.speedY = 5
    }
    if (keycode === KEY.S) {
      console.log("S pressed")
      //paddleL.speedY = -5
    }
    if (keycode === KEY.W) {
      console.log("W pressed")
      //paddleL.speedY = 5
    }
  }

  //Handling Keys released

  function handleKeyUp () {
    var keycode = event.which;
    console.log(keycode);
    if (keycode === KEY.DOWN) {
      console.log("down released")
      //paddleR.speedY = 0
    }
    if (keycode === KEY.UP) {
      console.log("up released")
      //paddleR.speedY = 0
    }
    if (keycode === KEY.W) {
      console.log("W released")
      //paddleL.speedY = 0
    }
    if (keycode === KEY.S) {
      console.log("S released")
      //paddleL.speedY = 0
    }
  }
  

  // one-time setup
  let interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('eventType', handleEvent);    
  startBall()                       // change 'eventType' to the type of event you want to handle

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    // ball.x += ball.speedX
    // $("#ball").css("left", ball.x);

    // ball.y += ball.speedY
    // $("#ball").css("top", ball.y);    

  }

  // handling keys being pressed and keys being released

  $(document).on('keydown', handleKeyDown)
  $(document).on('keyup', handleKeyUp)

  /* 
  Called in response to events.
  */
  function handleEvent(event) {

  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  function startBall () {
    ball.x = 200
    ball.y = 200
    ball.speedX = (Math.random() * 3 + 2) * (Math.random() > 0.5 ? -1 : 1);
    ball.speedY = (Math.random() * 3 + 2) * (Math.random() > 0.5 ? -1 : 1);
  }
}
