class GameObject {
    constructor(config) {
        this.xPos = config.xPos || 0;
        this.yPos = config.yPos || 0;
        this.direction = config.direction || utils.directions.DOWN;
        this.sprite = new Sprite({
            spriteSrc: config.spriteSrc,
            isShowingShadow: config.isShowingShadow,
            gameObject: this
        });
    }

    // For most GameObject instances, update() function will be empty.
    // classes that inherit GameObject can define their own update method!
    update(state) {

    }
}