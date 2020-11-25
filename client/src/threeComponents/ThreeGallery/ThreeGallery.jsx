import React from 'react';
import * as THREE from "three";
import Cyber_bk from "./assets/cyber_bk.png"
import Cyber_dn from "./assets/cyber_dn.png"
import Cyber_ft from "./assets/cyber_ft.png"
import Cyber_lf from "./assets/cyber_lf.png"
import Cyber_rt from "./assets/cyber_rt.png"
import Cyber_up from "./assets/cyber_up.png"

const ThreeGallery = (scene, camera, renderer) => {
   
        let materialArray = []
   
        let texture_ft = new THREE.TextureLoader().load(Cyber_ft)
        let texture_bk = new THREE.TextureLoader().load(Cyber_bk)
        let texture_up = new THREE.TextureLoader().load(Cyber_up)
        let texture_dn = new THREE.TextureLoader().load(Cyber_dn)
        let texture_rt = new THREE.TextureLoader().load(Cyber_rt)
        let texture_lf = new THREE.TextureLoader().load(Cyber_lf)

        materialArray.push(new THREE.MeshBasicMaterial({map: texture_ft}))
        materialArray.push(new THREE.MeshBasicMaterial({map: texture_bk}))
        materialArray.push(new THREE.MeshBasicMaterial({map: texture_up}))
        materialArray.push(new THREE.MeshBasicMaterial({map: texture_dn}))
        materialArray.push(new THREE.MeshBasicMaterial({map: texture_rt}))
        materialArray.push(new THREE.MeshBasicMaterial({map: texture_lf}))
    
        for(let i=0; i < 6; i++)  {
          materialArray[i].side = THREE.DoubleSide;
        }

        let skyboxGeo = new THREE.BoxGeometry(500, 250, 500)
        let skybox = new THREE.Mesh(skyboxGeo, materialArray)
        scene.add(skybox);
    }

export default ThreeGallery;