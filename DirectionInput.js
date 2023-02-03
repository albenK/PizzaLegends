class DirectionInput {
    constructor() {
        this.heldDirections = [];

        // map of key code to directions. Used to control the hero character. WASD is supported.
        this.keyDownCodeMap = {
            'ArrowUp': utils.directions.UP,
            'ArrowRight': utils.directions.RIGHT,
            'ArrowDown': utils.directions.DOWN,
            'ArrowLeft': utils.directions.LEFT,
            'KeyW': utils.directions.UP,
            'KeyD': utils.directions.RIGHT,
            'KeyS': utils.directions.DOWN,
            'KeyA': utils.directions.LEFT 
        };
    }

    getCurrentDirection() {
        return this.heldDirections[0]; // 0th index is the current direction.
    }

    init() {
        document.addEventListener('keydown', (event) => {
            const direction = this.keyDownCodeMap[event.code];
            const isValidKeyPressed = !!direction;
            const isAlreadyPressed = this.heldDirections.indexOf(direction) >= 0;
            // only add it to the array, if it's not in the array.
            if (isValidKeyPressed && !isAlreadyPressed) {
                this.heldDirections.unshift(direction);
            }
        });

        document.addEventListener('keyup', (event) => {
            const direction = this.keyDownCodeMap[event.code];
            const indexOfKeyLetGo = this.heldDirections.indexOf(direction);
            const isValidKeyLetGo = indexOfKeyLetGo >= 0;
            if (isValidKeyLetGo) {
                this.heldDirections.splice(indexOfKeyLetGo, 1);
            }
        });
    }
}
