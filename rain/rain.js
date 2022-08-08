var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
    159, window.innerWidth/window.innerHeight,
    0.5, 1000
);
camera.position.z = 5;

var renderer = new THREE.WebGLRenderer({
    alpha : true,
    // antialias : true
});

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

function drawRain(){
    
    const material = new THREE.LineBasicMaterial( { color: 'green' } );
    let points;
    for (let i = 0; i < 200 ; i++){
        points = []
        x = Math.random()*100 - Math.random()*100
        y = Math.random()*100 - Math.random()*100
        points.push( new THREE.Vector3(x, y, 0 ))
        points.push( new THREE.Vector3(x-1, y-1, 0 ))
        const geometry = new THREE.BufferGeometry().setFromPoints( points );
        const line = new THREE.Line( geometry, material );
        scene.add(line);
        
         renderer.render(scene, camera);


    }


}
 


function animate(){
    requestAnimationFrame(animate);
    drawRain()
    while(scene.children.length > 0){ 
        scene.remove(scene.children[0]); 
    }

}

animate();