class OverworldMap {
    constructor(config) {
        this.gameObjects = config.gameObjects;

        this.lowerImage = new Image(); // contains tiles/floor.
        this.lowerImage.src = config.lowerImageSrc;

        this.upperImage = new Image(); // contains things that should be rendered on top of the GameObject. Rooftops, treetops..etc
        this.upperImage.src = config.upperImageSrc;
    }

    drawLowerImage(context) {
        context.drawImage(this.lowerImage, 0, 0);
    }

    drawUpperImage(context) {
        context.drawImage(this.upperImage, 0, 0);
    }
}


window.OverworldMaps = {
    DemoRoom: {
        lowerImageSrc: './images/maps/DemoLower.png',
        upperImageSrc: './images/maps/DemoUpper.png',
        gameObjects: {
            hero: new GameObject({
                xPos: 2,
                yPos: 5,
                spriteSrc: './images/characters/people/hero.png',
                isShowingShadow: true
            }),
            npc: new GameObject({
                xPos: 5,
                yPos: 6,
                spriteSrc: './images/characters/people/npc1.png',
                isShowingShadow: true
            })
        }
    },
    Kitchen: {
        lowerImageSrc: './images/maps/KitchenLower.png',
        upperImageSrc: './images/maps/KitchenUpper.png',
        gameObjects: {
            hero: new GameObject({
                xPos: 3,
                yPos: 4,
                spriteSrc: './images/characters/people/hero.png',
                isShowingShadow: true
            }),
            npc: new GameObject({
                xPos: 7,
                yPos: 6,
                spriteSrc: './images/characters/people/npc1.png',
                isShowingShadow: true
            }),
            npc2: new GameObject({
                xPos: 6,
                yPos: 4,
                spriteSrc: './images/characters/people/npc2.png',
                isShowingShadow: true
            })
        }
    }
};
