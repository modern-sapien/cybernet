import React, {useEffect} from 'react';
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import ThreeGallery from "./../../threeComponents/ThreeGallery/ThreeGallery"
import ThreeImagePlane from "./../../threeComponents/ThreeImagePlane/ThreeImagePlane"


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
    10000
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

    ThreeGallery(scene, camera, renderer);

    ThreeImagePlane(scene, camera, renderer);

    let controls = new OrbitControls(camera, renderer.domElement);
    controls.maxDistance = 1000;

    // start position cam
    camera.position.set(-5, 5, -200);
    controls.update()

    function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    }
    animate();
  }  
    return (
      <div id="myCanvas"></div>
    );
};

export default Main;