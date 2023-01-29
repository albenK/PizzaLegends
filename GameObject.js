class GameObject {
    constructor(config) {
        this.xPos = config.xPos || 0;
        this.yPos = config.yPos || 0;
        this.sprite = new Sprite({
            spriteSrc: config.spriteSrc,
            isShowingShadow: config.isShowingShadow,
            gameObject: this
        });
    }
}