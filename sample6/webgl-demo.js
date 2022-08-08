var scene = new THREE.Scene(); 
var camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 1, 1000); 

camera.position.set(0, 0, 10); 
camera.lookAt(scene.position); 
var renderer = new THREE.WebGLRenderer(); 
renderer.setSize(innerWidth, innerHeight); 
document.body.appendChild(renderer.domElement); 
var gh = new THREE.GridHelper(10, 10, "black", "black"); 
gh.rotation.x = Math.PI * 0.5; 
gh.position.z = 0.01; scene.add(gh); 
var canvas = document.createElement("glcanvas"); 
var map = new THREE.CanvasTexture(canvas); 
canvas.width = 512; 
canvas.height = 512; 
var ctx = canvas.getContext("2d"); 
ctx.fillStyle = "gray"; 
ctx.fillRect(0, 0, canvas.width, canvas.height); 

function drawRectangle(x, y, width, height, color) { 
  let xUnit = canvas.width / 10; 
  let yUnit = canvas.height / 10; 
  let x_ = x * xUnit; let y_ = y * yUnit; 
  let w_ = width * xUnit; 
  let h_ = height * yUnit; 
  ctx.fillStyle = color; 
  ctx.fillRect(x_, y_, w_, h_); 
  map.needsUpdate = true; 
} 

drawRectangle(1, 1, 4, 3, "aqua"); 
drawRectangle(0, 6, 6, 3, "magenta"); 
drawRectangle(3, 2, 6, 6, "yellow"); 

var plane = new THREE.Mesh(new THREE.PlaneBufferGeometry(10, 10), 
  new THREE.MeshBasicMaterial({ color: "white", map: map })
); 

scene.add(plane); 
renderer.setAnimationLoop(() => { renderer.render(scene, camera); });
