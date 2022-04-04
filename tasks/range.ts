export function range(a: number, b?: number, step?: number): number[] {
    if (!b) {
        b = a;
        a = 0;
    }
    if (!step) {
        step = b-a > 0
            ? 1
            : -1;
    }

    const limit = step > 0
        ? (num: number) => num < b
        : (num: number) => num > b;

    const res: number[] = [];
    for (let i = a; limit(i); i += step) {
        res.push(i);
    }
    
    return res;
}
