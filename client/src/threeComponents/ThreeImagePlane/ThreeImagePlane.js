import React from 'react';
import * as THREE from "three"
import Landscape from "./assets/bg.png"
import Cleric from "./assets/Cleric.png"
import DmImage from "./assets/dmImage.png"

let imageArray = [Landscape, Cleric, DmImage]

const ThreeImagePlane = (scene, camera, renderer) => {
    if (imageArray.length > 0)  {
        for(let i = 0; i < imageArray.length; i++)  {
        const texture = new THREE.TextureLoader().load(imageArray[i])
        const geometry = new THREE.PlaneGeometry( 150, 150, 32 );
        const material = new THREE.MeshBasicMaterial( {map: texture, side: THREE.DoubleSide} );
        const image = new THREE.Mesh( geometry, material );
        scene.add( image );
        image.position.set((i*200)-200, 10, -123)

        const geometry1 = new THREE.PlaneGeometry(160, 160, 32);
        const material1 = new THREE.MeshBasicMaterial({color: 0x000000});
        const frame = new THREE.Mesh( geometry1, material1)
        scene.add(frame)
        frame.position.set((i*200)-200, 10, -124)
        }
    }


};

export default ThreeImagePlane;