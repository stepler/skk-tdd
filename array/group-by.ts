/**
 * Разбивает входнной массив на группы согласно переданным условиями
 * Элементы не попавшие ни под одно условие, попадают в последнюю группу
 *
 * @example
 * groupBy([isString, isNumber], ['a', 0, 'b', null]) => [['a', 'b'], [0], [null]]
 */

type ArrPred<T> = (x: T, index: number) => boolean;

export function groupBy<T = any>(fns: ArrPred<T>[], list: T[]): T[][] {
    const res: T[][] = new Array(fns.length + 1);
    for (let j = 0; j < res.length; j++) {
        res[j] = [];
    }

    for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < res.length; j++) {
            if (! fns[j]) {
                res[j].push(list[i]);
                break;
            }
            if (fns[j](list[i], i)) {
                res[j].push(list[i]);
                break;
            }
        }
    }
    return res;
}
