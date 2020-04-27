var MAP_WIDTH  = 800;
var MAP_HEIGHT = 600;

var mapContainer = document.getElementById("map");
// Create the canvas for the map
var map = new Raphael(mapContainer, MAP_WIDTH, MAP_HEIGHT);

// Set the viewbox of the svg map
map.setViewBox(0, 0, 3507,2480, false);
var regions = {};

// Create all the paths of the svg
data.forEach(function(item) {
    regions[item.id] = map.path(item.path);
});

var style = {
  fill: "#ddd",
  stroke: "#aaa",
  "stroke-width": 1,
  "stroke-linejoin": "round",
  cursor: "pointer"
};

var hoverStyle = {
  fill: "#A8BED5"
}

var animationSpeed = 250;

var hoverStyle = {
  fill: "#A8BED5"
}

for(var regionName in regions) {
    (function (region) {
        region.attr(style);
        var tooltip = document.querySelectorAll('.coupontooltip');

        document.addEventListener('mousemove', fn, false);
        
        function fn(e) {
            for (var i=tooltip.length; i--;) {
                tooltip[i].style.left = e.pageX + 'px';
                tooltip[i].style.top = e.pageY + 'px';
            }
        }

        region[0].addEventListener("mouseover", function() {
            region.animate(hoverStyle, animationSpeed);
        }, true);

        region[0].addEventListener("mouseout", function() {
          region.animate(style, animationSpeed);
        }, true);
        
        region[0].addEventListener("click", function(e) {
          
        }, true);

    })(regions[regionName]);
}