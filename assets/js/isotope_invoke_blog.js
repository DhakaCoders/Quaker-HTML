(function($) {
if( $('ul.hasisotop-filter.hasisotop-pages').length ){
  var itemSelector = '.grid-item'; 
  var $container = $('.hasisotop-filter.hasisotop-pages').isotope({ 
      columnWidth: '.grid-sizer',
      itemSelector: itemSelector,
      percentPosition: true,
      gutter: 0,
      fitWidth: true 
  });

  //Ascending order
  var responsiveIsotope = [
    [767, 4],
    [1200, 6]
  ];

  var itemsPerPageDefault = 6;
  var itemsPerPage = defineItemsPerPage();
  var currentNumberPages = 1;
  var currentPage = 1;
  var currentFilter = '*';
  var filterAtribute = 'data-filter';
  var pageAtribute = 'data-page';
  var pagerClass = 'isotope-pager';

  function changeFilter(selector) {
    $container.isotope({
      filter: selector
    });
    $container.isotope( 'layout' );
  }


  function goToPage(n) {
    currentPage = n;

    var selector = itemSelector;
      selector += ( currentFilter != '*' ) ? '['+filterAtribute+'*="'+currentFilter+'"]' : '';
      selector += '['+pageAtribute+'="'+currentPage+'"]';
      //console.log(selector);

    changeFilter(selector);
    $container.isotope( 'layout' );
  }

  function defineItemsPerPage() {
    var pages = itemsPerPageDefault;

    for( var i = 0; i < responsiveIsotope.length; i++ ) {
      if( $(window).width() <= responsiveIsotope[i][0] ) {
        pages = responsiveIsotope[i][1];
        break;
      }
    }

    return pages;
  }
  
  function setPagination() {

    var SettingsPagesOnItems = function(){

      var itemsLength = $container.children(itemSelector).length;
      
      var pages = Math.ceil(itemsLength / itemsPerPage);
      var item = 1;
      var page = 1;
      var selector = itemSelector;
        selector += ( currentFilter != '*' ) ? '['+filterAtribute+'*="'+currentFilter+'"]' : '';
      
      $container.children(selector).each(function(){
        if( item > itemsPerPage ) {
          page++;
          item = 1;
        }
        $(this).attr(pageAtribute, page);
        item++;
      });

      currentNumberPages = page;

    }();

    var CreatePagers = function() {

      var $isotopePager = ( $('.'+pagerClass).length == 0 ) ? 
      $('<div class="'+pagerClass+'"></div>') : $('.'+pagerClass);

      $isotopePager.html('');
      
      if( currentNumberPages > 1 ){
        for( var i = 0; i < currentNumberPages; i++ ) {
          if( i == 0 ){
            var $pager = $('<a href="javascript:void(0);" class="pager ispageactive" '+pageAtribute+'="'+(i+1)+'"></a>');
          }else{
            var $pager = $('<a href="javascript:void(0);" class="pager" '+pageAtribute+'="'+(i+1)+'"></a>');
          }
          //var $pager = $('<a href="javascript:void(0);" class="pager" '+pageAtribute+'="'+(i+1)+'"><span></span></a>');
          var pageno = i+1;
            $pager.html('<span class="pageno">'+pageno+'</span><span class="isactive"></span>');
            
            $pager.click(function(){
              $(this).siblings().removeClass('ispageactive');
              $(this).addClass('ispageactive');
              var page = $(this).eq(0).attr(pageAtribute);
              goToPage(page);
            });

          $pager.appendTo($isotopePager);
        }
      }

      $('.vacatures-isotop-pagi').html($isotopePager);

    }();
    $container.isotope( 'layout' );

  }

  setPagination();
  goToPage(1);
  $container.isotope( 'layout' );


  //Adicionando Event de Click para as categorias
  $('.dsw-isotop-menu ul li a').click(function(e){
    e.preventDefault();
    $('.dsw-isotop-menu ul').find('li').removeClass('ui-tabs-active');
    $(this).parents('li').addClass('ui-tabs-active');
    var filter = $(this).attr(filterAtribute);
     currentFilter = filter;

    setPagination();
    goToPage(1);
    $container.isotope( 'layout' );

  });

  //Evento Responsivo
  $(window).resize(function(){
    itemsPerPage = defineItemsPerPage();
    setPagination();
    //goToPage(1);
    $container.isotope( 'layout' );
  });
} 

})(jQuery);