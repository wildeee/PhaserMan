import BaseScene from './BaseScene';
import logoImg from '../assets/logo.png';

export default class MainGame extends BaseScene {
  constructor() {
    super({
      key: 'MainGame',
    });
  }

  preload() {
    // this.load.image('map', 'assets/map.png');
    this.load.image('logo', logoImg);
  }

  create() {
    // const map = this.add.image(this.halfWidth, this.halfHeight, 'map');
    const logo = this.add.image(this.halfWidth, 0, 'logo');
    logo.setOrigin(0.5, 0);

    this.tweens.add({
      targets: logo,
      y: this.height - logo.height,
      duration: 2000,
      ease: 'Power2',
      yoyo: true,
      loop: -1,
    });
  }
}
