import Phaser from 'phaser';
import WebFontLoaderPlugin from 'phaser3-rex-plugins/plugins/webfontloader-plugin'
import GlowFilterPipelinePlugin from 'phaser3-rex-plugins/plugins/glowfilterpipeline-plugin';
import { CollectibleSettings } from './objects/Collectible';
import { UnitSettings } from './objects/Unit';

export const colors = {
    white: 0xeeeeee,
    
    gray: 0x5b5b5b,
    grayLight: 0x747474,
    grayDark: 0x414141,
    
    blue: 0x0d6efd,
    blueLight: 0x408cfd,
    
    red: 0xdc3545,
    redLight: 0xe4606d,
   
    green: 0x3a813d,
    greenLight: 0x429345,

    yellow: 0xffc107,
} as const;

export const colorToString = (color: number) => {
    var bbggrr =  ("000000" + color.toString(16)).slice(-6);
    var rrggbb = bbggrr.substr(4, 2) + bbggrr.substr(2, 2) + bbggrr.substr(0, 2);
    return "#" + rrggbb;
};

export const fonts = {
    base: "Roboto Mono",
} as const;

export const grid = {
    color: colors.gray,
    cellSize: 64,
} as const;

export const playerUnitSettings: UnitSettings = {
    radius: 32,
    innerRadius: 20, 
    color: colors.blue,
    backgroundColor: colors.grayDark,

    showName: false,
    nameColor: colors.white,
    nameOffsetY: -14,
    nameFontStyle: "14px " + fonts.base,

    showHealthBar: true,
    healthBarRadius: 28,
    healthBarThickness: 0.14,
    healthBarColor: colors.greenLight,
} as const;

export const enemyPlayerUnitSettings: UnitSettings = {
    radius: 32,
    innerRadius: 20, 
    color: colors.red,
    backgroundColor: colors.grayDark,

    showName: true,
    nameColor: colors.white,
    nameOffsetY: -14,
    nameFontStyle: "14px " + fonts.base,

    showHealthBar: true,
    healthBarRadius: 28,
    healthBarThickness: 0.14,
    healthBarColor: colors.greenLight,
} as const;

export const collectibleSettings: CollectibleSettings = {
    radius: 6,
    color: colors.yellow,
    glowDuration: 1000,
    glowIntensityFrom: 0.005,
    glowIntensityTo: 0.02,
} as const;

export const depth = {
    default: 0,
    ui: 5,
} as const;

export const gameConfig: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	title: "Arena Game",
    parent: 'root',
    backgroundColor: "#747474",
    roundPixels: true,
    scale: {
        parent: 'root',
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
        }
    },
    plugins: {
        global: [{
            key: 'rexWebFontLoader',
            plugin: WebFontLoaderPlugin,
            start: true
        },
        {
            key: 'rexGlowFilterPipeline',
            plugin: GlowFilterPipelinePlugin,
            start: true
        }]
    }
};
