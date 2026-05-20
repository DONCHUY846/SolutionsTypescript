export function count(phrase : string): Map<string, number> {
    const counts = new Map<string, number>();
    const matches = phrase.toLowerCase().match(/[a-z0-9]+(?:'[a-z0-9]+)?/g);

    if (matches) {
        for (const word of matches) {
            counts.set(word, (counts.get(word) || 0) + 1);
        }
    }

    return counts;
}