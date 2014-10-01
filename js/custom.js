
//scroll fixed nav//
  (function ($) {
  $(document).ready(function(){ 

  // show nav bar fixed top toggle
  $(function () {
    $(window).scroll(function () {
            // set distance user needs to scroll before we show and hide navbar
      if ($(this).scrollTop() > 700) {

        $('.nav').addClass('fixed-top');
      
      } else {

        $('.nav').removeClass('fixed-top');
      }
    });
  });
 });
 });
  

 $(function () {
 $(window).scroll(function () {

     if ($(this).scrollTop() > 700) {

        $('.navwrap').addClass('fixed-top');
      
      } else {

        $('.navwrap').removeClass('fixed-top');
      }
    });
  });

    $(function () {
  $(window).scroll(function () {

     if ($(this).scrollTop() > 700) {

        $('.mobilenav').addClass('fixed-top');
      
      } else {

        $('.mobilenav').removeClass('fixed-top');
      }
    })
});
  


var navright = $('.navright');

//reset mobile nav when screen size is < 600px//
$(window).resize(function(){
  if($(window).width() < 600) {
    $('.mobilenav').css('opacity', '0')
  };
});

//click to show mobile nav//
$('span.btn-col').click(function(){
 ($('.mobilenav').toggleClass('show'))
 ($('.navwrap').toggleClass('transback'))

});


$('.row2-1').click(function(){
	$('this').toggleClass('expand');
});