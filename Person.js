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
        const isAbleToMoveToDesiredTile = this.remainingMovementProgress > 0;
        if (isAbleToMoveToDesiredTile) {
            const [xOrY, change] = this.directionUpdate[this.direction];
            if (xOrY === 'x') {

            } else {
                
            }
        }
    }
}

