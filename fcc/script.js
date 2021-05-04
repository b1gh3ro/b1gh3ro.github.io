

$('h1').hide()
$(window).on("load", function(){
    $('h2').slideUp(700)
    $('h1').slideDown(00)
})

$(document).ready(function(){
    $(document).mousemove(function(e){
        $('#circle').css('top', e.clientY + 'px')
        $('#circle').css('left', e.clientX + 'px')
    })

$('#welcome-section').hover(function(){
    $('img').css('width', '200px')
    $('img').css('height', '200px')
}, function(){
    $('img').css('width', '100px')
    $('img').css('height', '100px')
})
 

 $(function() {
    
	let isScrolling = false;
  $(window).on('wheel', function(e) {
  	if (!isScrolling){
    isScrolling = true;
    	console.log("i should scroll");
      var howFarFromTop = $(document).scrollTop(); //how far from the top have we scrolled?
      var currentWindowHeight = $( window ).height(); //current window height for responsiveness
      var delta = e.originalEvent.deltaY; // just to know if it is scroll wheel up or down
      //find out what is our offset from the top so we can now how far do we have to scroll to 	the next / previous element
      var currentSlide = Math.floor(howFarFromTop / currentWindowHeight); //approximate which slide is on screen at the moment
      console.log(currentSlide, "current slide");
      if (delta > 0){
        //scroll down
        smoothScroll(currentWindowHeight * (currentSlide + 1));
      }
      else {
        //scroll up
        smoothScroll(currentWindowHeight * (currentSlide -1));
      }	
      setTimeout(function(){isScrolling = false}, 200)
    }
    return false; 
    
    // don't let the browser do the default scroll 
  });
});

function smoothScroll(offsetPixels){
	if (offsetPixels < 0){ //avoid negative numbers on the scroll up
  	offsetPixels = 0;	
  }
  console.log(offsetPixels, "i should try to scroll to")
  //this function is just to make an animated scrolling transition
  $('html, body').animate({
    scrollTop: offsetPixels
  }, 200);
}

})



//let circle = document.getElementById('circle');

//document.addEventListener("mousemove", function(e){
    //const x = e.clientX
    //const y = e.clientY
   // circle.style.top = y + "px"
   /// circle.style.left = x + "px"
//})

//let text = document.querySelector('h1')
//let img = document.querySelector('img')

//text.addEventListener('mouseenter', function(e){
   // img.style.width = '200px'
   // img.style.height = '200px'
//})
//text.addEventListener('mouseout', function(e){
   // img.style.width = '100px'
   // img.style.height = '100px'
//})
