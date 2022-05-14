import { has } from './has';

describe('object/has', () => {
    it('should check prop', () => {
        expect(has('a', { a: 5 })).toBe(true);
        expect(has('a', {})).toBe(false);
    });

    it('should return false on invalid object', () => {
        expect(has('a', null)).toBe(false);
        expect(has('a', undefined)).toBe(false);
        expect(has('a', 'ijfwfa')).toBe(false);
        expect(has('a', 'a')).toBe(false);
    });

    it('should ignore props on proto', () => {
        function Test() {
            this.a = 1
        }

        Test.prototype = { b: 5 };

        expect(has('a', new Test())).toBe(true);
        expect(has('b', new Test())).toBe(false);
    });
});
