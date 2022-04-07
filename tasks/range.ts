export function range(a: number, b?: number, step?: number): number[] {
    if (!b) {
        b = a;
        a = 0;
    }
    if (!step) {
        step = b > a
            ? 1
            : -1;
    }

    const res: number[] = [];
    for (let i = a; step > 0 ? i < b : i > b; i += step) {
        res.push(i);
    }
    
    return res;
}
