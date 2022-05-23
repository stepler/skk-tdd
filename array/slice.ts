/**
 * Создает и возвращает срез исходного массива
 */

import { normalizeIndex } from './array-tools';

export function slice<T = any>(from: number, to: number, list: T[]): T[] {
    from = normalizeIndex(from, list);
    to = normalizeIndex(to, list);
    if (from < 0 || to < 0) {
        return [];
    }

    const len = Math.max(0, to - from + 1);
    const res = new Array(len);
    for (let i = 0; i < len; i++) {
        res[i] = list[from + i];
    }

    return res;
}
