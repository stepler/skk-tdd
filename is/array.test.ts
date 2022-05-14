import { isArray } from './array';

describe('is/array', () => {
    it('test', () => {
        expect(isArray([])).toBe(true);
        expect(isArray([1, 2, 3])).toBe(true);
        expect(isArray('123')).toBe(false);
        expect(isArray(null)).toBe(false);
    });

    it('test type guard', () => {
        const arr: unknown = [1, 2, 3];

        if (isArray(arr)) {
            expect(arr.length).toBe(3);
        }
    });
});
