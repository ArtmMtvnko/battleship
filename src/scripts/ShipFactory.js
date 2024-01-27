import { Ship } from "./Ship"

export class ShipFactory {
    constructor() {
        this.shipSet = []
        this.amount = {
            '4': 1,
            '3': 2,
            '2': 3,
            '1': 4
        }
    }

    createShip(size) {
        if (this.alreadyExsits(size)) {
            throw new Error(`Set of ship(s) with this size (${size}) has already fulled`)
        }

        const ship = new Ship(size)

        this.amount[size.toString()] =- 1
    }

    alreadyExsits(size) {
        if (this.amount[size.toString()] > 0) {
            return false
        } else {
            return true
        }
    }
}

// [][][][] - 1
// [][][] - 2
// [][] - 3
// [] - 4