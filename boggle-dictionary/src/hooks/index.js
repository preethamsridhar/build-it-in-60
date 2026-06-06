// const gameReducer = (state, action) => {
//     const type = action.type;

import { useEffect, useState } from "react"
import { getRandomElements } from "../engine/core";

export const useBoggleGame = (dictionary, gridSize) => {

    const [state, setState] = useState([]);
    const [foundWords, setFoundWords] = useState([]);

    useEffect(() => {
        setState(dictionary.filter((ele) => ele.length < gridSize ))
    },[gridSize])


    const availableWords = getRandomElements(state, Number(gridSize)/2);

    return {
        availableWords,
        foundWords
        // doesWordMatch,
    }
}