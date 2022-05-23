/**
 * Возвращает функцию-генератор последовательностей с заданным шагом
 * При каждом вызове, генератор отдает следующий элемент последовательности
 */

type GeneratorFn = () => number;

export function sequenceGenerator(initial: number, step: number = 1): GeneratorFn {
    initial -= step;
    return () => initial += step;
}
