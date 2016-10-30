var map = L.map('map', {
	crs: L.CRS.Simple,
	minZoom: -1,
	zoom: 3
});

L.MakiMarkers.accessToken = "pk.eyJ1IjoiZG91Z2llZnJlc2gxMjMzIiwiYSI6ImNpdW92c3dhMDAxbWsycG1sOXhlb2N6OHEifQ.7Wyqm5l4bBBeEkciMvlUnA";

// A few different markers defined for use in the "Add Markers" Section
var city = L.MakiMarkers.icon({icon: "warehouse", color: "#09B", size: "m"});
var town = L.MakiMarkers.icon({icon: "town", color: "#b0b", size: "m"});
var village = L.MakiMarkers.icon({icon: "village", color: "#b0b", size: "m"});
var farm = L.MakiMarkers.icon({icon: "farm", color: "#b0b", size: "m"});

//Set your bounds  (The Resolution of the picture)
var bounds = [[0, 0], [1413, 1600]];

//Set your min / max bounds, in this case you can scroll 200 
//pixels off the map before it'll snap back
var maxBounds = [[-200, -200], [1426, 2036]];

// Use your own homebrew map image
var image = L.imageOverlay('img/Water_Shallow.jpg', bounds).addTo(map);



// Coordinates for different Markers
// Note:  IT USES Y,X  instead of the regular X,Y Format,  
//and goes from the bottom left corner of the map as the origin

var Barad_Aeled = L.latLng([740, 666]);
var Test_Marker = L.latLng([1413-540, 1480]);



// Add markers to the map
// Use this same format for any additional markers you'd like
// Make sure to change what sidebar sets it's content to, 
// for the different town / marker descriptions'

L.marker(Barad_Aeled, {icon: city}).addTo(map).on('click', function () {
	sidebar.setContentHtml('/markers/barad_aeled');
	if (sidebar.isVisible() === false) {
		sidebar.show();
    }
});

L.marker(Test_Marker, {icon: town}).addTo(map).on('click', function () {
	sidebar.setContentHtml('/markers/Test_Marker');
	if (sidebar.isVisible() === false) {
		sidebar.show();
    }
});



//Close sidebar if you just click on the map (an not on a marker)
map.on('click', function () {
	sidebar.hide();
});
map.setMaxBounds(maxBounds);
map.fitBounds(bounds);


// Initiate the sidebar
var sidebar = L.control.sidebar('sidebar', {
	position: 'left',
	autoPan: false,
	closebutton: true
});
map.addControl(sidebar);

