import { sequenceGenerator } from './sequence-generator';

it('sequenceGenerator', () => {
    expect(typeof sequenceGenerator(0)).toBe('function');

    const sgenA = sequenceGenerator(0);
    expect(sgenA()).toBe(0);
    expect(sgenA()).toBe(1);
    expect(sgenA()).toBe(2);
    Array.from({ length: 99 }).forEach(() => sgenA());
    expect(sgenA()).toBe(102);

    const sgenB = sequenceGenerator(1, 2);
    expect(sgenB()).toBe(1);
    expect(sgenB()).toBe(3);
    expect(sgenB()).toBe(5);

    const sgenC = sequenceGenerator(-2, -2);
    expect(sgenC()).toBe(-2);
    expect(sgenC()).toBe(-4);
    expect(sgenC()).toBe(-6);
    expect(sgenC()).toBe(-8);
    expect(sgenC()).toBe(-10);
});
