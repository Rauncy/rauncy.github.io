const emptyMap

var mapDesigner = {
  canvas : null,
  map : []
};

function startMapDesigner(){
  mapDesigner.canvas = document.getElementById("designerCanvas");
  map = loadFromMapArray();
}

function loadMapFromString(mapString){
  let map = [];

  //Decode mapString

  return loadFromMapArray(map);
}

function loadMapFromArray(map){
  //Read array

}

function setup(){
  //Setup globals
}
