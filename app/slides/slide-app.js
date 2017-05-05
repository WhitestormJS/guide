import {app} from '../app';
import {CameraModel} from '../components/CameraModel';
import {Group, PerspectiveCamera, Sphere} from '@whs';

import {MeshBasicMaterial, CameraHelper, Vector3} from 'three';

// SLIDE

const slideGroup = new Group();

const cameraModel = new CameraModel({
  material: new MeshBasicMaterial({color: 0x000000})
});

const camera = new PerspectiveCamera({
  camera: {
    far: 100,
    aspect: 1.5
  },

  rotation: [0, -Math.PI/2, 0],
  position: [2.5, 0, 0]
});

const camHelper = new CameraHelper(camera.native);
camHelper.material.color.setHex(0x000000);

// SCREEN

const screenGroup = new Group();
screenGroup.position.z = -camera.native.far;

const sphere = new Sphere({
  geometry: [4, 32, 32],

  material: new MeshBasicMaterial({
    color: 0x000000,
    wireframe: true
  })
});

screenGroup.addTo(camera);
screenGroup.add(sphere);

slideGroup.add(cameraModel);
slideGroup.add(camera);
slideGroup.addTo(app);
app.$scene.add(camHelper);

slideGroup.position.x = 30;
slideGroup.position.y = -10;
