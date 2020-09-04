// import React, { useState, useEffect } from "react";
// import Peasy.*;


// const store = createStore({
//     todos: {
//       items: ['Create store', 'Wrap application', 'Use store'],
//       add: action((state, payload) => {
//         state.items.push(payload)
//       })
//     }
//   });


//   function TodoList() {
//     const todos = useStoreState(state => state.todos.items)
//     const add = useStoreActions(actions => actions.todos.add)
//     return (
//       <div>
//         {todos.map((todo, idx) => <div key={idx}>{todo}</div>)}
//         <AddTodo onAdd={add} />
//       </div>
 



// let x = 0.01;
// let y = 0;
// let z = 0;

// let a = 10;
// let b = 28;
// let c = 8.0 / 3.0;

// let points = new Array();

// function setup() {
//   createCanvas(800, 600, WEBGL);
//   colorMode(HSB);
// }

// function draw() {
//   background(0);

//   let dt = 0.01;
//   let dx = a * (y - x) * dt;
//   let dy = (x * (b - z) - y) * dt;
//   let dz = (x * y - c * z) * dt;
//   x = x + dx;
//   y = y + dy;
//   z = z + dz;

//   points.push(new p5.Vector(x, y, z));

//   translate(0, 0, -80);
//   let camX = map(mouseX, 0, width, -200, 200);
//   let camY = map(mouseY, 0, height, -200, 200);
//   camera(camX, camY, height / 2.0 / tan((PI * 30.0) / 180.0), 0, 0, 0, 0, 1, 0);
//   //translate(width/2, height/2);
//   scale(5);
//   stroke(255);
//   noFill();

//   let hu = 0;
//   beginShape();

//   for (let v of points) {
//     stroke(hu, 255, 255);
//     vertex(v.x, v.y, v.z);
//     //var offset = p5.Vector.random3D();
//     //offset.mult(0.1);
//     //v.add(offset);

//     hu += 1;
//     if (hu > 255) {
//       hu = 0;
//     }
//   }
//   endShape();

//   //println(x,y,z);
// }


// import peasy.*;

// float x = 0.01;
// float y = 0;
// float z = 0;

// float a = 10;
// float b = 28;
// float c = 8.0/3.0;

// ArrayList<PVector> points = new ArrayList<PVector>();

// PeasyCam cam;

// void setup() {
//   size(800, 600, P3D);
//   colorMode(HSB);
//   cam = new PeasyCam(this, 500);
// }

// void draw() {
//   background(0);
//   float dt = 0.01;
//   float dx = (a * (y - x))*dt;
//   float dy = (x * (b - z) - y)*dt;
//   float dz = (x * y - c * z)*dt;
//   x = x + dx;
//   y = y + dy;
//   z = z + dz;

//   points.add(new PVector(x, y, z));

//   translate(0, 0, -80);
//   //translate(width/2, height/2);
//   scale(5);
//   stroke(255);
//   noFill();

//   float hu = 0;
//   beginShape();
//   for (PVector v : points) {
//     stroke(hu, 255, 255);
//     vertex(v.x, v.y,v.z);
//     //PVector offset = PVector.random3D();
//     //offset.mult(0.1);
//     //v.add(offset);

//     hu += 0.1;
//     if (hu > 255) {
//       hu = 0;
//     }
//   }
//   endShape();


//   //println(x,y,z);
// }

//     )
//   }