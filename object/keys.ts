/**
 * Вовращает ключи объекта
 */

 import { isObject } from "../is/object";

export function keys(obj: Record<string, any>): string[] {
    if (!isObject(obj)) {
        return [];
    }

    return Object.keys(obj);
}
