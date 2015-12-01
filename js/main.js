$(document).ready(function(){
   $('.parallax').parallax();
   
   $(window).scroll(function() {
      if ($(this).scrollTop() > 720){ 
        $('header').addClass("headerShow"); 
      }
      else{
        $('header').removeClass("headerShow");
      }
      
   });
   
   
   

});




$('#hamburgerButton').click(function() {
   $('#hamburgerContent').addClass("hamburgerContentOpen"); 
   $('#hamburgerContent').removeClass("hamburgerContentClosed");
});   
   
$('#hamburgerCloseButton').click(function() {
   $('#hamburgerContent').addClass("hamburgerContentClosed"); 
   $('#hamburgerContent').removeClass("hamburgerContentOpen");
});

$('.hamburgerLinks a').click(function() {   
   $('#hamburgerContent').addClass("hamburgerContentClosed"); 
   $('#hamburgerContent').removeClass("hamburgerContentOpen");
});


