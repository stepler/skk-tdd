/**
 * Создает новый перемешанный массив
 */

export function shuffle<T = any>(list: T[]): T[] {
    const res = new Array(list.length);
    res[0] = list[0];

    for (let i = 1; i < list.length; i++) {
        const idx = Math.floor(Math.random() * i);
        const swap = res[idx];
        res[idx] = list[i];
        res[i] = swap;
    }
    
    return res;
}
