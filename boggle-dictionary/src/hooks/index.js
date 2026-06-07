// const gameReducer = (state, action) => {
//     const type = action.type;

import { useMemo, useState } from "react"
import { alphabets, getRandomElements } from "../engine/core";


export const useBoggleGame = (dictionary, gridSize) => {

    const [foundWords] = useState([]);
    const numericGridSize = Number(gridSize) || 0;

    const filteredWords = useMemo(() => {
        if (!Array.isArray(dictionary) || numericGridSize <= 0) {
            return [];
        }

        return dictionary.filter((word) => word.length <= numericGridSize);
    }, [dictionary, numericGridSize]);

    const availableWords = useMemo(() => {
        const pickCount = Math.floor(numericGridSize / 2);
        return getRandomElements(filteredWords, pickCount);
    }, [filteredWords, numericGridSize]);


    const gridArray = useMemo(() => {
        let result = [];
        for (let i = 0; i <gridSize; i++) {
            result.push([]);
            for (let j= 0; j < gridSize; j++) {
                result[i].push({
                    id: `${i}${j}`,
                    value: alphabets[Math.floor(Math.random()*alphabets.length)],
                    isSelected: false,
                    isCorrect: false,
                });
            }
        }
        return result;
    }, [gridSize])

    return {
        availableWords,
        foundWords,
        gridArray,
        // doesWordMatch,
    }
}