/**
 * Вовращает свойство объекта
 */

 import { isObject } from "../is/object";

export function prop(prop: string, obj: Record<string, any>): any {
    if (!isObject(obj)) {
        return;
    }

    return obj[prop];
}
