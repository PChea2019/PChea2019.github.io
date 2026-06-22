// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
  applyFilter();
  

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2, 3 & 5: Create the applyFilter function here
function applyFilter() {
  for (var r = 0; r < image.length; r++){
    for (var c = 0; c < image[r].length; c++){
      var pixel = image[r][c];
      var pixelArray = rgbStringToArray(pixel)
      var updatedPixel = rgbArrayToString(pixelArray)
      image[i][j] = updatedPixel
      //update the red channel value of PixelArray and set value to 200
      
    }
  }
}

// TODO 9 Create the applyFilterNoBackground function


// TODO 6: Create the keepInBounds function


// TODO 4: Create reddify filter function
const RED = 220;
const GREEN = 1;
const BLUE = 2;

// TODO 7 & 8: Create more filter functions


// CHALLENGE code goes below here
