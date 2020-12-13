import * as THREE from "three";
import API from "./../../utils/API";

const ThreeSoloImage = (scene, camera, renderer, props) => {
  if (props.props.startsWith("data:image")) {
    console.log("you did it cowboy!")

    let image = props.props

    const texture = new THREE.TextureLoader().load(`${props.props}`);
    const geometry = new THREE.PlaneGeometry(400, 400, 32);
    const material = new THREE.MeshBasicMaterial({
      map: texture,
      side: THREE.DoubleSide,
    });
    const singleImg = new THREE.Mesh(geometry, material);
    scene.add(singleImg);

    singleImg.position.set(0, -10, 0);

    const geoFrame = new THREE.PlaneGeometry(440, 440, 32);
    const matFrame = new THREE.MeshPhongMaterial({ color: "0x000000" });
    const mat = new THREE.Mesh(geoFrame, matFrame);
    scene.add(mat);

    mat.position.set(0, -10, -20);

  }
  else { 
    API.getImage(props.props).then((res) => {
      let image = res.data.data;

      const texture = new THREE.TextureLoader().load(`${image.image}`);
      const geometry = new THREE.PlaneGeometry(400, 400, 32);
      const material = new THREE.MeshBasicMaterial({
        map: texture,
        side: THREE.DoubleSide,
      });
      const singleImg = new THREE.Mesh(geometry, material);
      scene.add(singleImg);

      singleImg.position.set(0, -10, 0);

      const geoFrame = new THREE.PlaneGeometry(440, 440, 32);
      const matFrame = new THREE.MeshPhongMaterial({ color: "0x000000" });
      const mat = new THREE.Mesh(geoFrame, matFrame);
      scene.add(mat);

      mat.position.set(0, -10, -20);

    });
  }
};

export default ThreeSoloImage;
