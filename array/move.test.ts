import { move } from './move';

describe('move', () => {
    it('base', () => {
        const arr = [1, 2, 3];

        expect(move(arr, 0, 1)).toBe(arr);

        expect(move(4, 2, [1, 2, 3, 4, 5])).toEqual([1, 2, 5, 3, 4]);

        expect(move(2, 0, [1, 2, 3, 4, 5])).toEqual([3, 1, 2, 4, 5]);

        expect(move(0, 2, [1, 2, 3, 4, 5])).toEqual([2, 3, 1, 4, 5]);

        expect(move(0, 10, [1, 2, 3])).toEqual([1, 2, 3]);

        expect(move(0, 0, [1, 2, 3])).toEqual([1, 2, 3]);
    });

    it('improved', () => {
        expect(move(0, -1, [1, 2, 3])).toEqual([3, 2, 1]);

        expect(move(-1, 1, [1, 2, 3, 4, 5])).toEqual([1, 5, 2, 3, 4]);

        expect(move(-4, -1, [1, 2, 3, 4, 5])).toEqual([1, 3, 4, 5, 2]);

        expect(move(-4, -10, [1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });
});
