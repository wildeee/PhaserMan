import Phaser from 'phaser';

export default class BaseScene extends Phaser.Scene {
  constructor(props) {
    super(props);
  }

  get width() {
    return this.scale.width;
  }
  get height() {
    return this.scale.height;
  }
  get halfWidth() {
    return this.width / 2;
  }
  get halfHeight() {
    return this.height / 2;
  }
}
