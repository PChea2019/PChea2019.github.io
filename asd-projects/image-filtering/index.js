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
  applyFilter(reddify);
  applyFilterNoBackground(decreaseBlue);
  applyFilter(increaseGreenByBlue);
  applyFilterNoBackground(reddify);
  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2, 3 & 5: Create the applyFilter function here
function applyFilter(filterFunction) {
  for (var r = 0; r < image.length; r++){
    for (var c = 0; c < image[r].length; c++){
      var pixel = image[r][c];
      var pixelArray = rgbStringToArray(pixel)
      // Modifyin' color values
      filterFunction(pixelArray)
      var updatedPixel = rgbArrayToString(pixelArray)
      image[r][c] = updatedPixel
    }
  }
}

// TODO 9 Create the applyFilterNoBackground function
function applyFilterNoBackground (filterFunction) {
  var backgroundColor = image[0][0]
  for (var r = 0; r < image.length; r++) {
    for (var c = 0; c < image[r].length; c++){
      if (image[r][c] !== backgroundColor) {
        var pixel = image[r][c]
        var stringed = rgbStringToArray(pixel)
        var filtered = filterFunction(stringed)
        image [r][c] = rgbArrayToString(filtered)
      }
    }
  }
}

// TODO 6: Create the keepInBounds function
function keepInBounds (num) {
  if (num < 0){
    return 0
  }
  else if (num > 255) {
    return 255
  }
  else {
    return num
  }
}

// TODO 4: Create reddify filter function
function reddify (array){
  array[RED] = 200

}

// TODO 7 & 8: Create more filter functions
function decreaseBlue(pxarray) {
  var PLUEY = pxarray[BLUE] - 50
  pxarray[BLUE] = keepInBounds(PLUEY)
  
}

function increaseGreenByBlue (arrayed){
  var VERDE = arrayed[GREEN] + arrayed[BLUE]
  arrayed[GREEN] = keepInBounds(VERDE)
  
}


// CHALLENGE code goes below here
