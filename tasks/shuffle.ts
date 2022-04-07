export function shuffle<T = any>(arr: T[]): T[] {
    return Array.from(arr).sort(() => 0.5 - Math.random());
}
