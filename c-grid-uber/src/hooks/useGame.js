import { useCallback, useEffect, useReducer, useRef } from "react"
import { gameReducer, getGridConfig } from "../engine/core"
import { ACTIONS } from "../constants";

export const useGame = () => {
    const [state, dispatch] = useReducer(gameReducer, getGridConfig);
    const intervalId = useRef(null)
    const clickStackRef = useRef([]);

    const onCellClick = (id) => {
        // clickStackRef.current.push(id);
        dispatch({
            type: ACTIONS.onCellClick,
            payload: {
                id
            }
        })
    }

    const triggerReset = () => {
        console.log("state in trigger reset", state);
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
            intervalId.current = 0;
            dispatch({
                type: ACTIONS.restartGame
            })
        }
        if (state.clickStack.length === state.shapeSize) {
            if (state.isGameOver || !state.isResetting) {
                intervalId.current = setInterval(() => {
                    triggerReset();
                }, 300)
            }
        }

        clickStackRef.current = state.clickStack;

        () => {
            clearInterval(intervalId.current);
        }
    }, [state])

    return {
        state,
        onCellClick,
    }
}