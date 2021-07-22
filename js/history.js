$(document).ready(function() {

  $('#headernav div a').click(function(e) {
      e.preventDefault();
      href = '/' + $(this).attr('href');
      let toLoad = href+' #content';
      $('#content').hide('fast', () => loadContent(toLoad));
      history.pushState(null, null, href);
  })
})

// function changeStyle(str) {
//   $('#headernav div a').css({'color' : 'black', 'padding-top' : ''});
//   $('.animationdiv').css({'border-bottom' : ''});
//   obj.css({'color' : '#2375E1', 'padding-top' : '3px'});
//   obj.parent().css({ 'border-bottom' : '3px solid #2375E1'});
// }

function loadContent( road ) {
  $('#content').load( road, '', () => showNewContent())
}
function showNewContent() {
  $('#content').show('normal', hideLoader());

  if(document.location.pathname == '/Map.html') {
    initMap();
  }
}
function hideLoader() {
  $('#load').fadeOut('normal');
}

$(window).bind('popstate', function(e) {

  $('#content').hide('fast',
   loadContent(document.location.pathname + ' #content'));
})