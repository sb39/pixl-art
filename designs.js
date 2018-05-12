// Select color input
$('#submitButton').click(function(e){
    e.preventDefault(); 

    var height = $('#inputHeight').val();
    var width = $('#inputWeight').val();
    for(var  i =0 ; i< height ;i++) {
        $('#pixelCanvas').append("<tr></tr>");
        for(var j = 0 ; j<width ;j++){
            $("#pixelCanvas").children().last().append("<td></td>");
        }
    }
});

$('#pixelCanvas').on("click","td",function(){
    var color = $('#colorPicker').val();
    $(this).css('background-color',color);
});

$('#pixelCanvas').on("dblclick","td",function(){
    var color = $('#colorPicker').parent().val();
    $(this).css('background-color',color);
});

$('#emptyTable').on("click",function(){
    $('#pixelCanvas').remove();
});

$('#emptycolor').on("click",function(){
    var color = $('#colorPicker').parent().val();
   $("td").css("background-color",color);
});