/**
 * Объединяет несколько объектов в один через функцию
 */

type Func<T1, T2, R> = (
    v1: T1[keyof T1] | T2[keyof T2],
    v2: T1[keyof T1] | T2[keyof T2],
    k: keyof (T1 & T2),
    t1: T1,
    t2: T2
) => R;


export function mergeWith(fn: Func<any, any, any>, ...sources: Record<any, any>[]): Record<any, any> {
    return sources.reduce((res, cur) => {
        Object.keys(cur).forEach(key => {
            if (res[key]) {
                res[key] = fn(res[key], cur[key], key, res, cur);
            } else {
                res[key] = cur[key];
            }
        });
        
        return res;
    }, {});
}
