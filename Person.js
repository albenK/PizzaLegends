class Person extends GameObject {
    constructor(config) {
        super(config);
        // A Person can move 16px in any direction on the grid, since each tile is 16px.
        // remainingMovementProgress is used to track the remaining distance to the destination.
        this.remainingMovementProgress = 16;
        this.direction = 'RIGHT'; // TODO: Remove once player can control

        this.directionUpdate = {
            'UP': ['y', -1],
            'RIGHT': ['x', 1],
            'DOWN': ['y', 1],
            'LEFT': ['x', -1]
        };
    }

    update(state) {
        this.updatePosition();
    }

    updatePosition() {
        // A Person can only move 16px in any direction. During this process
        // they will not be allowed to move anywhere else. Once they reach the destination (16px),
        // then they can move to another direction.
        const isMovementInProgress = this.remainingMovementProgress > 0;
        if (isMovementInProgress) {
            const [xOrY, change] = this.directionUpdate[this.direction];
            if (xOrY === 'x') {
                this.xPos += change;
            } else {
                this.yPos += change;
            }
            this.remainingMovementProgress--; // Subtract 1 since this person has moved a "step"
        }
    }
}

