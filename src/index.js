import './index.sass';
import config from './config';

const boot = () => {
  return new Phaser.Game(config);
}

boot();
