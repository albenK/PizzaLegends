class Person extends GameObject {
    constructor(config) {
        super(config);
        this.remainingMovementProgress = 16; // Each tile is 16px. A Person can only move 16px in any direction.

        this.directionUpdate = {
            'UP': ['y', -1],
            'RIGHT': ['x', 1],
            'DOWN': ['y', 1],
            'LEFT': ['x', -1]
        };
    }

    updatePosition() {
        // A Person can only move 16px in any direction. During this process,
        // they will not be allowed to move. Once they reach the destination (16px),
        // then they can move to another direction.
        const isAtDestination = this.remainingMovementProgress > 0;
        if (isAtDestination) {
            const [xOrY, change] = this.directionUpdate[this.direction];
            if (xOrY === 'x') {
                this.xPos += change;
            } else {
                this.yPos += change;
            }
        }
    }
}

