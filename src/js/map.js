function initialize() {
  // Create an array of styles.
  var styles = [
    {
        "featureType": "all",
        "elementType": "all",
        "stylers": [
            {
                "invert_lightness": true
            },
            {
                "saturation": 10
            },
            {
                "lightness": 30
            },
            {
                "gamma": 0.5
            },
            {
                "hue": "#435158"
            }
        ]
    }
]
  var styledMap = new google.maps.StyledMapType(styles,
    {name: "Styled Map"});

  var mapOptions = {
    zoom: 11,
    center: new google.maps.LatLng(50.433433, 30.522146),
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    }
  };
  var map = new google.maps.Map(document.getElementById('map'),
    mapOptions);

  var place = {lat: 50.433433, lng: 30.522146};
  var marker = new google.maps.Marker({
      position: place,
      map: map,
      title: 'VR Conference',
    });
  var infowindow = new google.maps.InfoWindow({
    content: '<div style="color: black"><p><b>VR Conference 2017</b></p><span>Червоноармійська вулиця, 55А</span></div>'
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
  marker.setIcon('http://maps.google.com/mapfiles/ms/icons/blue-dot.png');
  marker.setMap(map);
  map.mapTypes.set('map_style', styledMap);
  map.setZoom(14);
  map.setMapTypeId('map_style');
}