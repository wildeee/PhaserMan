export default class AssetsLoader extends Phaser.Scene {
  constructor() {
    super({
      key: 'AssetsLoader',
    });
  }

  preload() {
    this.load.image('map', 'map.png');
  }
}
