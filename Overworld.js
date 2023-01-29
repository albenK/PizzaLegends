class Overworld {
    constructor(config) {
        this.gameContainerElement = config.gameContainerElement;
        this.canvas = this.gameContainerElement.querySelector('.GameCanvas');
        this.context = this.canvas.getContext('2d');
        this.map = null;
    }

    init() {
        this.map = new OverworldMap(window.OverworldMaps.DemoRoom);

        // setTimeout is temporary. TODO: Create a game loop later!
        setTimeout(() => {
            this.map.drawLowerImage(this.context);
            this.map.drawUpperImage(this.context);
            const gameObjects = Object.values(this.map.gameObjects);
            gameObjects.forEach((gameObject) => {
                gameObject.sprite.draw(this.context);
            });
        }, 200);
    }
}