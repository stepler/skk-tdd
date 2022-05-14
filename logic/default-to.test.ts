import { defaultTo } from './default-to';

describe('logic/defaultTo', () => {
    it('should return first argument', () => {
        expect(deaultTo('def', undefined)).toBe('def');
        expect(deaultTo('def', null)).toBe('def');
        expect(deaultTo('def', NaN)).toBe('def');

        expect(deaultTo(undefined, NaN)).toBeUndefined();
        expect(deaultTo(null, NaN)).toBeNull();
        expect(deaultTo(NaN, null)).toBeNaN();
    });

    it('should return second argument', () => {
        expect(deaultTo('def', true)).toBe(true);
        expect(deaultTo('def', false)).toBe(false);
        expect(deaultTo('def', '')).toBe('');
        expect(deaultTo('def', 0)).toBe(0);
    });
});
