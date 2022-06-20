/**
 * Проверяет наличие ключа в объекте
 */

import { isObject } from "../is/object"; 

export function has(prop: string, obj: Record<string, any>): boolean {
    if (!isObject(obj)) {
        return false;
    }

    return obj.hasOwnProperty(prop);
}
