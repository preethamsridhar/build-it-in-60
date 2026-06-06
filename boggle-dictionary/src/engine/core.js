// Dictionary of valid words
export const DICTIONARY = ['react', 'javascript', 'frontend', 'uber', 'coding', 'interview', 'web', 'app', 'html', 'css', 'node', 'api', 'test', 'debug', 'code', 'dev'];


export const getRandomElements = (array, count) => {
    console.log(array);
    console.log(count);

    const result = new Set();
    while(result.size < count) {
        result.add(array[Math.floor(Math.random() * array.length)])
    }
    return Array.from(result);
}