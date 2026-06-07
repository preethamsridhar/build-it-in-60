// Dictionary of valid words
export const DICTIONARY = ['react', 'javascript', 'frontend', 'uber', 'coding', 'interview', 'web', 'app', 'html', 'css', 'node', 'api', 'test', 'debug', 'code', 'dev'];


export const getRandomElements = (array, count) => {
    const safeArray = Array.isArray(array) ? array.filter((item) => item != null) : [];
    const requestedCount = Number(count) || 0;
    const maxCount = Math.max(0, Math.min(requestedCount, safeArray.length));

    if (maxCount === 0) {
        return [];
    }

    const result = new Set();
    while(result.size < maxCount) {
        result.add(safeArray[Math.floor(Math.random() * safeArray.length)])
    }
    return Array.from(result);
}

export const alphabets = [...'abcdefghijklmnopqrstuvwxyz'];
