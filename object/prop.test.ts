import { prop } from './prop';

describe('object/prop', () => {
    it('should return undefined on invalid object', () => {
        expect(prop('a', undefined)).toBeUndefined();
        expect(prop('a', null)).toBeUndefined();
        expect(prop('a', 'str')).toBeUndefined();
    });

    it('should return property', () => {
        // return valid truthy property
        expect(prop('a', { a: 1 })).toBe(1);

        // return valid falsy prop
        expect(prop('a', { a: 0 })).toBe(0);
        expect(prop('a', { a: false })).toBe(false);
        expect(prop('a', { a: null })).toBeNull();
        expect(prop('a', { a: NaN })).toBeNaN();
        expect(prop('a', { a: undefined })).toBeUndefined();
        
        // return undefined prop
        expect(prop('b', { a: 1 })).toBeUndefined();
    });
});
