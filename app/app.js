// Core
import {App} from '@whs/core/App';

import {
  ElementModule,
  SceneModule,
  CameraModule,
  RenderingModule
} from 'whs';

import {OrbitControlsModule} from '@whs:controls/orbit';

// Components
import {Plane} from '@whs+meshes/Plane';

export const app = new App([
  new ElementModule({
    container: document.getElementById('app')
  }),
  new SceneModule(),
  new CameraModule({
    position: {
      z: 15
    }
  }),
  new RenderingModule({bgColor: 0xffffff}),
  new OrbitControlsModule()
]);

app.start();
