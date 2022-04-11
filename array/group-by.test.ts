import { groupBy } from './group-by';

it('groupBy', () => {
    const isPositive = (x) => x > 0;
    const isNegative = (x) => x < 0;
    const isZero = (x) => x === 0;

    const arr = [-1, 2, 0, -3, 5, 1, 'a', 3, 4, -3, 2, null, -3, 9, 0, 1];

    expect(groupBy([], arr)).toEqual([arr]);

    expect(groupBy([isPositive, isZero, isNegative], [])).toEqual([[], [], [], []]);

    expect(groupBy([isPositive, isZero, isNegative], arr)).toEqual([
        [2, 5, 1, 3, 4, 2, 9, 1],
        [0, 0],
        [-1, -3, -3, -3],
        ['a', null],
    ]);
});
