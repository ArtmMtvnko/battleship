import { Ship } from "../src/scripts/Ship";
import { ShipFactory } from "../src/scripts/ShipFactory";

test('Ship Factory: basic scenario of creating new ship', () => {
    const shipFactory = new ShipFactory()
    shipFactory.createHugeShip()
    shipFactory.createMediumShip()
    shipFactory.createMediumShip()

    expect(shipFactory.shipSet).toEqual({
        huge: [new Ship(4)],
        big: [],
        medium: [new Ship(2), new Ship(2)],
        small: []
    })
})

test('Ship Factory: try to create more ship that rules allows', () => {
    const shipFactory = new ShipFactory()

    expect(() => {
        shipFactory.createHugeShip()
        shipFactory.createHugeShip()
    }).toThrow('Set of huge ships has already fulled')
})

test('Ship: basic scenario of proper creating new ship', () => {
    expect(new ShipFactory().createHugeShip()).toEqual(new Ship(4))
})