import { transform } from "@babel/core"
import { Ship } from "./Ship"

export class ShipFactory {
    constructor() {
        this.shipSet = {
            huge: [],
            big: [],
            medium: [],
            small: []
        }
    }

    createHugeShip() {
        if (this.shipSet.huge.length < 1) {
            const ship = new Ship(4)
            this.shipSet.huge.push(ship)
            return ship
        } else {
            throw new Error('Set of huge ships has already fulled')
        }
    }

    createBigShip() {
        if (this.shipSet.big.length < 2) {
            const ship = new Ship(3)
            this.shipSet.big.push(ship)
            return ship
        } else {
            throw new Error('Set of big ships has already fulled')
        }
    }

    createMediumShip() {
        if (this.shipSet.huge.length < 3) {
            const ship = new Ship(2)
            this.shipSet.medium.push(ship)
            return ship
        } else {
            throw new Error('Set of medium ships has already fulled')
        }
    }

    createSmallShip() {
        if (this.shipSet.huge.length < 4) {
            const ship = new Ship(1)
            this.shipSet.small.push(ship)
            return ship
        } else {
            throw new Error('Set of small ships has already fulled')
        }
    }
}

// [][][][] - 1
// [][][] - 2
// [][] - 3
// [] - 4