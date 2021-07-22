$(document).ready(function() {

  changeStyle();
  $('#headernav div a').click(function(e) {
      e.preventDefault();
      href = $(this).attr('href');
      let toLoad = href+' #content';
      $('#content').hide('fast', () => loadContent(toLoad));
      history.pushState(null, null, href);
      changeStyle();
  })
})

function changeStyle() {
  $('#headernav div a').css({'color' : '', 'padding-top' : ''});
  $('.animationdiv').css({'border-bottom' : ''});
  selecter = document.location.pathname;

  if (selecter.includes('index')) {
    $('.index_href').css({'color' : '#2375E1', 'padding-top' : '3px'});
    $('.index_href').parent().css({ 'border-bottom' : '3px solid #2375E1'});
  }

  if (selecter.includes('Map')) {
    $('.Map_href').css({'color' : '#2375E1', 'padding-top' : '3px'});
    $('.Map_href').parent().css({ 'border-bottom' : '3px solid #2375E1'});
  }

  if (selecter.includes('Timer')) {
    $('.Timer_href').css({'color' : '#2375E1', 'padding-top' : '3px'});
    $('.Timer_href').parent().css({ 'border-bottom' : '3px solid #2375E1'});
  }
}

function loadContent( road ) {
  $('#content').load( road, '', () => showNewContent())
}
function showNewContent() {
  changeStyle();
  $('#content').show('normal');
  if(document.location.pathname.includes('Map.html')) {
    initMap();
  }
}


$(window).bind('popstate', function(e) {

  $('#content').hide('fast', () =>
   loadContent(document.location.pathname + ' #content'));
})