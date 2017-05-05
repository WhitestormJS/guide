import {MeshComponent} from '@whs';

import {
  Texture,
  Mesh,
  PlaneGeometry,
  MeshBasicMaterial,
  RepeatWrapping
} from 'three';

export class Text extends MeshComponent {
  constructor(params = {}) {
    super(params, Object.assign(MeshComponent.defaults, {
      text: 'Hello world!',
      color: '#ffffff',
      align: 'left',
      width: 1,
      height: 1,
      size: 80
    }));
  }

  build(params) {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');

    const {canvas, ctx} = this;
    const {text, bgColor, color, size} = this.params;

    ctx.canvas.width = this.params.width * 100;
    ctx.canvas.height = this.params.height * 100;

    ctx.font = `Bold ${size}px Arial`;
    ctx.fillStyle = color;
    ctx.lineWidth = 4;
    ctx.textAlign = 'center';

    const sizeText = ctx.measureText(text);

    let align;

    switch (this.params.align) {
      case 'left':
        align = sizeText.width / 2;
        break;
      case 'right':
        align = this.params.width * 100 / 2 + sizeText.width / 2;
        break;
      case 'center':
        align = this.params.width * 100 / 2;
        break;
      default:
        align = sizeText.width / 2;
    }

    ctx.fillText(text, align, ctx.canvas.height / 2 - this.params.size / 2);

    const texture = new Texture(this.canvas);
    texture.needsUpdate = true;

    const sprite = new Mesh(
      new PlaneGeometry(params.width, params.height),
      new MeshBasicMaterial({map: texture, transparent: true})
    );

    return sprite;
  }

  addLine(text, options = {}, lineHeight = 0.5) {
    const params = Object.assign({
      color: this.params.color,
      align: this.params.align,
      width: this.params.width,
      height: this.params.height,
      size: this.params.size
    }, options);

    params.text = text;

    const newLine = new Text(params);
    newLine.position.y = -lineHeight;

    this.add(newLine);
  }
}
