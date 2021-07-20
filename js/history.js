function showContent(link) {
  var cont = document.getElementById('content'); 
  var http = createRequestObject();
  if( http ) 
  { http.open('get', link);
      http.onreadystatechange = function () 
      {   if(http.readyState == 4) 
          {   cont = pageChange(link);
        }
      }
      http.send(null);  }
  else 
  {  document.location = link;   }   }
// ajax объект
function createRequestObject() 
{ return new XMLHttpRequest() }

function pageChange (link) {
  
  let toLoad = link + ' #content';
    $('#content').hide('fast',loadContent);
    window.location.hash = link.replace('.html', '');
    function loadContent() {
     $('#content').load(toLoad,'',showNewContent())
    }
    function showNewContent() {
     $('#content').show('normal',hideLoader());
    }
    function hideLoader() {
     $('#load').fadeOut('normal');
    }
}

$( document ).ajaxComplete(function() {
  initMap();
});