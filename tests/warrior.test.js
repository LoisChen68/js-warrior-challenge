// WARNING: Do not edit this file!
const Warrior = require('../warrior.js');

describe('Warrior name', () => {
  test('getName', () => {
    const w = new Warrior("Hello")
    expect(w.name).toBe("Hello")
  })
})

describe('Warrior healing', () => {
  test('heal at full health', () => {
    const w = new Warrior("Warrior")
    w.heal(20)
    expect(w.health).toBe(100)
  })

  test('heal at not full health', () => {
    const w = new Warrior("Warrior")
    w.health = 10
    w.heal(20)
    expect(w.health).toBe(30)
  })
})

describe('Warrior castMagic', () => {
  test('castMagic insufficient mana', () => {
    const w = new Warrior("Warrior")
    w.mana = 20
    const damage = w.castMagic(30)
    expect(w.mana).toBe(20)
    expect(damage).toBe(0)
  })

  test('castMagic sufficient mana', () => {
    const w = new Warrior("Warrior")
    const damage = w.castMagic(33)
    expect(w.mana).toBe(67)
    expect(damage).toBe(66)
  })
})

describe('Warrior damage', () => {
  test('Take full damage and die', () => {
    const w = new Warrior("Warrior")
    w.takeDamage(100)
    expect(w.health).toBe(0)
    expect(w.isAlive()).toBe(false)
  })

  test('Take partial damage', () => {
    const w = new Warrior("Warrior")
    w.takeDamage(30)
    expect(w.health).toBe(70)
    expect(w.isAlive()).toBe(true)
  })
})


describe('Simulations', () => {
  test('Sim 1: Take damage and heal', () => {
    const w = new Warrior("Victoria")
    w.takeDamage(20)
    w.takeDamage(10)
    w.heal(50)
    w.takeDamage(85)
    
    expect(w.health).toBe(15)
    expect(w.mana).toBe(100)
    expect(w.name).toBe("Victoria")
    expect(w.isAlive()).toBe(true)
  })

  test('Sim 2: Take damage, castMagic, and heal', () => {
    const w = new Warrior("Geralt")
    w.takeDamage(30)
    w.heal(15)
    const dmg1 = w.castMagic(30)
    const dmg2 = w.castMagic(30)
    const dmg3 = w.castMagic(30)
    const dmg4 = w.castMagic(30)
    w.takeDamage(30)
    w.takeDamage(30)
    w.takeDamage(30)
    expect(dmg1).toBe(60)
    expect(dmg2).toBe(60)
    expect(dmg3).toBe(60)
    expect(dmg4).toBe(0)
    expect(w.health).toBe(0)
    expect(w.mana).toBe(10)
    expect(w.name).toBe("Geralt")
    expect(w.isAlive()).toBe(false)
  })
})