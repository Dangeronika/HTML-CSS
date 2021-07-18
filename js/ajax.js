$(document).ready(function() {
 

    $('#headernav div a').click(function(){
    
    let toLoad = $(this).attr('href')+' #content';
    $('#content').hide('fast',loadContent);
    window.location.hash = $(this).attr('href').substr(0,$(this).attr('href').length-5);
    function loadContent() {
     $('#content').load(toLoad,'',showNewContent())

    }
    function showNewContent() {
     $('#content').show('normal',hideLoader());
    }
    function hideLoader() {
     $('#load').fadeOut('normal');
    }
    
    return false;
    
    });
});

$( document ).ajaxComplete(function() {
    let opt = {
  center: {lat:56.75343134973149, lng: 37.16523199089132 },
  zoom: 4 
  }
    
  let map = new google.maps.Map(document.getElementById("map"), opt);
       
  });