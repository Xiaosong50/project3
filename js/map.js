var map;
function initMap()
{
  map=new google.maps.Map(document.getElementById("map"), {
    center: {lat: 41.83145223134603, lng: -87.62722189684784},
    zoom: 10
  });
  
  var locationButton=document.getElementById("location");
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
            map:map,
          });
          map.setZoom(17);
        }
      )
    }
  });
  
  var TrafficButton=document.getElementById("trafficLayer");
  var TrafficRecord = 0;
  var TransitButton=document.getElementById("transitLayer");
  var TransitRecord = 0;
  var BicyclingButton=document.getElementById("bikeLayer");
  var BicyclingRecord = 0;
  const trafficLayer = new google.maps.TrafficLayer();
  const transitLayer = new google.maps.TransitLayer();
  const bikeLayer = new google.maps.BicyclingLayer();
  
  TrafficButton.addEventListener("click",()=>{
    if(TrafficRecord==0){
      trafficLayer.setMap(map);
      TrafficRecord=1;
    } else{
      trafficLayer.setMap(null);
      TrafficRecord=0;
    }
  });
  
  TransitButton.addEventListener("click",()=>{
    if(TransitRecord==0){
      transitLayer.setMap(map);
      TransitRecord=1;
    } else{
      transitLayer.setMap(null);
      TransitRecord=0;
    }
  });
  
  BicyclingButton.addEventListener("click",()=>{
    if(BicyclingRecord==0){
      bikeLayer.setMap(map);
      BicyclingRecord=1;
    } else{
      bikeLayer.setMap(null);
      BicyclingRecord=0;
    }
  });
  
}
window.initMap=initMap;


