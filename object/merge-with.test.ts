import { mergeWith } from './merge-with';

describe('object/mergeWith', () => {
    it('merge without resolve function calling', () => {
        const f = jest.fn((x, y) => x + y);

        const a = { a: 1 };
        const b = { b: 2, c: 3 };

        expect(mergeWith(f, a, b)).toEqual({ a: 1, b: 2, c: 3 });
        expect(f).not.toBeCalled();
    });

    it('merge with resolve function calling', () => {
        const f = jest.fn((x, y) => x + y);

        const a = { a: 1, b: 3 };
        const b = { a: 2, b: 2, c: 3 };
        const c = { a: 4, c: 4, d: 8 };

        expect(mergeWith(f, a, b, c)).toEqual({ a: 7, b: 5, c: 7, d: 8 });

        expect(f).toBeCalledWith(1, 2, 'a', expect.any(Object), b);
        expect(f).toBeCalledWith(3, 4, 'a', expect.any(Object), c);
        expect(f).toBeCalledWith(3, 2, 'b', expect.any(Object), b);
        expect(f).toBeCalledWith(3, 4, 'c', expect.any(Object), c);
    });
});
