import { range } from './range';

describe('range', () => {
    it('base', () => {
        expect(range(4)).toEqual([0, 1, 2, 3]);

        expect(range(1, 5)).toEqual([1, 2, 3, 4]);

        expect(range(0, 20, 5)).toEqual([0, 5, 10, 15]);

        expect(range(0)).toEqual([]);

        expect(range(1, 1)).toEqual([]);
    });

    it('improved', () => {
        expect(range(-4)).toEqual([0, -1, -2, -3]);

        expect(range(-2, 2)).toEqual([-2, -1, 0, 1]);

        expect(range(2, -2)).toEqual([2, 1, 0, -1]);

        expect(range(0, -4, -2)).toEqual([0, -2]);

        expect(range(1, 4, -2)).toEqual([]);

        expect(range(1, -4, 2)).toEqual([]);
    });
});
