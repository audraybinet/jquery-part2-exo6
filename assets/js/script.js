$('#green, #red, #blue').mouseover(function(){
  $('#text').css('color', this.id);
});
$('#green, #red, #blue').mouseout(function(){
  $('#text').css('color', 'black');
});
//$(function(){
//$('#green, #ref, #blue').on('mouseover',function(){
//var color = $(this).attr('id');
//$('text').css('color', color);
//})
//});
