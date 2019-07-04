import BaseScene from './BaseScene';

export default class MainGame extends BaseScene {
  constructor() {
    super({
      key: 'MainGame',
    });
  }

  preload() {
    this.load.image('map', 'assets/map.png');
  }

  create() {
    const map = this.add.image(this.halfWidth, this.halfHeight, 'map');
  }
}
