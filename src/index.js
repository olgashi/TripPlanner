console.log("Hello from JavaScript");
const buildMarker = require('./marker');
console.log('BUILDMARKER', buildMarker);
const mapboxgl = require("mapbox-gl");
//console.log(mapboxgl)

mapboxgl.accessToken = "pk.eyJ1IjoiYWxleGJhcmJlciIsImEiOiJjanYyams1bWMyNWJ5NGVzZHFmdXN4a3EyIn0.CzoEZKNCmAqkFPsspFAm6w";

const map = new mapboxgl.Map({
    container: "map",
    center: [-87.6354, 41.8885], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
    zoom: 12, // starting zoom
    style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const marker = buildMarker('hotel', [-87.6354, 41.8885] );
marker.addTo(map);

// const markerDomEl = document.createElement("div"); // Create a new, detached DIV
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
//
// new mapboxgl.Marker(markerDomEl).setLngLat([-87.641, 41.895]).addTo(map); // [-87.641, 41.895] for Chicago

