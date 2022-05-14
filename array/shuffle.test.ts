import { shuffle } from './shuffle';

it('array/shuffle', () => {
    it('test', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        const res = shuffle(arr);

        expect(res).not.toBe(arr);

        expect(res).toHaveLength(arr.length);

        expect(res).toEqual(expect.arrayContaining(arr));

        expect(res.some((val, idx) => arr[idx] !== val)).toBeTruthy();

        expect(arr.every((val) => res.includes(val))).toBeTruthy();
    });
});
