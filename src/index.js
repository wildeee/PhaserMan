import './index.sass';
import Phaser from 'phaser';
import config from './config';

const boot = () => {
  return new Phaser.Game(config);
}

boot();
