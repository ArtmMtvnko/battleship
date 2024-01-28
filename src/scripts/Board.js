export class Board {
    constructor() {
        this.field = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ]
    }

    setShip(ship, x, y) {
        if (!this.isShipFit(ship, x, y) || !this.isShipCollision(ship, x, y)) {
            throw new Error('Field has not enough space for this ship. Try to choose other position for it')
        }

        for (let i = y; i < y + ship.size; i++) {
            this.field[i][x] = 1
            this.fillAreaArroundAsBusy(x, i)
        }
        console.log(this.field)
        return this.field
    }

    fillAreaArroundAsBusy(x, y) {
        const leftBorder = 0
        const rightBorder = 9
        const topBorder = 0
        const bottomBorder = 9

        for (let i = y - 1; i <= y + 1; i++) {
            if (i < topBorder || i > bottomBorder) continue

            for (let j = x - 1; j <= x + 1; j++) {
                if (j < leftBorder || j > rightBorder) continue

                if (this.field[i][j] === 0) this.field[i][j] = 9
            }
        }
    }

    isShipFit(ship, x, y) {
        if (y + ship.size > this.field.length) {
            return false
        } else if (x + ship.size > this.field[0].length) {
            return false
        } else {
            return true
        }
    }

    isShipCollision(ship, x, y) {
        for (let i = y; i < y + ship.size; i++) {
            if (this.field[i][x] !== 0) return false
        }

        for (let i = x; i < x + ship.size; i++) {
            if (this.field[y][i] !== 0) return false
        }

        return true
    }
}