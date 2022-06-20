/**
 * Проверяет что значения является массивом
 */

export function isArray(test: any): test is [] {

    if (typeof test === 'object' && test !== null && Object.getPrototypeOf(test)) {
        console.log('here', test.prototype);
        if (Object.getPrototypeOf(test) === Object.getPrototypeOf([])) {
            return true;
        } else {
            isArray(Object.getPrototypeOf(test));
        }
    }
    
    return false;
}
