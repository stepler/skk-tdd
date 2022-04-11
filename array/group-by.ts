/**
 * Разбивает входнной массив на группы согласно переданным условиями
 * Элементы не попавшие ни под одно условие, попадают в последнюю группу
 *
 * @example
 * groupBy([isString, isNumber], ['a', 0, 'b', null]) => [['a', 'b'], [0], [null]]
 */

type ArrPred<T> = (x: T, index: number) => boolean;

export function groupBy<T = any>(fns: ArrPred<T>[], list: T[]): T[][] {
    //...
}
