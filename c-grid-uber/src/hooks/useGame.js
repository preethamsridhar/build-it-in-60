import { useEffect, useReducer, useRef } from "react"
import { gameReducer, getGridConfig, getInitialState } from "../engine/core"
import { ACTIONS, DELAY } from "../constants";

export const useGame = () => {
    const [state, dispatch] = useReducer(gameReducer, getInitialState(getGridConfig));
    const intervalId = useRef(null)
    const clickStackRef = useRef([]);

    const onCellClick = (id) => {
        dispatch({
            type: ACTIONS.onCellClick,
            payload: {
                id
            }
        })
    }

    const triggerReset = () => {
        dispatch({
            type: ACTIONS.reset,
            payload: {
                id: clickStackRef.current[clickStackRef.current.length - 1]
            }
        })
    };

    useEffect(() => {
        if (state.isGameOver && state.clickStack.length === 0) {
            clearInterval(intervalId.current);
            intervalId.current = null;
            dispatch({
                type: ACTIONS.restartGame
            })
        }
        if (state.clickStack.length === state.shapeSize) {
            if (state.isGameOver || !state.isResetting) {
                intervalId.current = setInterval(() => {
                    triggerReset();
                }, DELAY)
            }
        }

        clickStackRef.current = state.clickStack;
    }, [state])

    useEffect(() => {
        
        return () => {
            clearInterval(intervalId.current);
            intervalId.current = null;
        }
    }, [])

    return {
        state,
        onCellClick,
    }
}