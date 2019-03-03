"use strict";

var leafFace = function(v_out, n_out, uv, a, b, c, d){
  var va = [uv[ 3 * a], uv[ 3 * a + 1], uv[ 3 * a + 2]];
  var vb = [uv[ 3 * b], uv[ 3 * b + 1], uv[ 3 * b + 2]];
  var vc = [uv[ 3 * c], uv[ 3 * c + 1], uv[ 3 * c + 2]];
  var vd = [uv[ 3 * d], uv[ 3 * d + 1], uv[ 3 * d + 2]];

  v_out.push.apply(v_out, [].concat(va).concat(vb).concat(vc).
      concat(va).concat(vc).concat(vd));
  n_out.push.apply(n_out, rectangleNormals(va, vb, vc, vd));
}

function leaf1(){
  var uniq_vertices = [
    -0.07, 1.1, 0.0,
    0.07, 1.1, 0.0,
    0.0, 1.1, 0.3,
    -0.07, 1.15, 0.0,
    0.07, 1.15, 0.0,
    0.0, 1.15, 0.3
  ];

  var v_out = [];
  var n_out = [];

  leafFace(v_out, n_out, uniq_vertices, 0, 1, 2, 0);
  leafFace(v_out, n_out, uniq_vertices, 3, 4, 5, 3);

  leafFace(v_out, n_out, uniq_vertices, 0, 1, 4, 3);
  leafFace(v_out, n_out, uniq_vertices, 0, 2, 5, 3);
  leafFace(v_out, n_out, uniq_vertices, 1, 2, 5, 4);


  return {
    vertices: v_out,
    normals: n_out,
    type: "cube",
    eye: [-.2, .3, .3],
    at: [0, 0, 0],
    up: [0, 1, 0],
    //axis: [.2, .2, .2],
    axis: [0.0,-1.0,0.0],
    theta: 1,
    translate: [0, 0, 0],
    scale: [1, 1, 1],
    ortho: [-1, 1, -1, 1, -1, 1]
  };
}

function leaf2(){
  var uniq_vertices = [
    0.0, 1.1, 0.07,
    0.0, 1.1, -0.07,
    0.3, 1.1, 0.0,
    0.0, 1.15, 0.07,
    0.0, 1.15, -0.07,
    0.3, 1.15, 0.0
  ];

  var v_out = [];
  var n_out = [];

  leafFace(v_out, n_out, uniq_vertices, 0, 1, 2, 0);
  leafFace(v_out, n_out, uniq_vertices, 3, 4, 5, 3);

  leafFace(v_out, n_out, uniq_vertices, 0, 1, 4, 3);
  leafFace(v_out, n_out, uniq_vertices, 0, 2, 5, 3);
  leafFace(v_out, n_out, uniq_vertices, 1, 2, 5, 4);


  return {
    vertices: v_out,
    normals: n_out,
    type: "cube",
    eye: [-.2, .3, .3],
    at: [0, 0, 0],
    up: [0, 1, 0],
    //axis: [.2, .2, .2],
    axis: [0.0,-1.0,0.0],
    theta: 1,
    translate: [0, 0, 0],
    scale: [1, 1, 1],
    ortho: [-1, 1, -1, 1, -1, 1]
  };
}

function leaf3(){
  var uniq_vertices = [
    -0.07, 1.1, 0.0,
    0.07, 1.1, 0.0,
    0.0, 1.1, -0.3,
    -0.07, 1.15, 0.0,
    0.07, 1.15, 0.0,
    0.0, 1.15, -0.3
  ];

  var v_out = [];
  var n_out = [];

  leafFace(v_out, n_out, uniq_vertices, 0, 1, 2, 0);
  leafFace(v_out, n_out, uniq_vertices, 3, 4, 5, 3);

  leafFace(v_out, n_out, uniq_vertices, 0, 1, 4, 3);
  leafFace(v_out, n_out, uniq_vertices, 0, 2, 5, 3);
  leafFace(v_out, n_out, uniq_vertices, 1, 2, 5, 4);


  return {
    vertices: v_out,
    normals: n_out,
    type: "cube",
    eye: [-.2, .3, .3],
    at: [0, 0, 0],
    up: [0, 1, 0],
    //axis: [.2, .2, .2],
    axis: [0.0,-1.0,0.0],
    theta: 1,
    translate: [0, 0, 0],
    scale: [1, 1, 1],
    ortho: [-1, 1, -1, 1, -1, 1]
  };
}

function leaf4(){
  var uniq_vertices = [
    0.0, 1.1, 0.07,
    0.0, 1.1, -0.07,
    -0.3, 1.1, 0.0,
    0.0, 1.15, 0.07,
    0.0, 1.15, -0.07,
    -0.3, 1.15, 0.0
  ];

  var v_out = [];
  var n_out = [];

  leafFace(v_out, n_out, uniq_vertices, 0, 1, 2, 0);
  leafFace(v_out, n_out, uniq_vertices, 3, 4, 5, 3);

  leafFace(v_out, n_out, uniq_vertices, 0, 1, 4, 3);
  leafFace(v_out, n_out, uniq_vertices, 0, 2, 5, 3);
  leafFace(v_out, n_out, uniq_vertices, 1, 2, 5, 4);


  return {
    vertices: v_out,
    normals: n_out,
    type: "cube",
    eye: [-.2, .3, .3],
    at: [0, 0, 0],
    up: [0, 1, 0],
    //axis: [.2, .2, .2],
    axis: [0.0,-1.0,0.0],
    theta: 1,
    translate: [0, 0, 0],
    scale: [1, 1, 1],
    ortho: [-1, 1, -1, 1, -1, 1]
  };
}
