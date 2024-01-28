import { Exception } from "sass"

export class Ship {
    constructor(size) {
        this.size = size
        this.hp = size
    }

    hurt() {
        if (this.hp > 0) {
            this.hp -= 1
            return this
        } else {
            throw new Error('Ship already has 0 hp, you try to hurt dead ship')
        }
    }

    isAlive() {
        return this.hp > 0 ? true : false 
    }
}