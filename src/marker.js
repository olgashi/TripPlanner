const mapboxgl = require('mapbox-gl');


const iconURLs = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activities: "http://i.imgur.com/WbMOfMl.png"
};

const buildMarker = function(type,coords){
    return(new mapboxgl.Marker(iconURLs.type).setLngLat(coords).addTo(map))
}

const markerDomEl = document.createElement('div'); // Create a new, detached DIV
markerDomEl.style.width = '32px';
markerDomEl.style.height = '39px';
markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';

//new mapboxgl.Marker(markerDomEl).setLngLat([-87.641, 41.895]).addTo(map); // [-87.641, 41.895] for Chicago


const hotels = document.createElement("div"); // Create a new, detached DIV
hotels.style.width = "32px";
hotels.style.height = "39px";
hotels.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";

module.exports = buildMarker;
