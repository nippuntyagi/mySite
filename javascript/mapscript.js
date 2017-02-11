
function myMap() {
  var myCenter = new google.maps.LatLng(28.976130, 77.026319);
  var mapTypeId = google.maps.MapTypeId.ROADMAP;
  var mapCanvas = document.getElementById("map");
  var mapOptions = {center: myCenter, zoom: 18, mapTypeId};
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({position:myCenter});
  marker.setMap(map);
  google.maps.event.addListener(marker,'click',function() {
    var infowindow = new google.maps.InfoWindow({
      content:"Nippun Tyagi <br> <b>Web Developer</b> <br> Email: nippuntyagi@gmail.com"
    });
  infowindow.open(map,marker);
  });
}