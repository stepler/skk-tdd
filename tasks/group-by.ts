type ArrPred<T> = (x: T, index: number) => boolean;

export function groupBy<T = any>(fns: ArrPred<T>[], arr: T[]): T[][] {
    fns.push(() => true);

    const res: T[][] = new Array(fns.length);
    for (let j = 0; j < res.length; j++) {
        res[j] = [];
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < res.length; j++) {
            if (fns[j](arr[i], i)) {
                res[j].push(arr[i]);
                break;
            }
        }
    }
    return res;
}
