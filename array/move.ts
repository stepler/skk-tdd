/**
 * Перемещает элемент в массиве с сохранением порядка
 * in-place
 */

import { normalizeIndex } from './array-tools';

export function move<T = any>(from: number, to: number, list: T[]): T[] {
    from = normalizeIndex(from, list);
    to = normalizeIndex(to, list);
    if (from < 0 || to < 0) {
        return list;
    }

    const swap = list[from];

    if (to < from) {
        for (let i = from; i > to; i--) {
            list[i] = list[i-1];
        }
    } else {
        for (let i = from; i < to; i++) {
            list[i] = list[i+1];
        }
    }

    list[to] = swap;

    return list;
}
