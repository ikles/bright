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


  $('.sl-close').click(function () {
    $('.gallery__slick-wrap').removeClass('show');
  });


  

  $('.gallery__item').each(function () {
    const count = $(this).attr('data-item-count');
    $(this).click(function (e) {
      e.preventDefault();
      $('.gallery__slick-wrap-'+count).addClass('show');
      
    })
  });







  $('.gallery__slick-1, .gallery__slick-2, .gallery__slick-3, .gallery__slick-4, .gallery__slick-5').slick({
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
    variableWidth: true,
    initialSlide: 0,
    variableWidth: true,
    responsive: [

    {
      breakpoint: 1200,
      settings: {
        centerMode: true,
        slidesToShow: 1,        
      }
    },
    ]
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

  $('.accordion-header').click(function () {
    $(this).toggleClass('active-header');
    $(this).next().slideToggle().toggleClass('open-content');
  });



  $('a[href*=\\#]:not([href=\\#])').click(function () {
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination - 0}, 700);
    return false;
  });

}); //ready


gsap.set('.follower',{xPercent:-50,yPercent:-50});
gsap.set('.cursor',{xPercent:-50,yPercent:-50});

var follow = document.querySelector('.follower');
var cur = document.querySelector('.cursor');

window.addEventListener('mousemove',e => {
  gsap.to(cur,0.2,{x:e.clientX,y:e.clientY});
  gsap.to(follow,0.6,{x:e.clientX,y:e.clientY});
});



