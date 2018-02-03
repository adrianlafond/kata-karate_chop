import chop from './chop01'

describe('tests', () => {
  it('returns the correct index', () => {
    expect(-1).toEqual(chop(3, []))
    expect(-1).toEqual(chop(3, [1]))
    expect(0).toEqual(chop(1, [1]))

    expect(0).toEqual(chop(1, [1, 3, 5]))
    expect(1).toEqual(chop(3, [1, 3, 5]))
    expect(2).toEqual(chop(5, [1, 3, 5]))
    expect(-1).toEqual(chop(0, [1, 3, 5]))
    expect(-1).toEqual(chop(2, [1, 3, 5]))
    expect(-1).toEqual(chop(4, [1, 3, 5]))
    expect(-1).toEqual(chop(6, [1, 3, 5]))

    expect(0).toEqual(chop(1, [1, 3, 5, 7]))
    expect(1).toEqual(chop(3, [1, 3, 5, 7]))
    expect(2).toEqual(chop(5, [1, 3, 5, 7]))
    expect(3).toEqual(chop(7, [1, 3, 5, 7]))
    expect(-1).toEqual(chop(0, [1, 3, 5, 7]))
    expect(-1).toEqual(chop(2, [1, 3, 5, 7]))
    expect(-1).toEqual(chop(4, [1, 3, 5, 7]))
    expect(-1).toEqual(chop(6, [1, 3, 5, 7]))
    expect(-1).toEqual(chop(8, [1, 3, 5, 7]))
  })
})
