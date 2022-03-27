type ArrPred<T> = (x: T, index: number) => boolean;

export function groupBy<T = any>(fns: ArrPred<T>[], arr: T[]): T[][] {
    //...
}
