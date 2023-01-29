class Overworld {
    constructor(config) {
        this.gameContainerElement = config.gameContainerElement;
        this.canvas = this.gameContainerElement.querySelector('.GameCanvas');
        this.context = this.canvas.getContext('2d');
    }

    init() {
        // draw the demo map
        const image = new Image();
        image.onload = () => {
            this.context.drawImage(image,
                0, // from where we want to start cropping this image along x axis
                0 // from where we want to start cropping this image along y axis
            );
        };
        image.src = './images/maps/DemoLower.png';


        // create the hero game object.
        const hero = new GameObject({
            xPos: 2,
            yPos: 5,
            spriteSrc: './images/characters/people/hero.png',
            isShowingShadow: true
        });

        const npc = new GameObject({
            xPos: 5,
            yPos: 6,
            spriteSrc: './images/characters/people/npc1.png',
            isShowingShadow: true
        });
        // setTimeout is temporary. Create a game loop later!
        setTimeout(() => {
            // draw the game objects
            hero.sprite.draw(this.context);
            npc.sprite.draw(this.context);
        }, 200);
    }
}