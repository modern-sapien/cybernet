import React from "react";
import * as THREE from "three";
import API from "./../../utils/API";


const ThreeImagePlane = (scene, camera, renderer, props) => {  
    let imagesArray = [];

    if (props.props) {
    console.log(props.props)
    API.getImageByUser(props.props).then((res) =>  {
    imagesArray = res.data.data.reverse();
    for (let i = 0; i < imagesArray.length; i++)  {
      const texture = new THREE.TextureLoader().load(`/${imagesArray[i].image}`);
      const geometry = new THREE.PlaneGeometry(400, 400, 32);
      const material = new THREE.MeshBasicMaterial({
        map: texture,
        side: THREE.DoubleSide,
      });
      const image = new THREE.Mesh(geometry, material);
      scene.add(image);
      
      image.position.set(0, i * -450 -10, 0);

      const geoFrame = new THREE.PlaneGeometry(440, 440, 32)
      const matFrame = new THREE.MeshPhongMaterial({color: "purple"})
      const mat = new THREE.Mesh(geoFrame, matFrame)
      scene.add(mat);

      mat.position.set(0, i * -450, -5);
      }
    })
    } else {
    API.getImages().then((res) => {
    imagesArray = res.data.data.reverse();
    console.log(imagesArray)

    if (imagesArray.length > 0) {
    for (let i = 0; i < imagesArray.length; i++)  {
    if (imagesArray[i].image) {
    const texture = new THREE.TextureLoader().load(`/${imagesArray[i].image}`);
    const geometry = new THREE.PlaneGeometry(400, 400, 32);
    const material = new THREE.MeshBasicMaterial({
      map: texture,
      side: THREE.DoubleSide,
    });
    const image = new THREE.Mesh(geometry, material);
    scene.add(image);
    
    image.position.set(0, i * -450 -10, 0);

    const geoFrame = new THREE.PlaneGeometry(440, 440, 32)
    const matFrame = new THREE.MeshPhongMaterial({color: "purple"})
    const mat = new THREE.Mesh(geoFrame, matFrame)
    scene.add(mat);

    mat.position.set(0, i * -450, -5);
  }}}})
  }
};

export default ThreeImagePlane;
