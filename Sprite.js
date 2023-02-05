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
            [utils.animations.IDLE_UP]: [ [0,2] ],
            [utils.animations.IDLE_RIGHT]: [ [0,1] ],
            [utils.animations.IDLE_DOWN]: [ [0,0] ],
            [utils.animations.IDLE_LEFT]: [ [0,3] ],
            [utils.animations.WALK_UP]: [ [1,2], [0,2], [3,2], [0,2] ],
            [utils.animations.WALK_RIGHT]: [ [1,1], [0,1], [3,1], [0,1] ],
            [utils.animations.WALK_DOWN]: [ [1,0], [0,0], [3,0], [0,0] ],
            [utils.animations.WALK_LEFT]: [ [1,3], [0,3], [3,3], [0,3] ],
        };
        this.currentAnimationKey = config.currentAnimationKey || utils.animations.IDLE_DOWN; // must be a key within this.animations
        this.currentAnimationFrameIndex = 0; // refers to the index of the current frame.
        this.animationFrameLimit = config.animationFrameLimit || 8; // how many ticks we are showing each frame
        this.animationFrameProgress = this.animationFrameLimit; // the progress of each tick. Decrease by one for each frame ran.
    
        this.gameObject = config.gameObject;
    }

    getCurrentFrame() {
        const frames = this.animations[this.currentAnimationKey];
        const frame = frames[this.currentAnimationFrameIndex];
        return frame;
    }

    setAnimation(animationKey) {
        const isDifferentThanPreviousAnimation = this.currentAnimationKey !== animationKey;
        if (isDifferentThanPreviousAnimation) {
            // Reset animation state.
            this.currentAnimationKey = animationKey;
            this.currentAnimationFrameIndex = 0;
            this.animationFrameProgress = this.animationFrameLimit;
        }
    }

    updateAnimationProgress() {
        if (this.animationFrameProgress > 0) { // Decrease animationFrameProgress.
            this.animationFrameProgress--;
            return;
        }
        // Reset animationFrameProgress since we have waited animationFrameLimit ticks.
        this.animationFrameProgress = this.animationFrameLimit;
        // Increase currentAnimationFrameIndex by 1.
        this.currentAnimationFrameIndex++;
        // Do modulus because we don't want the currentAnimationFrameIndex to go out of bounds.
        this.currentAnimationFrameIndex = this.currentAnimationFrameIndex % this.animations[this.currentAnimationKey].length;
    }

    draw(context) {
        const xPos = this.gameObject.xPos - 8; // Subtract 8px to center horizontally within tile.
        const yPos = this.gameObject.yPos - 18; // Subtract 18px to center vertically within tile.

        if (this.isShadowLoadedInMemory) {
            context.drawImage(this.shadowImage, xPos, yPos);
        }
        
        if (this.isSpriteLoadedInMemory) {
            const [frameX, frameY] = this.getCurrentFrame();
            const cutFromX = frameX * 32; // Multiply by 32 since each character is 32px.
            const cutFromY = frameY * 32;
            const cutToX = 32;
            const cutToY = 32;
            const scaleX = 32;
            const scaleY = 32;
            context.drawImage(this.image, cutFromX, cutFromY, cutToX, cutToY, xPos, yPos, scaleX, scaleY);
        }
        this.updateAnimationProgress(); // call this so that next tick we be updated.
    }
}