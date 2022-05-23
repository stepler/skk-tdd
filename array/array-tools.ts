export const normalizeIndex = (i: number, arr: any[]): number => {
    if (i < 0) {
        i += arr.length;
    }
    if (0 <= i && i < arr.length) {
        return i;
    }
    return -1;
}
