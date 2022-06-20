import { defaultTo } from './default-to';

describe('logic/defaultTo', () => {
    it('should return first argument', () => {
        expect(defaultTo('def', undefined)).toBe('def');
        expect(defaultTo('def', null)).toBe('def');
        expect(defaultTo('def', NaN)).toBe('def');

        expect(defaultTo(undefined, NaN)).toBeUndefined();
        expect(defaultTo(null, NaN)).toBeNull();
        expect(defaultTo(NaN, null)).toBeNaN();
    });

    it('should return second argument', () => {
        expect(defaultTo('def', true)).toBe(true);
        expect(defaultTo('def', false)).toBe(false);
        expect(defaultTo('def', '')).toBe('');
        expect(defaultTo('def', 0)).toBe(0);
    });
});
