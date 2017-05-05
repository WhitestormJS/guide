import {
  MeshComponent,
  Box,
  Cylinder,
  Extrude
} from '@whs';

import {
  Shape
} from 'three';

export class CameraModel extends MeshComponent {
  build(params) {
    const camera = new Box({
      ...params,
      geometry: [4, 2, 1]
    });

    const roll1 = new Cylinder({
      geometry: [1, 1, 1],
      position: [-1, 1.5, 0],
      rotation: [Math.PI / 2, 0, 0],
      material: params.material
    });

    const roll2 = roll1.clone(true, true);
    roll2.position.x = 1;

    const lensShape = new Shape();
    lensShape.moveTo(0, 1);
    lensShape.lineTo(1, -0.5);
    lensShape.lineTo(-1, -0.5);
    lensShape.lineTo(0, 1);

    const lens = new Extrude({
      geometry: {
        shapes: lensShape,

        options: {
          amount: 1,
          bevelEnabled: false
        }
      },

      position: [2.5, 0, -0.5],
      rotation: [0, 0, Math.PI / 2],
      material: params.material
    });

    camera.add(roll1);
    camera.add(roll2);
    camera.add(lens);

    return camera.native;
  }
}
