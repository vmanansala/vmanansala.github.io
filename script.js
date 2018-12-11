// A $( document ).ready() block.
$( document ).ready(function() {
	$('p').makeItRain()
    console.log( "ready!" );
});

 document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
   var instances = M.Parallax.init(elems);
  });

$(document).ready(function(){

  /*
    Experiment by commenting and uncommenting the two lines below to get the 
    textarea label to be active.
  */
  
  //This does not set the label to the active position:
  $('.input-field label').addClass('active');
  
  
  //This does set the label to the active position.
  setTimeout(function(){ $('.input-field label').addClass('active'); }, 1);
  
  
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems);
  });

 
        
