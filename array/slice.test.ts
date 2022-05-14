import { slice } from './slice';

describe('array/slice', () => {
    it('base', () => {
        const list = [1, 2, 3, 4, 5];

        expect(slice(0, Infinity, list)).toEqual([1, 2, 3, 4, 5]);

        expect(slice(2, Infinity, list)).toEqual([3, 4, 5]);

        expect(slice(2, 2, list)).toEqual([3]);

        expect(slice(2, 4, list)).toEqual([3, 4, 5]);

        expect(slice(10, Infinity, list)).toEqual([]);

        expect(slice(4, 2, list)).toEqual([]);
    });

    it('improved', () => {
        const list = [1, 2, 3, 4, 5];

        expect(slice(-3, Infinity, list)).toEqual([3, 4, 5]);

        expect(slice(2, -3, list)).toEqual([3]);

        expect(slice(-4, -1, list)).toEqual([2, 3, 4, 5]);

        expect(slice(-10, Infinity, list)).toEqual([]);

        expect(slice(2, -10, list)).toEqual([]);
    });
});
