import { swap } from './swap';

describe('swap', () => {
    it('base', () => {
        const arr = [1, 2, 3];

        expect(swap(arr, 0, 1)).toBe(arr);

        expect(swap([1, 2, 3], 0, 1)).toEqual([2, 1, 3]);

        expect(swap([1, 2, 3], 0, 10)).toEqual([1, 2, 3]);

        expect(swap([1, 2, 3], 0, 0)).toEqual([1, 2, 3]);
    });

    it('improved', () => {
        expect(swap([1, 2, 3], 0, -1)).toEqual([3, 2, 1]);

        expect(swap([1, 2, 3, 4, 5], -3, -1)).toEqual([1, 2, 5, 4, 3]);
    });
});
