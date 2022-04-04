export function shuffle<T = any>(arr: T[]): T[] {
    const set = new Set<number>();
    while (set.size < arr.length) {
        set.add(Math.floor(Math.random() * arr.length));
    }

    const res = new Array(arr.length);
    let i = 0;
    set.forEach((el) => {
        res[el] = arr[i];
        i++;
    });
    return res;
}
