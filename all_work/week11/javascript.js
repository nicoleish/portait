console.log("hey hey :)");

let hungry;
let submit2;

$('#submit-1').click(function() {
  hungry = $('#hungry').val();
  $('#response-1').text('hi ' + hungry + ', im dad! hahaha yeah so what is up! as the kids say');
  console.log(hungry);
  $('.input-2').css("display", "block");
})

$('#submit-2').click(function() {
  submit2 = $('#q1').val();
  console.log(submit2);
  $('#response-2').text('yeah gotcha, i feel that ' + hungry + ". when you said, " + submit2 + '".');
  $('#response-2-2').text('well this was fun was it not?!');
  $('.input-3').css("display", "block");
})

$('#submit-3').click(function() {
  $('#response-3').text('whatever,  ' + hungry + '.');
  $('#response-3-1').text('see ya when you refresh ' + hungry + '.');
})
