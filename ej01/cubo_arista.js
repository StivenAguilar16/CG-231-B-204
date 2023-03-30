//Nestor stiven aguilar garzon - 6000423
     

  //Metodo para crear una escena y color de la misma
        var scene = new THREE.Scene();
        scene.background = new THREE.Color(0xFFFFFF);

        //Metodo para añadir una camara a la escena
        var camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth/window.innerHeight
        );

        //Parametros de rotacion y posicion de la camara

        camera.position.z = 8;
        camera.rotation.x = -0.30;
        camera.position.x = 2.5;
        camera.position.y = 5;

        //renderer
        var renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        //Metodo para añadir una geometria (cubo) y material a la escena 
        var geometry = new THREE.BoxGeometry(2,2,2);
        var material = new THREE.MeshBasicMaterial({color: 0xF7F305, wireframe: false});
        var cube = new THREE.Mesh(geometry, material);

        scene.add(cube);

        //Metodo para añadir una geometria (cubo) y material a la escena 
        var geometry2 = new THREE.BoxGeometry(1,1,1);
        var material2 = new THREE.MeshBasicMaterial({color: 0x3CFA73, wireframe: false});
        var cube2 = new THREE.Mesh(geometry2, material2);

        scene.add(cube2);

        //Metodo para añadir una geometria (cubo) y material a la escena 
        var geometry3 = new THREE.BoxGeometry(0.5,0.5,0.5);
        var material3 = new THREE.MeshBasicMaterial({color: 0x04ECFA, wireframe: false});
        var cube3 = new THREE.Mesh(geometry3, material3);

        scene.add(cube3);

        //Metodo para crear la plano cartesiano en la escena

        const axesHelper = new THREE.AxesHelper(10);
        scene.add( axesHelper );

        //Metodo para crear la maya en la escena
        const size = 100;
        const divisions = 50;
        const gridHelper = new THREE.GridHelper( size, divisions );
        scene.add( gridHelper );
    
        //funcion para ubicar las respectivas geometrias
        var animate = function(){
            requestAnimationFrame(animate);

            cube.position.x=1;
            cube.position.y=1;
            cube.position.z=1;

            cube2.position.x=1;
            cube2.position.y=2.5;
            cube2.position.z=1;

            cube3.position.x=1;
            cube3.position.y=3.25;
            cube3.position.z=1;


            renderer.render(scene, camera);

        }

        animate();