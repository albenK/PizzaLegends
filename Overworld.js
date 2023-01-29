class Overworld {
    constructor(config) {
        this.gameContainerElement = config.gameContainerElement;
        this.canvas = this.gameContainerElement.querySelector('.GameCanvas');
        this.context = this.canvas.getContext('2d');
        this.map = null;
    }

    startGameLoop() {
        const nextTick = () => {
            // Clear the canvas. (Erase everything!)
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

            // Draw lower layer of map.
            this.map.drawLowerImage(this.context);

            // draw game objects
            const gameObjects = Object.values(this.map.gameObjects);
            gameObjects.forEach((gameObject) => {
                gameObject.xPos += 0.01; // TODO: Change this to reflect each tile (16px)
                gameObject.sprite.draw(this.context);
            });

            // Draw upper layer of map.
            this.map.drawUpperImage(this.context);
            requestAnimationFrame(() => {
                nextTick();
            });
        };
        nextTick();
    }

    init() {
        this.map = new OverworldMap(window.OverworldMaps.Kitchen);
        this.startGameLoop();
    }
}