
//const kata = { lat: -12.1045677, lng: -76.9630828};
//let myLocation;
var markerUbication;
var markerDestiny;
var flightPath;
var map;
//var rutas = [];

const initMap = (mapa,latOrigen,lngOrigen,latDestino,lngDestino,array) => {


  var centro = {
    lat: latOrigen,
    lng: lngOrigen
  };

  var destiny = {
    lat: latDestino,
    lng: lngDestino
  };

  map = new google.maps.Map(document.getElementById(mapa), {
    zoom: 19,
    center: centro,
    disableDefaultUI: true
  });


  var iconBase = 'assets/img/';
    markerUbication = new google.maps.Marker({
      position: centro,
      map: map,
      icon: iconBase + 'ubicacion-mapa.png',
      draggable: true,
      animation: google.maps.Animation.DROP,
    });



    markerDestiny = new google.maps.Marker({
      position: destiny,
      map: map,
      icon: iconBase + 'tu-llegada.png',
      draggable: true,
      animation: google.maps.Animation.DROP,
    });


  var flightPlanCoordinates = array;

    /*{lat: -12.103676, lng: -76.9633296},
    {lat: -12.1042031, lng: -76.9629622},
    {lat: -12.1043683, lng: -76.9629809},
    {lat: -12.1044444, lng: -76.9630909},
    {lat: -12.1045677, lng: -76.9630828},*/


  // flightPlanCoordinates = array;
  console.log(flightPlanCoordinates);
  console.log(array);

   flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2
  });

//  flightPath.setMap(map);
  addLine();

};

function addLine() {
  flightPath.setMap(map);
}
/*
function removeLine() {
  flightPath.setMap(null);
}*/



/* Con localización

var functionLocalization = function(position) {

    var pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };

    //map.setCenter(pos);
    map.setZoom(18);

    marker = new google.maps.Marker({
      position: pos,
      map: map
    });
  };

  var functionNotFounded = function(error) {
    alert("Encontramos un inconveniente para ver tu ubicación");
  };

  if (navigator.geolocation) {
    myLocation = navigator.geolocation.getCurrentPosition(functionLocalization, functionNotFounded);
    return myLocation;
  }*/