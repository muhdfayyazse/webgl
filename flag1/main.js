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

    const vertices = [];
				const divisions = 50;

				for ( let i = 0; i <= divisions; i ++ ) {

					const v = ( i / divisions ) * ( Math.PI * 2 );

					const x = Math.sin( v );
					const z = Math.cos( v );

					vertices.push( x, 0, z );

				}

				const geometry = new THREE.BufferGeometry();
				geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );
    const material = new THREE.LineBasicMaterial( {
        color: Math.random() * 0xffffff,
        linewidth: 10
    } );
    const line = new THREE.Line( geometry, material );
    //line.scale.setScalar( i / 3 );
    scene.add( line );






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