import Phaser from 'phaser';
import { config } from './config';
import GameScene from './scenes/game';

const main = () => {
    const { gameConfig } = config;

    const game = new Phaser.Game(
        Object.assign(gameConfig, {
            scene: [GameScene],
        }),
    );
};

main();
