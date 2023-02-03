class Person extends GameObject {
    constructor(config) {
        super(config);
        // A Person can move 16px in four directions on the grid (up, right, down and left). Each tile is 16px.
        // remainingMovementProgress is used to track the remaining distance to the destination. (Middle of next tile)
        this.remainingMovementProgress = 0;
        this.isPlayerControlled = config.isPlayerControlled || false; // whether this Person can be controlled by keyboard keys.

        this.directionUpdate = {
            [utils.directions.UP]: ['y', -1],
            [utils.directions.RIGHT]: ['x', 1],
            [utils.directions.DOWN]: ['y', 1],
            [utils.directions.LEFT]: ['x', -1]
        };
    }

    update(state) {
        this.updatePosition();

        const isAtDestination = this.remainingMovementProgress === 0;
        const directionExists = !!state.direction;
        if (this.isPlayerControlled && isAtDestination && directionExists) {
            this.direction = state.direction;
            this.remainingMovementProgress = 16;
        }
    }

    updatePosition() {
        // A Person can only move 16px in four directions on the grid (up, right, down and left). During this process
        // they will not be allowed to move anywhere else. Once they reach the destination (16px),
        // they can move to another direction or keep going in same direction.
        const isMovementInProgress = this.remainingMovementProgress > 0;
        if (isMovementInProgress) {
            const [xOrY, change] = this.directionUpdate[this.direction];
            if (xOrY === 'x') {
                this.xPos += change;
            } else {
                this.yPos += change;
            }
            this.remainingMovementProgress--; // Subtract 1 since this person has moved 16px.
        }
    }
}

