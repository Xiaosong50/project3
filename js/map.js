var map;
function initMap()
{
  map=new google.maps.Map(document.getElementById("map"), {
    center: {lat: 41.83145223134603, lng: -87.62722189684784},
    zoom: 15
  });
}
window.initMap=initMap;


