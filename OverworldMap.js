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
            npc: new Person({
                xPos: utils.withGrid(5),
                yPos: utils.withGrid(6),
                spriteSrc: './images/characters/people/npc1.png',
                isShowingShadow: true
            }),
            hero: new Person({
                xPos: utils.withGrid(2),
                yPos: utils.withGrid(5),
                spriteSrc: './images/characters/people/hero.png',
                isShowingShadow: true,
                isPlayerControlled: true
            }),
            
        }
    },
    Kitchen: {
        lowerImageSrc: './images/maps/KitchenLower.png',
        upperImageSrc: './images/maps/KitchenUpper.png',
        gameObjects: {
            npc: new GameObject({
                xPos: utils.withGrid(7),
                yPos: utils.withGrid(6),
                spriteSrc: './images/characters/people/npc1.png',
                isShowingShadow: true
            }),
            npc2: new GameObject({
                xPos: utils.withGrid(11),
                yPos: utils.withGrid(7),
                spriteSrc: './images/characters/people/npc2.png',
                isShowingShadow: true
            }),
            hero: new Person({
                xPos: utils.withGrid(3),
                yPos: utils.withGrid(5),
                spriteSrc: './images/characters/people/hero.png',
                isShowingShadow: true,
                isPlayerControlled: true
            })
        }
    }
};
