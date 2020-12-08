import React from "react";
import * as THREE from "three";
import API from "./../../utils/API";


const ThreeImagePlane = (scene, camera, renderer, props) => {  
    let imagesArray = [];

    if (props.props) {
    console.log(props.props)
    API.getImageByUser(props.props).then((res) =>  {
    imagesArray = res.data.data;
    for (let i = 0; i < imagesArray.length; i++)  {
      const texture = new THREE.TextureLoader().load(`http://localhost:3000/${imagesArray[i].image}`);
      const geometry = new THREE.PlaneGeometry(400, 400, 32);
      const material = new THREE.MeshBasicMaterial({
        map: texture,
        side: THREE.DoubleSide,
      });
      const image = new THREE.Mesh(geometry, material);
      scene.add(image);
      
      image.position.set(i * 350 - 350, i*50, i*-150);
      }
    })
    } else {
    API.getImages().then((res) => {
    imagesArray = res.data.data;
    console.log(imagesArray)

    if (imagesArray.length > 0) {
    for (let i = 0; i < imagesArray.length; i++)  {
    const texture = new THREE.TextureLoader().load(`http://localhost:3000/${imagesArray[i].image}`);
    const geometry = new THREE.PlaneGeometry(400, 400, 32);
    const material = new THREE.MeshBasicMaterial({
      map: texture,
      side: THREE.DoubleSide,
    });
    const image = new THREE.Mesh(geometry, material);
    scene.add(image);
    
    image.position.set(i * 350 - 350, i*50, i*-150);
    }}})
  }
};

export default ThreeImagePlane;
