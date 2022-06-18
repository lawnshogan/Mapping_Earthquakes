// Add console.log to check to see if our code is working.
// The console.log() function with the phrase "working" inside the parentheses will 
// help us confirm that our logic.js file is being accessed in the console on Chrome.
console.log("working");

// Create the map object with a center and zoom level.
// The setView() method sets the view of the map with a geographical center, 
// where the first coordinate is latitude (40.7) and the second is longitude (-94.5). We set the zoom level of "4" on a scale 0–18.
let map = L.map('mapid').setView([37.6213, -122.3790], 5);
//  Add a marker to the map for Los Angeles, California.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);

/* // Add circle marker
L.circle([34.0522, -118.2437], {
  radius: 300,
  color: "black",
  fillColor: '#ffffa1'
}).addTo(map); */

// Coordinates for each point to be used in the polyline.
let line = [
  [33.9416, -118.4085],
  [37.6213, -122.3790],
  [40.7899, -111.9791],
  [47.4502, -122.3088]
];

// Create a polyline using the line coordinates and make the line yellow.
L.polyline(line, {
  color: "yellow"
}).addTo(map);

// Get data from cities.js
let cityData = cities;

// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
  console.log(city)
  L.circleMarker(city.location, {
    radius:city.population/100000
  })
  .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
.addTo(map);
});


  // Tile Layer - used to load and display a tile layer on the map (SEE https://leafletjs.com/reference.html#tilelayer)
  // We create the tile layer that will be the background of our map.
  // Dark mode - replace the "streets-v11" in our tileLayer() code with "dark-v10" to look like the following:
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
   });
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);