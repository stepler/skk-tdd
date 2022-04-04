type ArrPred<T> = (x: T, index: number) => boolean;

export function groupBy<T = any>(fns: ArrPred<T>[], arr: T[]): T[][] {
    const workArr = Array.from(arr);
    fns.push(() => true);
    
    return fns.map(fn => {
        const fnRes = [];
        let idx = workArr.findIndex(fn);
        while (idx !== -1) {
            fnRes.push(workArr[idx]);
            workArr.splice(idx, 1);
            idx = workArr.findIndex(fn);
        }
        return fnRes;
    });
}
