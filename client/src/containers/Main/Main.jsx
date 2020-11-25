import React, {useEffect} from 'react';
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import ThreeGallery from "./../../threeComponents/ThreeGallery/ThreeGallery"

const Main = () => {
    useEffect(() => {
    dimensions()
    }, [])

    function dimensions() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
    100,
    window.innerWidth / window.innerHeight,
    0.1,
    500
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setClearColor("#000000");
    renderer.setSize(window.innerWidth, window.innerHeight);
    // document.body.appendChild( renderer.domElement );
    const container = document.getElementById("myCanvas"); 
    container.appendChild(renderer.domElement);
   
    // this is updating the of the scene ever time
    window.addEventListener("resize", () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      // every time an adjustment is made on the camera this must be called
      camera.updateProjectionMatrix();
    });

    let controls = new OrbitControls(camera, renderer.domElement);
    controls.maxDistance = 500;

    // start position cam
    camera.position.set(1, 1, 1);

    // Base Scene Light
    const baseLight = () => {
    const light = new THREE.AmbientLight(0x404040, 1);
    scene.add(light);
    };

    baseLight();

    function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    }
    animate();

    ThreeGallery(scene, camera, renderer);
    }

    

    return (
      <div id="myCanvas"></div>
    );
};

export default Main;