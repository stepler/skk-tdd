import { slice } from './slice';

describe('slice', () => {
    it('base', () => {
        const list = [1, 2, 3, 4, 5];

        expect(slice(list, 0)).toEqual([1, 2, 3, 4, 5]);

        expect(slice(list, 2)).toEqual([3, 4, 5]);

        expect(slice(list, 2, 4)).toEqual([3, 4]);

        expect(slice(list, 10)).toEqual([]);

        expect(slice(list, 4, 2)).toEqual([]);
    });

    it('improved', () => {
        const list = [1, 2, 3, 4, 5];

        expect(slice(list, -3)).toEqual([2, 3, 4]);

        expect(slice(list, 2, -2)).toEqual([3]);

        expect(slice(list, -4, -1)).toEqual([2, 3, 4]);
    });
});
