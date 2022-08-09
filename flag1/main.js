function init() {

    container = document.getElementById( 'container' );

    scene = new THREE.Scene();
    scene.background = new THREE.Color( 0x8FBCD4 );

    camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 20 );
    camera.position.z = 8;
    scene.add( camera );

    //scene.add( new THREE.AmbientLight( 0x8FBCD4, 0.4 ) );

    const pointLight = new THREE.PointLight( 0xffffff, 1 );
    camera.add( pointLight );


    //White Box
    const whiteBox = new THREE.BoxGeometry( 1.5, 2.5, 0 );
    const whiteMat = new THREE.MeshPhongMaterial( {
        color: 0xFFFFFF,
        flatShading: true
    } );

    whiteMesh = new THREE.Mesh( whiteBox, whiteMat );
    scene.add( whiteMesh );
    whiteMesh.position.set(-3.75, 0.5, 1);

    //Green Box
    const greenBox = new THREE.BoxGeometry( 4, 2.5, 0 );
    const greenMat = new THREE.MeshPhongMaterial( {
        color: 0x023414,
        flatShading: true
    } );

    greenMesh = new THREE.Mesh( greenBox, greenMat );
    scene.add( greenMesh );
    greenMesh.position.set(-1, 0.5, 1);


    //while Circle     
    const whiteCir = new THREE.CircleGeometry( 0.9, 100 );
    const whiteCirMat = new THREE.MeshPhongMaterial( {
        color: 0xFFFFFF,
        flatShading: true
    } );

    whiteCirMesh = new THREE.Mesh( whiteCir, whiteCirMat );
    scene.add( whiteCirMesh );
    whiteCirMesh.position.set(-1, 0.5, 1);



    //Green Circle     
    const greenCir = new THREE.CircleGeometry( 0.8, 100 );
    const greenCirMat = new THREE.MeshPhongMaterial( {
        color: 0x023414,
        flatShading: true
    } );

    greenCirMesh = new THREE.Mesh( greenCir, greenCirMat );
    scene.add( greenCirMesh );
    greenCirMesh.position.set(-0.8, 0.6, 1);

    //star     

    let points = [];
    var finalPoints = [];
    var x;
    var y;
    for (let i = 1; i <= 6 ; i++) {
        let t = 2*(Math.PI/5) * i;
        x = 2*(Math.cos(t));
        y = 2*(Math.sin(t)) ;
        points.push( new THREE.Vector3((x/8) -0.3, (y/8) + 0.28, 5 ) );

    }
    finalPoints.push(points[0]);
    finalPoints.push(points[2]);
    finalPoints.push(points[4]);
    finalPoints.push(points[1]);
    finalPoints.push(points[3]);
    finalPoints.push(points[0]);

    const material = new THREE.LineBasicMaterial( { color: 'white' , linewidth : 5} );
    //const material = new THREE.MeshFaceMaterial( { color: 0xFFFFFF } );
    //const material = new THREE.MeshFaceMaterial([new THREE.MeshBasicMaterial({color: 0x00ff00})]);
    //const material = new THREE.MeshBasicMaterial( { color: 0xFFFFFF} );

    const geometry = new THREE.BufferGeometry().setFromPoints( finalPoints );
    const star = new THREE.Line( geometry, material );
    scene.add(star);



    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setAnimationLoop( function () {
        renderer.render( scene, camera );
    });
    container.appendChild( renderer.domElement );
    window.addEventListener( 'resize', onWindowResize );
}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}

init();