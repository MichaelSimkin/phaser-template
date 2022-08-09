import Phaser from 'phaser';

export const config: { gameConfig: Phaser.Types.Core.GameConfig } = {
    gameConfig: {
        type: Phaser.AUTO,
        parent: 'game',
        backgroundColor: '#33A5E7',
        scale: {
            width: 800,
            height: 600,
            mode: Phaser.Scale.RESIZE,
            autoCenter: Phaser.Scale.CENTER_BOTH,
        },
        physics: {
            default: 'arcade',
            arcade: {
                gravity: {
                    x: 0,
                    y: 0,
                },
            },
        },
        antialias: true,
    },
};
