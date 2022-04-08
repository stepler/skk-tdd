export function shuffle<T = any>(arr: T[]): T[] {
    const res = new Array(arr.length);
    res[0] = arr[0];

    for (let i = 1; i < arr.length; i++) {
        const idx = Math.floor(Math.random() * i);
        const swap = res[idx];
        res[idx] = arr[i];
        res[i] = swap;
    }
    
    return res;
}
