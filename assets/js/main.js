(function($) {


/////////////////////////// Rannojit

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
if( $('.promoBannerSlider').length ){
    $('.promoBannerSlider').slick({
      dots: false,
      infinite: false,
      autoplay: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true
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


$('.img-change-pagi ol li.img-change-pagi-1').on('click', function(e){
  e.preventDefault();
  $(this).parent().parent().parent().find('.img-1').fadeIn(300);
  $(this).parent().parent().parent().find('.img-2').fadeOut();
  $('.img-change-pagi ol li.img-change-pagi-2').removeClass('img-change-pagi-active');
  $(this).addClass('img-change-pagi-active');
});
$('.img-change-pagi ol li.img-change-pagi-2').on('click', function(e){
  e.preventDefault();
  $(this).parent().parent().parent().find('.img-2').fadeIn(300);
  $(this).parent().parent().parent().find('.img-1').fadeOut();
  $('.img-change-pagi ol li.img-change-pagi-1').removeClass('img-change-pagi-active');
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
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
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
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });
}


///////////////////////////// Milon


$('.img-change-pagi ol li.img-change-pagi-1').on('click', function(e){
  e.preventDefault();
  $(this).parent().parent().parent().find('.img-1').fadeIn(300);
  $(this).parent().parent().parent().find('.img-2').fadeOut();
  $('.img-change-pagi ol li.img-change-pagi-2').removeClass('img-change-pagi-active');
  $(this).addClass('img-change-pagi-active');
});
$('.img-change-pagi ol li.img-change-pagi-2').on('click', function(e){
  e.preventDefault();
  $(this).parent().parent().parent().find('.img-2').fadeIn(300);
  $(this).parent().parent().parent().find('.img-1').fadeOut();
  $('.img-change-pagi ol li.img-change-pagi-1').removeClass('img-change-pagi-active');
  $(this).addClass('img-change-pagi-active');
});

/*------------ Start of gallery and isotop -------*/



/*$('.gallery-2items-controller ul').isotope({
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    // use outer width of grid-sizer for columnWidth
    columnWidth:'.grid-item',
    gutter: 0
  }
})

var $container= $('#isotope').isotope({
  itemSelector: '.grid-item',
  layoutMode: 'fitRows',

});*/
  
 // bind filter button click
/*$('#filter-menu').on( 'click', 'a', function(e) {
  e.preventDefault();
  $('a.button').not(this).removeClass('checked');
    $(this).addClass('checked');
  var filterValue = $( this).attr('data-filter');
  var filtercheckedText = $(this).text();
  //alert(filtercheckedText);
  $container.isotope({ filter: filterValue });
  
});
*/

if( $('#ph-tabs').length ){
  $( "#ph-tabs" ).tabs();
}

$('.hdr-search-btn').on('click', function(){
    $(this).parent().toggleClass('hdr-search-expend');
  });


/*
-------------------------
  Masonary Js
-------------------------
*/

if($('#filter-menu').length){
  // init Isotope
  var $container = $('#isotope').isotope({
    itemSelector: '.grid-item',
    layoutMode: 'fitRows',

  });
  // bind filter button click
  $('#filter-menu').on( 'click', 'a', function(e) {
    e.preventDefault();
    $('#filter-menu a').removeClass('is-checked');
    $(this).addClass('is-checked');
    var filterValue = $( this ).attr('data-filter');
    $container.isotope({ filter: filterValue });
  });
}

if($('.masonry').length){
  $('.masonry').masonry({
    // options
    itemSelector: '.grid-item',
    columnWidth: auto
  });
}




/////////////////////////// Prashanto




//////////////////////////// Shoriful 





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

})(jQuery);









