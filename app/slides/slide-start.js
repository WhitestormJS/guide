import {app} from '../app';
import {Text} from '../components/Text';
import {Group} from '@whs';

const cam = app.$camera.native;

// SLIDE

const slideGroup = new Group();

const textParams = {
  color: '#000000',
  width: 20,
  height: 3,
  size: 80,
  align: 'left'
};

const text = new Text({
  text: 'Welcome to Whitestorm.js Guide',
  ...textParams
});

const description = new Text({
  text: 'This is an interactive guide that will show you how',
  ...textParams,
  size: 40,
  position: {
    y: -2
  }
});

description.addLine('things work in this engine');

const textGroup = new Group(text, description);
textGroup.position.set(-8, 8, 0);

slideGroup.add(textGroup);
slideGroup.addTo(app);
