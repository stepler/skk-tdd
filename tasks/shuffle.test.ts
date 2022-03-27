import { shuffle } from './shuffle';

it('shuffle', () => {
    const arr = [1, 2, 3, 4, 5];
    const res = shuffle(arr);

    expect(res).not.toBe(arr);
    expect(res).toHaveLength(arr.length);
    expect(res).toEqual(expect.arrayContaining(arr));
    expect(res.some((val, idx) => arr[idx] !== val)).toBeTruthy();
});
