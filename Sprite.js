class Sprite {
    constructor(config) {

        // Set up the sprite image to load into memory.
        this.image = new Image();
        this.image.onload = () => {
            this.isSpriteLoadedInMemory = true;
        };
        this.image.src = config.spriteSrc;

        // Set up shadow
        this.isShowingShadow = config.isShowingShadow || false;
        this.shadowImage = new Image();
        this.shadowImage.onload = () => {
            this.isShadowLoadedInMemory = true;
        };
        if (this.isShowingShadow) {
            this.shadowImage.src = './images/characters/shadow.png';
        }

        // configure animations and initial state
        this.animations = config.animations || {
            idleDown: [
                [0,0]
            ]
        };
        this.currentAnimationKey = config.currentAnimationKey || 'idleDown'; // must be a key within this.animations
        this.currentAnimationFrameIndex = 0; // refers to the index of the current frame.
    
        this.gameObject = config.gameObject;
    }

    draw(context) {
        const xPos = this.gameObject.xPos - 8; // Subtract 8px to center horizontally within tile.
        const yPos = this.gameObject.yPos - 18; // Subtract 18px to center vertically within tile.

        if (this.isShadowLoadedInMemory) {
            context.drawImage(this.shadowImage, xPos, yPos);
        }
        
        if (this.isSpriteLoadedInMemory) {
            const cutFromX = 0;
            const cutFromY = 0;
            const cutToX = 32;
            const cutToY = 32;
            const scaleX = 32;
            const scaleY = 32;
            context.drawImage(this.image, cutFromX, cutFromY, cutToX, cutToY, xPos, yPos, scaleX, scaleY);
        }
    }
}