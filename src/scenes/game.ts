import Phaser from 'phaser';

export default class Game extends Phaser.Scene {
    constructor() {
        super('GameScene');
    }

    preload() {
        this.load.image('logo', 'assets/phaser3-logo.png');
    }

    create() {
        const logo = this.physics.add.image(400, 300, 'logo');
        logo.setVelocity(200, 200);
        logo.setScale(2);
        logo.setCollideWorldBounds(true);
        logo.setBounce(1, 1);
        logo.setAngularVelocity(100);

        this.scale.on('resize', () => {
            this.physics.world.setBounds(0, 0, this.scale.width, this.scale.height);
        });
    }
}
