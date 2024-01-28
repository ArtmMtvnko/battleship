import { Ship } from "../src/scripts/Ship"

test('Ship: hurt ship', () => {
    const ship = new Ship(4)
    expect(ship.hurt().hurt().hp).toBe(2)
})

test('Ship: hurt ship more time than it max hp', () => {
    const ship = new Ship(3)
    expect(() => {
        ship.hurt().hurt().hurt().hurt()
    })
        .toThrow('Ship already has 0 hp, you try to hurt dead ship')
})

test('Ship: check is ship still alive', () => {
    const ship = new Ship(2)
    expect(ship.isAlive()).toBeTruthy()
    ship.hurt()
    expect(ship.isAlive()).toBeTruthy()
    ship.hurt()
    expect(ship.isAlive()).toBeFalsy()
})