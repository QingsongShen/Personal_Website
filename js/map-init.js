//google map
if ($("#map-canvas").length) {
jQuery(document).ready(function($) {
	
	"use strict";

		function initMap() {
var usRoadMapType = new google.maps.StyledMapType([
      {
        featureType: 'all',
        elementType: 'all',
        stylers: [
          {invert_lightness: 'true'},        
          {hue: '#335158'},
          {saturation: 40},
          {lightness: 30},         
          {gamma: 0.5}
        ]
      }
    ], {name: 'Dark Style'});  
  var uluru = {lat: 42.316725, lng: -75.392093};
  var map = new google.maps.Map(document.getElementById('map-canvas'), {
    zoom: 10,
    center: uluru,
    mapTypeControlOptions: {
      position: google.maps.ControlPosition.TOP_LEFT,
      mapTypeIds: [google.maps.MapTypeId.ROADMAP,
        google.maps.MapTypeId.SATELLITE, google.maps.MapTypeId.HYBRID,
        google.maps.MapTypeId.TERRAIN, 'usroadatlas']
    },  
    zoomControlOptions: {
        position: google.maps.ControlPosition.LEFT_TOP
    },
    streetViewControlOptions: {
        position: google.maps.ControlPosition.LEFT_TOP
    }
  });
map.mapTypes.set('usroadatlas', usRoadMapType);
map.setMapTypeId('usroadatlas');
  var contentString = '';
  
  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
  var image = 'http://icons.iconarchive.com/icons/paomedia/small-n-flat/48/map-marker-icon.png';
  var marker = new google.maps.Marker({
    position: uluru,
    map: map,
    icon: image,
    title: 'Uluru (Ayers Rock)'
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
   marker.addListener('click', function() {
    map.setZoom(14);
    map.setCenter(marker.getPosition());
  });
}
google.maps.event.addDomListener(window, "load", initMap);
window.onorientationchange = function(){window.location.reload();};



});
}

