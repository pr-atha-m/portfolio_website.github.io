$(document).ready(function () {
	
  $(window).scroll(function(){

  		if(this.scrollY> 20){

  				$('.navbar').addClass("sticky");
  		}
  		else{

  			$('.navbar').removeClass("sticky");
  		}

          if(this.scrollY> 500){

               $('.scroll-up-btn').addClass("show");

          }
          else{

                $('.scroll-up-btn').removeClass("show");
          }


  });  

/*  slide-up*/
$('.scroll-up-btn').click(function(){
     $('html').animate({scrollTop:0})

});



   $('.menu-btn').click(function(){
        
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");


   });

/*typing
*/
var typed = new Typed(".typing",{
  strings: ["Pre-Final Year Student" , "Developer" , "Data Scientist","Competitive Programmer","Algorithmic Trader" , "Data-Analyst"],
  typeSpeed:100 , 
  backSpeed:60, 
  loop: true

});


var typed = new Typed(".typing-2",{
  strings: ["Pre-Final Year Student" , "Developer" , "Data Scientist","Competitive Programmer","Algorithmic Trader" , "Data-Analyst"],
  typeSpeed:100 , 
  backSpeed:60, 
  loop: true

});





});