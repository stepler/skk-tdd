import { path } from './path';

describe('object/path', () => {
    it('should return undefined on invalid object', () => {
        expect(path(['a'], undefined)).toBeUndefined();
        expect(path(['a'], null)).toBeUndefined();
        expect(path(['a'], 'str')).toBeUndefined();
    });

    it('should return property', () => {
        // return valid truthy value
        expect(path(['a', 'b'], { a: { b: 1 } })).toBe(1);
        expect(path(['a'], { a: 1 })).toBe(1);

        // return valid falsy value
        expect(path(['a', 'b'], { a: { b: 0 } })).toBe(0);
        expect(path(['a', 'b'], { a: { b: false } })).toBe(false);
        expect(path(['a', 'b'], { a: { b: null } })).toBeNull();
        expect(path(['a', 'b'], { a: { b: NaN } })).toBeNaN();
        expect(path(['a', 'b'], { a: { b: undefined } })).toBeUndefined();

        // return undefined value
        expect(path(['a', 'c'], { a: { b: 1 } })).toBeUndefined();
    });
});
