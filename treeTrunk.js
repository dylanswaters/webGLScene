"use strict";

var calcVertexTrunk = function(i, j, r, ROWS, COLUMNS){
  var theta = Math.PI / ROWS;
  var phi = theta = 2 * Math.PI / COLUMNS;
  return [r * Math.cos(j * phi),
          0.8 * Math.cos(i * theta) + 0.4,
          r * Math.sin(j * phi)];
}

var calcCircle = function(){
  var returnArray = []
  var circlePoints = 40;
  var theta = Math.PI * 2 /circlePoints;
  for (var i = 0; i < circlePoints; i++){
    returnArray.push([ Math.cos(theta * i)/14, 1.2, Math.sin(theta * i)/14]);
  }
  return returnArray;
}

function treeTrunk(r, ROWS, COLUMNS){
  var vertices = [];
  var n_out = [];
  for (var i = 0; i <= ROWS - 1; i++) {
    for (var j = 0; j <= COLUMNS - 1; j++) {
      var va = calcVertexTrunk(i, j, r, ROWS, COLUMNS);
      var vb = calcVertexTrunk(i + 1, j, r, ROWS, COLUMNS);
      var vc = calcVertexTrunk(i + 1, j + 1, r, ROWS, COLUMNS);
      var vd = calcVertexTrunk(i, j + 1, r, ROWS, COLUMNS);
      vertices.push.apply(vertices, [].concat(va).concat(vb).concat(vc).concat(va).concat(vc).concat(vd));
      //n_out.push.apply(n_out, rectangleNormals(va, vb, vc, vd));
    }
  }

  var circleArray = [];
  circleArray = calcCircle();
  for(var i = 0; i < circleArray.length - 1; i++){
    vertices.push.apply(vertices, [].concat(circleArray[i]).concat([0,1.2,0]).concat(circleArray[i+1]));
    //n_out.push.apply(n_out, triangleNormals(circleArray[i], [0,1.2,0], circleArray[i+1]));
  }
  vertices.push.apply(vertices, [].concat(circleArray[circleArray.length -1]).concat([0,1.2,0]).concat(circleArray[0]));
  //n_out.push.apply(n_out, triangleNormals(circleArray[circleArray.length-1], [0,1.2,0], circleArray[0]));


  return {
    vertices: vertices,
    normals: vertices,//n_out,
    type: "cylinder",
    eye: [-.2, .3, .3],
    at: [0, 0, 0],
    up: [0, 1, 0],
    axis: [0.0, 0.1, 0.0],
    theta: 1,
    translate: [0, 0, 0],
    scale: [1, 1, 1],
    ortho: [-1, 1, -1, 1, -1, 1]
  };
}
