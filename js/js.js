 $(function () {

    'use strict';

  //Intialiazation 
setTimeout(mmm,2200)
function mmm () {
   var radialObj = radialIndicator('#indicatorContainer', {
      barColor : '#2a7dcb',
      barWidth : 10,
      initValue : 0
  });  
   
   //Using Instance
   radialObj.animate(80,1000); 

}

$("body .load-file .down .ii #ii i:first-of-type").fadeTo(1300,1,function () {
   
   $(this).fadeOut().delay(1000,function () {
      $(this).next().fadeIn();
   })
})

$(window).scroll(function () {

   console.log($(this).scrollTop())


       if($(window).scrollTop() >= 100){

           $(".myover").fadeIn();
       }
       if($(window).scrollTop() >= 1400){

           $(".load-file").fadeIn();
       }
       if($(window).scrollTop() >= 2000){

           $(".show-tab2").fadeIn();
       }
       if($(window).scrollTop() >= 3300){

           $(".show-tab6").fadeIn(function () {
               
               setTimeout(mmm,2000)
 
              
           });
          
       }
       if($(window).scrollTop() >= 4900){

           $(".carousel").fadeIn();
       }
       if($(window).scrollTop() >= 5700){

           $(".end").fadeIn();
       }
       if($(window).scrollTop() >= 6650){

           $("#fram").fadeIn();
       }
       if($(window).scrollTop() >= 5700){

           $(".get").fadeIn();
       }
       if($(window).scrollTop() >= 6000){

           $(".ul2").fadeIn();
       }
       if($(window).scrollTop() >= 6200){

           $("iframe").fadeIn();
       }
       if($(window).scrollTop() >= 6400){

           $(".ul3").fadeIn();
       }

       if($(window).scrollTop() >= 2000){

           $(".up-page").fadeIn();
       }
       if($(window).scrollTop() <= 1999){

           $(".up-page").fadeOut();
       }

       
       console.log($(window).scrollTop())
      
});

  
 });
