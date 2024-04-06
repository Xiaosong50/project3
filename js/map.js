var map;
function initMap()
{
  map=new google.maps.Map(document.getElementById("map"), {
    center: {lat: 41.83145223134603, lng: -87.62722189684784},
    zoom: 10
  });
  
  var locationButton=document.getElementById("button");
  //locationButton.textContent="Go to my location";
  //locationButton.classList.add("map-button");
  //map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  locationButton.addEventListener("click",()=> {
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(
        (position)=> {
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          map.setCenter(pos);
          var marker=new google.maps.Marker({
            position: pos,
            map:map
          });
          map.setZoom(17);
        }
      )
    }
  });
  
}
window.initMap=initMap;


