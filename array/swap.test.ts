import { swap } from './swap';

describe('array/swap', () => {
    it('base', () => {
        const arr = [1, 2, 3];

        expect(swap(arr, 0, 1)).toBe(arr);

        expect(swap(0, 1, [1, 2, 3])).toEqual([2, 1, 3]);

        expect(swap(0, 10, [1, 2, 3])).toEqual([1, 2, 3]);

        expect(swap(0, 0, [1, 2, 3])).toEqual([1, 2, 3]);
    });

    it('improved', () => {
        expect(swap(0, -1, [1, 2, 3])).toEqual([3, 2, 1]);

        expect(swap(-3, -1, [1, 2, 3, 4, 5])).toEqual([1, 2, 5, 4, 3]);
    });
});
