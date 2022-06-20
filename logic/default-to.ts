/**
 * Вовращает второй агрумент если он валидный, если нет, возвращает первый
 */

export function defaultTo(arg1: any, arg2: any): any {
    if (!arg2 && arg2 !== false && arg2 !== '' && arg2 !== 0) {
        return arg1;
    }
    
    return arg2;
}
