(function($) {

var windowWidth = $(window).width();
var windowHeight = $(window).height();

//match Height
if($('.matchHeightCol').length){
  $('.matchHeightCol').matchHeight();
};

if($('.scroll-btn').length){
  $('.scroll-btn').on('click', function(e){
    e.preventDefault();
    var togo = $(this).data('to');
    goToByScroll(togo, 0);
  });
}
function goToByScroll(id, offset){
  if(id){
      // Remove "link" from the ID
    id = id.replace("link", "");
      // Scroll
    $('html,body').animate(
        {scrollTop: $(id).offset().top - offset},
      500);
  }
}

if( $('.promoBannerSlider').length ){
    $('.promoBannerSlider').slick({
      dots: true,
      infinite: false,
      //autoplay: true,
      autoplaySpeed: 6000,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      //fade: true
    });
    $('.promoBannerSlider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      $('.mslider-pagination a').removeClass('msiactive');
      $('.mslider-pagination').find("[data-slide='" + nextSlide + "']").addClass('msiactive');
      //console.log(nextSlide);
    });

    $('.mslider-pagination a').on('click', function(e){
        e.preventDefault();
        var goto = $(this).attr('data-slide');
        $('.promoBannerSlider').slick('slickGoTo', goto);
    });
}

if( $('#QP-tabs').length ){
  $('#QP-tabs').tabs();
}


$('.quaker-products-sec-tab .img-change-pagi li.img-change-pagi-1').on('click', function(e){
  e.preventDefault();
  $(this).parents('.qp-tab-con-col').find('.img-1').show();
  $(this).parents('.qp-tab-con-col').find('.img-2').hide();
  $(this).parents('.qp-tab-con-col').find('li.img-change-pagi-2').removeClass('img-change-pagi-active');
  $(this).addClass('img-change-pagi-active');
});
$('.quaker-products-sec-tab .img-change-pagi li.img-change-pagi-2').on('click', function(e){
  e.preventDefault();
  $(this).parents('.qp-tab-con-col').find('.img-2').show();
  $(this).parents('.qp-tab-con-col').find('.img-1').hide();
  $(this).parents('.qp-tab-con-col').find('li.img-change-pagi-1').removeClass('img-change-pagi-active');
  $(this).addClass('img-change-pagi-active');
});

$('.product-inr-tab-wrp .img-change-pagi li.img-change-pagi-1').on('click', function(e){
  e.preventDefault();
  $(this).parents('.product-inr-tab-wrp').find('.img-1').show();
  $(this).parents('.product-inr-tab-wrp').find('.img-2').hide();
  $(this).parents('.product-inr-tab-wrp').find('li.img-change-pagi-2').removeClass('img-change-pagi-active');
  $(this).addClass('img-change-pagi-active');
});
$('.product-inr-tab-wrp .img-change-pagi li.img-change-pagi-2').on('click', function(e){
  e.preventDefault();
  $(this).parents('.product-inr-tab-wrp').find('.img-2').show();
  $(this).parents('.product-inr-tab-wrp').find('.img-1').hide();
  $(this).parents('.product-inr-tab-wrp').find('li.img-change-pagi-1').removeClass('img-change-pagi-active');
  $(this).addClass('img-change-pagi-active');
});

if( $('.recipeItemsSlider').length ){
    $('.recipeItemsSlider').slick({
      dots: false,
      infinite: false,
      arrow: false,
      speed: 300,
      slidesToShow: 3.5,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2.5,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1.2,
          }
        }
      ]
    });
}

if( $('.followUsSlider').length ){
    $('.followUsSlider').slick({
      dots: false,
      infinite: false,
      arrow: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2.5,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1.2,
          }
        }
      ]
    });
}

/*
* Banner js
*/
if( $('.banner-bg').length ){
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    $('.banner-bg').css({
      '-webkit-transform' : 'scale(' + (1 + scroll/2000) + ')',
      '-moz-transform'    : 'scale(' + (1 + scroll/2000) + ')',
      '-ms-transform'     : 'scale(' + (1 + scroll/2000) + ')',
      '-o-transform'      : 'scale(' + (1 + scroll/2000) + ')',
      'transform'         : 'scale(' + (1 + scroll/2000) + ')'
    });
  });  
}

if( $('#ph-tabs').length ){
  $( "#ph-tabs" ).tabs();
}

$('.hdr-search-btn').on('click', function(){
    $(this).parent().toggleClass('hdr-search-expend');
  });

//sm-popup-main-menu

if (windowWidth < 992) {
  $('.nav-opener-btn').on('click', function(){
    $(this).toggleClass('menu-expend');
    $('.main-nav').toggleClass('menu-show');
  });

  $('.main-nav > ul > li.menu-item-has-children > a').on('click', function(e){
    e.preventDefault();
    $(this).parent().find('ul.sub-menu').slideToggle(500);
    $(this).toggleClass('sub-menu-expend')
  });
}


window.onscroll=function(){
  scrollFunction()
};
function scrollFunction(){
  if(document.body.scrollTop>700||document.documentElement.scrollTop>700){
    $(".logo").css({'top':'0','z-index':'9999'});
    $(".logo").addClass('add-cls');
  }else{
    $(".logo").css('top', '-100px');
    $(".logo").removeClass('add-cls');
  }
}


/*
-------------------------
  Masonary Js
-------------------------
*/

if($('#filter-menu').length){
  // init Isotope
  var $container = $('#isotope').isotope({
    itemSelector: '.grid-item',
    //layoutMode: 'fitRows',
    masonry: {
      columnWidth: '.width1x',
      fitWidth: true
    }

  });
  // bind filter button click
  $('#filter-menu').on( 'click', 'a', function(e) {
    e.preventDefault();
    $('#filter-menu a').removeClass('is-checked').removeClass('checked');
    $(this).addClass('is-checked');
    var filterValue = $( this ).attr('data-filter');
    $container.isotope({ filter: filterValue });
  });
}

$('.navbar-toggle').on('click', function(){
	$('#mobile-nav').slideToggle(300);
});
	

/**
Responsive on 767px
*/
var windowWidth = $(window).width();
// if (windowWidth <= 767) {

  $('.toggle-btn').on('click', function(){
    $(this).toggleClass('menu-expend');
    $('.toggle-bar ul').slideToggle(500);
  });


// }


// http://codepen.io/norman_pixelkings/pen/NNbqgG
// https://stackoverflow.com/questions/38686650/slick-slides-on-pagination-hover


//$("[data-fancybox]").fancybox({});

/**
Slick slider
*/
if( $('.responsive-slider').length ){
    $('.responsive-slider').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
}





    new WOW().init();
$(document).ready(function () {
 $('body').addClass('aniLoaded');
});

$('.recipeItemsSliderController').onScreen({
  tolerance: 250,
  toggleClass: false,
  doIn: function() {
    $(this).addClass('onScreen')
  }
});

AOS.init({
  once: true,
  duration: 800
});

$('.hasBgAnimation .banner-bg').css('min-width', windowWidth);

var toLerance = windowHeight / 2;

$('.firstLine').onScreen({
  tolerance: toLerance,
  toggleClass: true,
  doIn: function() {
    $(this).addClass('onScreen')
  },
  doOut: function() {
    $(this).removeClass('notOnScreen')
  }
});

window.onscroll=function(){
  scrollTimeline()
};
function scrollTimeline(){
  var mE = $('.middleElement').offset().top;
  var fL = $('.firstLine').offset().top;
  ofH = mE - fL;
    $('.historyActiveWrap').css('height', ofH);
}

$('.historyInit ul li').onScreen({
  tolerance: toLerance,
  toggleClass: true,
  doIn: function() {
    $(this).addClass('onScreen')
  }
});

$(window).on('load', function(){
  setTimeout(removeLoader, 600); //wait for page load PLUS two seconds.
});
function removeLoader(){
    $( "#loadingDiv" ).fadeOut(500, function() {
      // fadeOut complete. Remove the loading div
      $( "#loadingDiv" ).addClass('loadingdone'); //makes page more lightweight 
  });  
}

var s = skrollr.init({
    mobileCheck: function() {
        return false;
    },
    forceHeight: false
});

})(jQuery);









