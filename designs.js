// Select color input
$('#submitButton').on('click',function(){
    var height = document.getElementById('inputHeight').value;
    var width = document.getElementById('inputWeight').value;
    console.log('the height is=',height);
    console.log('the width is =',width);
    var colour = document.getElementById('colorPicker').value;
    document.write('the colour id is = ',colour);
    console.log(colour);
    $('#colorPicker').append(console.log(makeGrid(height,width)));
})
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(height, width) {
    var arrTile = [];
    var arrOutput = [];
    for(i = 1; i <= height; i++ ){
      arrTile.push(i);
     // document.write(arrOutput);
    }
    for(j = 1; j <= width; j++){
      arrOutput.push(arrTile,end="\n");
    }
    return arrOutput;
}
/*
for (var row = 0; row < width; row++) {
    for (var column = 0; column < height; column++) {
      return(makeGrid[row][column]);
    }
  }
*/