import Phaser from 'phaser';
import AssetsLoader from './scenes/AssetsLoader';
import MainGame from './scenes/MainGame';

export default {
  type: Phaser.AUTO,
  physics: {
    default: false,
  },
  loader: {
    path: 'assets/',
  },
  scale: {
    mode: Phaser.DOM.FIT,
    width: '100%',
    height: '100%',
  },
  scene: [
    AssetsLoader,
    MainGame,
  ],
};
