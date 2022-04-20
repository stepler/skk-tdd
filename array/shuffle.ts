/**
 * Создает новый перемешанный массив
 */

export function shuffle<T = any>(list: T[]): T[] {
    const res = new Array(list.length);

    for (let i = 0; i < list.length; i++) {
        const idx = Math.floor(Math.random() * i);
        res[i] = res[idx];
        res[idx] = list[i];
    }
    
    return res;
}
