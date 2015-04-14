L.mapbox.accessToken = 'pk.eyJ1IjoibmFzaXItMTQyNSIsImEiOiJDd3BsWE1zIn0.N3Q9iu6yZ9DLMEaIJFIXJA';
var map = L.mapbox.map('map', 'nasir-1425.lmddb8dk')
          .setView([12.955880713641998, 77.59712219238281], 12);

 var myLayer = L.mapbox.featureLayer().addTo(map);
 var routeLayer = L.mapbox.featureLayer().addTo(map);

L.marker([12.955880713641998,77.59712219238281]).addTo(map);
L.marker([12.860841117041632,77.78646469116211]).addTo(map);


myLayer.on('layeradd', function(e) {
  var marker = e.layer;
  var feature = marker.feature;
  marker.setIcon(L.icon(feature.properties.icon));
});

/*var geojson = [
  {
    "type": "FeatureCollection",
    "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [77.59712219238281,12.955880713641998]
       },

      "properties": {
        "title": "Shantinagar",
        "marker-color": "#9c89cc",
        "marker-size": "medium",
        "marker-symbol": "building"
       }
    },

    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [77.78646469116211,12.860841117041632]
      },

      "properties": {
        "title": "Sarjapur",
        "marker-color": "#9c89cc",
        "marker-size": "medium",
        "marker-symbol": "town-hall"
      }
    },

	  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [77.66475677490234,12.920747045529767]
    },
    "properties": {
      "icon": {
          "iconUrl": "http://www.gifandgif.eu/animated_gif/Dots/Animated Gif Dots (13).gif",
          "iconSize": [20, 20], // size of the icon
          "iconAnchor": [25, 25], // point of the icon which will correspond to marker's location
          "popupAnchor": [0, -25], // point from which the popup should open relative to the iconAnchor
          "className": "dot"
      }
    }
  },
    {
      "type": "Feature",
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [77.59815216064453,12.955546130632674],
          [77.60553359985352,12.955044255275915],
          [77.60913848876953,12.93982022236821],
          [77.6154899597168,12.92894534401738],
          [77.62956619262695,12.924260634987855],
          [77.63660430908203,12.925264508609215],
          [77.64123916625977,12.923758696663581],
          [77.64656066894531,12.924929884517265],
          [77.65480041503906,12.923758696663581],
          [77.66475677490234,12.920747045529767],
          [77.67282485961914,12.917233406640479],
          [77.67557144165039,12.91438899610541],
          [77.68037796020508,12.913217758826503],
          [77.68793106079102,12.909369369120046],
          [77.69960403442383,12.905855570253756],
          [77.71007537841795,12.900333786561864],
          [77.72054672241211,12.896652529716947],
          [77.7279281616211,12.89246921756525],
          [77.73290634155273,12.8891225175057],
          [77.73977279663086,12.88694713847807],
          [77.7499008178711,12.88410238354478],
          [77.75693893432617,12.881926960913502],
          [77.76517868041992,12.87774340276273],
          [77.7663803100586,12.87155160853848],
          [77.7670669555664,12.868371979107371],
          [77.77238845825195,12.861845245044176],
          [77.78594970703125,12.860506406814615]
	]
      },
      "properties": {
        "stroke": "#fa946e",
        "stroke-opacity": 1,
        "stroke-width": 6
      }
    }
  ]
}

];
*/



var geojson = [
  /*{
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [77.59712219238281,12.955880713641998]
    },
    "properties": {
      "marker-color": "#3ca0d3",
      "marker-size": "large",
      "marker-symbol": "rocket"
    }
  },*/
  /*{
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [77.78646469116211,12.860841117041632]
    },

    "properties": {
      "icon": {
          "iconUrl": "http://www.gifandgif.eu/animated_gif/Road_Signs/Animated Gif Road Signs (10).gif",
          "iconSize": [30, 30], // size of the icon
          "iconAnchor": [25, 25], // point of the icon which will correspond to marker's location
          "popupAnchor": [0, -25], // point from which the popup should open relative to the iconAnchor
          "className": "dot"
      }
    }
  },*/
 {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [77.67557144165039,12.91438899610541]
    },
    "properties": {
      "icon": {
          "iconUrl": "http://www.gifandgif.eu/animated_gif/Dots/Animated Gif Dots (13).gif",
          "iconSize": [20, 20], // size of the icon
          "iconAnchor": [25, 25], // point of the icon which will correspond to marker's location
          "popupAnchor": [0, -25], // point from which the popup should open relative to the iconAnchor
          "className": "dot"
      }
    }
  },




  /*{
    "type": "Feature",
    "geometry": {
      "type": "LineString",
      "coordinates": [
        [77.59815216064453,12.955546130632674],
        [77.60553359985352,12.955044255275915],
        [77.60913848876953,12.93982022236821],
        [77.6154899597168,12.92894534401738],
        [77.62956619262695,12.924260634987855],
        [77.63660430908203,12.925264508609215],
        [77.64123916625977,12.923758696663581],
        [77.64656066894531,12.924929884517265],
        [77.65480041503906,12.923758696663581],
        [77.66475677490234,12.920747045529767],
        [77.67282485961914,12.917233406640479],
        [77.67557144165039,12.91438899610541],
        [77.68037796020508,12.913217758826503],
        [77.68793106079102,12.909369369120046],
        [77.69960403442383,12.905855570253756],
        [77.71007537841795,12.900333786561864],
        [77.72054672241211,12.896652529716947],
        [77.7279281616211,12.89246921756525],
        [77.73290634155273,12.8891225175057],
        [77.73977279663086,12.88694713847807],
        [77.7499008178711,12.88410238354478],
        [77.75693893432617,12.881926960913502],
        [77.76517868041992,12.87774340276273],
        [77.7663803100586,12.87155160853848],
        [77.7670669555664,12.868371979107371],
        [77.77238845825195,12.861845245044176],
        [77.78594970703125,12.860506406814615]
      ]
    },

    "properties": {
      "stroke": "#fa946e",
      "stroke-opacity": 1,
      "stroke-width": 6
    }
  } */


];
myLayer.setGeoJSON(geojson);


var routegeojson = [
  {
    "type": "Feature",
    "geometry": {
      "type": "LineString",
      "coordinates": [
        [77.59815216064453,12.955546130632674],
        [77.60553359985352,12.955044255275915],
        [77.60913848876953,12.93982022236821],
        [77.6154899597168,12.92894534401738],
        [77.62956619262695,12.924260634987855],
        [77.63660430908203,12.925264508609215],
        [77.64123916625977,12.923758696663581],
        [77.64656066894531,12.924929884517265],
        [77.65480041503906,12.923758696663581],
        [77.66475677490234,12.920747045529767],
        [77.67282485961914,12.917233406640479],
        [77.67557144165039,12.91438899610541],
        [77.68037796020508,12.913217758826503],
        [77.68793106079102,12.909369369120046],
        [77.69960403442383,12.905855570253756],
        [77.71007537841795,12.900333786561864],
        [77.72054672241211,12.896652529716947],
        [77.7279281616211,12.89246921756525],
        [77.73290634155273,12.8891225175057],
        [77.73977279663086,12.88694713847807],
        [77.7499008178711,12.88410238354478],
        [77.75693893432617,12.881926960913502],
        [77.76517868041992,12.87774340276273],
        [77.7663803100586,12.87155160853848],
        [77.7670669555664,12.868371979107371],
        [77.77238845825195,12.861845245044176],
        [77.78594970703125,12.860506406814615]
      ]
    },

    "properties": {
      "stroke": "#fa946e",
      "stroke-opacity": 1,
      "stroke-width": 6
    }
  }

];
routeLayer.setGeoJSON(routegeojson);
