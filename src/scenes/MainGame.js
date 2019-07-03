export default class MainGame extends Phaser.Scene {
  constructor() {
    super({
      key: 'MainGame',
      active: true,
    });
  }

  create() {
    this.add.image(0, 0, 'map');
  }
}
