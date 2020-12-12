import React, {useEffect, useContext, useState} from 'react';
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import ThreeSoloImage from "./../../threeComponents/ThreeSoloImage/ThreeSoloImage"

const SoloMain = (props) => {
  
    useEffect(() => {
    dimensions()
    }, [])

    function dimensions() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    0.1,
    10000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setClearColor("whitesmoke");
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
    if (props)  {
      ThreeSoloImage(scene, camera, renderer, props);
    }
        
      const light = new THREE.DirectionalLight(0xFFFFFF, .25);
      light.position.set(.9,.5,0)
      scene.add(light)

    let controls = new OrbitControls(camera, renderer.domElement);
    controls.maxDistance = 5000;

    // start position cam
    camera.position.set(-350, 5, 500);
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

export default SoloMain;