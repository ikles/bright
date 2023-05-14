jQuery(document).ready(function( $ ) {

  $(".toggle-mnu").click(function() {
    $(this).toggleClass("on");
    $(".top-mnu").slideToggle();
    return false;
  });

  $('body').click(function () {
    if( $(".toggle-mnu").hasClass("on") ){
      $(".toggle-mnu").removeClass("on");
      $(".top-mnu").fadeOut();
    }
  });


  $(".top-mnu").click(function (e) {
    e.stopPropagation();
  });






$('.gallery__slick').slick({
  infinite: true,    
  speed: 800,
  slidesToScroll: 1,
  autoplay: false,    
  slidesToShow: 3,
  cssEase: 'ease-in-out',  
  autoplaySpeed: 0,  
  arrows: true,
  pauseOnHover: true,  
  centerMode: true,
  variableWidth: true
});




/************************************/

/*$('.wrapper').prepend('<span class="eye-3"></span>');
let pg = parseInt(document.location.pathname.match(/\d+/))
$('body').addClass('active').css('background-image', "url('../img/"+pg+".jpg')");
$('body:not(.active)').css('background-image', "unset");

$('.eye-3').click(function (e) {
  e.preventDefault();  
  $('body').toggleClass('active');
  let pg = parseInt(document.location.pathname.match(/\d+/));
  $('body.active').css('background-image', "url('../img/"+pg+".jpg')");
  $('body:not(.active)').css('background-image', "unset");
});*/

/************************************/



function popup(openLink, windowEl, closeEl) {  
  $(openLink).click(function(e) {
    e.preventDefault();
    $(windowEl).fadeIn();
    $('body').addClass('ohi');
  });
  $(closeEl).click(function(e) {
    e.preventDefault();
    $(windowEl).fadeOut();
    $('body').removeClass('ohi');
  });
  $('.modal-overlay').click(function () {
    $(this).fadeOut();
    $('body').removeClass('ohi');
  });
  $('.modal-form__block').click(function (e) {
    e.stopPropagation();  
  });
  
}

popup('.link2', '.modal-overlay_2', '.modal-close_2');
popup('.link', '.modal-overlay_1', '.modal-close_1');





$(window).scroll(function(){
  var wt = $(window).scrollTop();  
  var wh = $(window).height();    
  if (wt > 600) {
    $('.to-top').show(400);
  }
  else {
   $('.to-top').hide();
 }
});



$('a[href*=\\#]:not([href=\\#])').click(function () {
  elementClick = $(this).attr("href");
  destination = $(elementClick).offset().top;
  $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination - 0}, 700);
  return false;
});

}); //ready


/*if($('select').length) {
  $('select').select2({
    minimumResultsForSearch: -1
  });
}*/