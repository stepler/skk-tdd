import { keys } from './keys';

describe('object/keys', () => {
    it('should return keys of object', () => {
        expect(keys({})).toEqual([]);
        expect(keys({ a: 1, b: 2 })).toEqual(['a', 'b']);
    });

    it('should return empty keys on invalid object', () => {
        expect(keys('')).toEqual([]);
        expect(keys(false)).toEqual([]);
        expect(keys(null)).toEqual([]);
    });
});
