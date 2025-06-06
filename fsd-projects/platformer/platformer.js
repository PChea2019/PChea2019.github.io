$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();
    createPlatform(850,650,150,20, "yellow");
    createPlatform(1000,550,85,25,"red");
    createPlatform(1250,500,75,25, "blue");
    createPlatform(900,375,125,20, "green");
    createPlatform(550,450,25,10,"purple")
    createPlatform(200,400,100,20,"orange")

    // TODO 2 - Create Platforms

    createCollectable("database",200,170,0.5,0.7);
    createCollectable("database",545,375,0.5,0.5);
    createCollectable("database",950,300,0.5,0.5);



    // TODO 3 - Create Collectables
    createCannon("right",775,1300)
    createCannon("top",1200,1100)
    createCannon("right",725,1300)
    



    
    // TODO 4 - Create Cannons


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
