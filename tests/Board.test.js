import { Board } from "../src/scripts/Board"
import { Ship } from "../src/scripts/Ship"

test('Board: Creating new board', () => {
    expect(new Board().field)
    .toEqual([
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
    ])
})

test('Board: Setting ship on field. Ideal circumstances', () => {
    const hugeShip = jest.fn(() => new Ship(4))

    const board = new Board()
    
    expect(board.setShip(hugeShip(), 1, 1))
    .toEqual([
        [9, 9, 9, 0, 0, 0, 0, 0, 0, 0],
        [9, 1, 9, 0, 0, 0, 0, 0, 0, 0],
        [9, 1, 9, 0, 0, 0, 0, 0, 0, 0],
        [9, 1, 9, 0, 0, 0, 0, 0, 0, 0],
        [9, 1, 9, 0, 0, 0, 0, 0, 0, 0],
        [9, 9, 9, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ])
})

test('Board: Setting ship on field in cornor', () => {
    const hugeShip = jest.fn(() => new Ship(4))

    const board = new Board()
    
    expect(board.setShip(hugeShip(), 0, 0))
    .toEqual([
        [1, 9, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 9, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 9, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 9, 0, 0, 0, 0, 0, 0, 0, 0],
        [9, 9, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ])
})

test('Board: Setting ship on field. Field has not enough space for ship', () => {
    const hugeShip = jest.fn(() => new Ship(4))

    const board = new Board()
    
    expect(() => {
        board.setShip(hugeShip(), 1, 7)
    })
    .toThrow('Field has not enough space for this ship. Try to choose other position for it')
})

test('Board: Setting ship on field. Ship stuck in other ship (which against rules)', () => {
    const hugeShip = jest.fn(() => new Ship(4))

    const board = new Board()

    board.field = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 9, 9, 9, 9, 9, 9, 0, 0, 0],
        [0, 9, 1, 1, 1, 1, 9, 0, 0, 0],
        [0, 9, 9, 9, 9, 9, 9, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
    
    expect(() => {
        board.setShip(hugeShip(), 3, 2)
    })
    .toThrow('Field has not enough space for this ship. Try to choose other position for it')
})

test('Board: Setting ship on field. Ship is setting close to other ship (which against rules)', () => {
    const hugeShip = jest.fn(() => new Ship(4))

    const board = new Board()

    board.field = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 9, 9, 9, 0, 0, 0, 0],
        [0, 0, 0, 9, 1, 9, 0, 0, 0, 0],
        [0, 0, 0, 9, 1, 9, 0, 0, 0, 0],
        [0, 0, 0, 9, 1, 9, 0, 0, 0, 0],
        [0, 0, 0, 9, 9, 9, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
    
    expect(() => {
        board.setShip(hugeShip(), 3, 1)
    })
    .toThrow('Field has not enough space for this ship. Try to choose other position for it')
})