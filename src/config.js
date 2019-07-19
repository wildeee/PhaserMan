import Phaser from 'phaser';
import MainGame from './scenes/MainGame';

export default {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: false,
  },
  scale: {
    mode: Phaser.DOM.FIT,
    width: '100%',
    height: '100%',
  },
  scene: MainGame,
};
