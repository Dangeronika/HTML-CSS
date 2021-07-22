$(document).ready(function() {

  $('#headernav div a').click(function(e){
      e.preventDefault();
      changeStyle($(this));
      href = $(this).attr('href');
      let toLoad = href+' #content';
      $('#content').hide('fast',loadContent);
      history.pushState(null, null, href);
      function loadContent() {
      $('#content').load(toLoad,'', () => showNewContent())
      }
      function showNewContent() {
      $('#content').show('normal',hideLoader());
      if (href == "Map.html") { initMap(); }
      }
      function hideLoader() {
      $('#load').fadeOut('normal');
      }
  })
})

function changeStyle(obj) {
  $('#headernav div a').css({'color' : 'black', 'padding-top' : ''});
  $('.animationdiv').css({'border-bottom' : ''});
  obj.css({'color' : '#2375E1', 'padding-top' : '3px'});
  obj.parent().css({ 'border-bottom' : '3px solid #2375E1'});
}
