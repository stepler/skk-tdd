/**
 * Проверяет что значения является объектом
 */

import { isArray } from "./array";

export function isObject(test: any): test is Record<any, any> {
    return typeof test === 'object' && !isArray(test) && test !== null;
}
