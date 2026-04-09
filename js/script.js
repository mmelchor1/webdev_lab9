function init(){
  var button = document.getElementById('entrybutton');
  var input = document.getElementById('entryinput');
  var output = document.getElementById('textoutput');

  button.addEventListener('click', function(){
  	var message = input.value;
  	alert("Marlen Melchor: " + message);
  	output.innerHTML = message;
  });
  
window.addEventListener('load', init);
