/**
 * Меняет элементы местами в массиве
 * in-place
 */

import { normalizeIndex } from './array-tools';

export function swap<T = any>(a: number, b: number, list: T[]): T[] {
    a = normalizeIndex(a, list);
    b = normalizeIndex(b, list);
    if (a < 0 || b < 0) {
        return list;
    }
    
    const swap = list[a];
    list[a] = list[b];
    list[b] = swap;
    
    return list;
}
