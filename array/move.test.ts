import { move } from './move';

describe('move', () => {
    it('base', () => {
        const arr = [1, 2, 3];

        expect(move(arr, 0, 1)).toBe(arr);

        expect(move([1, 2, 3, 4, 5], 2, 4)).toEqual([1, 2, 5, 3, 4]);

        expect(move([1, 2, 3, 4, 5], 2, 0)).toEqual([3, 1, 2, 4, 5]);

        expect(move([1, 2, 3, 4, 5], 0, 2)).toEqual([2, 3, 1, 4, 5]);

        expect(move([1, 2, 3], 0, 10)).toEqual([1, 2, 3]);

        expect(move([1, 2, 3], 0, 0)).toEqual([1, 2, 3]);
    });

    it('improved', () => {
        expect(move([1, 2, 3], 0, -1)).toEqual([3, 2, 1]);

        expect(move([1, 2, 3, 4, 5], -1, 1)).toEqual([1, 5, 2, 3, 4]);

        expect(move([1, 2, 3, 4, 5], -4, -1)).toEqual([1, 3, 4, 5, 2]);
    });
});
