"use strict";

var calcVertexCylinder = function(i, j, r, ROWS, COLUMNS){
  var theta = Math.PI / ROWS;
  var phi = theta = 2 * Math.PI / COLUMNS;
  return [0.1 * Math.cos(i * phi)+0.3,
          r * Math.cos(j * theta)+0.6,
          r * Math.sin(j * phi)];
}

var calcCircle1 = function(){
  var returnArray = []
  var circlePoints = 40;
  var theta = Math.PI * 2 /circlePoints;
  for (var i = 0; i < circlePoints; i++){
    returnArray.push([0.39, Math.sin(theta * i)/10 + 0.6, Math.cos(theta * i)/10]);
  }
  return returnArray;
}

var calcCircle2 = function(){
  var returnArray = []
  var circlePoints = 40;
  var theta = Math.PI * 2 /circlePoints;
  for (var i = 0; i < circlePoints; i++){
    returnArray.push([0.21, Math.sin(theta * i)/10 + 0.6, Math.cos(theta * i)/10]);
  }
  return returnArray;
}

function chesttop(r, ROWS, COLUMNS){
  var vertices = [];
  for (var i = 0; i <= ROWS - 1; i++) {
    for (var j = 0; j <= COLUMNS - 1; j++) {
      var va = calcVertexCylinder(i, j, r, ROWS, COLUMNS);
      var vb = calcVertexCylinder(i + 1, j, r, ROWS, COLUMNS);
      var vc = calcVertexCylinder(i + 1, j + 1, r, ROWS, COLUMNS);
      var vd = calcVertexCylinder(i, j + 1, r, ROWS, COLUMNS);
      vertices.push.apply(vertices, [].concat(va).concat(vb).concat(vc).concat(va).concat(vc).concat(vd));
    }
  }

  var circleArray = [];
  circleArray = calcCircle1();
  for(var i = 0; i < circleArray.length - 1; i++){
    vertices.push.apply(vertices, [].concat(circleArray[i]).concat([0.39,0.6,0]).concat(circleArray[i+1]));
    //n_out.push.apply(n_out, triangleNormals(circleArray[i], [0,1.2,0], circleArray[i+1]));
  }
  vertices.push.apply(vertices, [].concat(circleArray[circleArray.length -1]).concat([0.39,0.6,0]).concat(circleArray[0]));
  //n_out.push.apply(n_out, triangleNormals(circleArray[circleArray.length-1], [0,1.2,0], circleArray[0]));
  circleArray = calcCircle2();
  for(var i = 0; i < circleArray.length - 1; i++){
    vertices.push.apply(vertices, [].concat(circleArray[i]).concat([0.21,0.6,0]).concat(circleArray[i+1]));
    //n_out.push.apply(n_out, triangleNormals(circleArray[i], [0,1.2,0], circleArray[i+1]));
  }
  vertices.push.apply(vertices, [].concat(circleArray[circleArray.length -1]).concat([0.21,0.6,0]).concat(circleArray[0]));
  //n_out.push.apply(n_out, triangleNormals(circleArray[circleArray.length-1], [0,1.2,0], circleArray[0]));



  return {
    vertices: vertices,
    normals: vertices,
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
