var drawn;
var count = 0;
var map;

function validateMyForm()
{
  if(document.getElementById("email").value == '' ||
    document.getElementById("date_start").value == ''
     || document.getElementById("date_end").value == '')
  {
    alert("Please fill out Email Address and/or Start/End date forms");
    returnToPreviousPage();
    return false;
  }

  if(count == 0)
  { 
    if (!confirm('NOTE: If no bounds drawn on map results will include all data. Continue?'))  
    {
      returnToPreviousPage();
      return false;
    }
  }

  return true;
}

function DrawBox() {

  var nw = document.getElementById("NW").value;
  var se = document.getElementById("SE").value;
  var nw_latlong = nw.split(",");
  var se_latlong = se.split(",");
  var nw_floats = [parseFloat(nw_latlong[0]),parseFloat(nw_latlong[1])];
  var se_floats = [parseFloat(se_latlong[0]),parseFloat(se_latlong[1])];
  if(nw_floats[0] < -90 || nw_floats[0] > 90 || se_floats[0] < -90 || se_floats[0] > 90 ||
    nw_floats[1] < -180 || nw_floats[1] > 180 || se_floats[1] < -180 || se_floats[1] > 180 ) {
    alert("Both bounding box forms must be completed in the correct format before a box can be drawn on map.\nThe correct form is: latitude, longitude \n e.g. 62.1039, -60.8203");
    return;
  }
   var rectangle = new google.maps.Rectangle({
    map: map,
    bounds: {
      north: nw_floats[0],
      south: se_floats[0],
      east: se_floats[1],
      west: nw_floats[1]
    }
  });
  if(count == 1) {
    clear();
  }
  count = 1;
  drawn = rectangle;
  rectangle.setMap(map);
}

function returnToPreviousPage() {
    window.history.back();
}

function clear() {
  drawn.setMap(null);
} 

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 31.3536, lng: -21.7969},
    zoom: 2
  });


  
  var drawingManager = new google.maps.drawing.DrawingManager({
    drawingMode: google.maps.drawing.OverlayType.MARKER,
    drawingControl: true,
    drawingControlOptions: {
      position: google.maps.ControlPosition.TOP_CENTER,
      drawingModes: [
        google.maps.drawing.OverlayType.RECTANGLE,
        google.maps.drawing.OverlayType.MARKER
      ]
    },
    markerOptions: {icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'},
    circleOptions: {
      fillColor: '#ffff00',
      fillOpacity: 1,
      strokeWeight: 5,
      clickable: false,
      editable: true,
      zIndex: 1
    }
  });
  google.maps.event.addListener(drawingManager, 'overlaycomplete', function(e) {
    if(count == 1) {
      clear();
    }
    count = 1;
    drawn = e.overlay;
    if(drawn instanceof google.maps.Rectangle) {
      var ne = drawn.getBounds().getNorthEast();
      var sw = drawn.getBounds().getSouthWest()
      document.getElementById("NW").value = Math.floor(ne.lat()*10000+0.5)/10000 + ', ' + Math.floor(sw.lng()*10000+0.5)/10000;
      document.getElementById("SE").value = Math.floor(sw.lat()*10000+0.5)/10000 + ', ' + Math.floor(ne.lng()*10000+0.5)/10000;
    } else {
      var lat = drawn.getPosition().lat();
      var lng = drawn.getPosition().lng();
      document.getElementById("NW").value = Math.floor(lat*10000+0.5)/10000 + ', ' + Math.floor(lat*10000+0.5)/10000;
      document.getElementById("SE").value = Math.floor(lat*10000+0.5)/10000 + ', ' + Math.floor(lat*10000+0.5)/10000;
    }

  });

  drawingManager.setMap(map);
}