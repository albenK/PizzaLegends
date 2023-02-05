const utils = {
    directions: {
        'UP': 'UP',
        'RIGHT': 'RIGHT',
        'DOWN': 'DOWN',
        'LEFT': 'LEFT'
    },
    animations: {
        'IDLE_UP': 'IDLE_UP',
        'IDLE_RIGHT': 'IDLE_RIGHT',
        'IDLE_DOWN': 'IDLE_DOWN',
        'IDLE_LEFT': 'IDLE_LEFT',
        'WALK_UP': 'WALK_UP',
        'WALK_RIGHT': 'WALK_RIGHT',
        'WALK_DOWN': 'WALK_DOWN',
        'WALK_LEFT': 'WALK_LEFT'
    },
    withGrid(n) {
        return n * 16;
    }
};