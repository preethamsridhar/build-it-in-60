import { useEffect, useReducer } from "react";
import { actions, generateGridConfig, whiteboardReducer } from "../engine/core";

export const useWhiteBoard = (rows, cols, shapeConfig) => {
    const [state, dispatch] = useReducer(whiteboardReducer, generateGridConfig(rows, cols));

    useEffect(() => {
        console.log('shapeConfig', shapeConfig)
        dispatch({
            type: actions.addShape,
            payload: {
                shapeConfig
            }
        })
    }, [])

    const selectShape = (cellId) => {
        dispatch({
            type: actions.selectShape,
            payload: {
                cellId
            }
        })
    }

    const moveShape = (fromCellId, toCellId, shapeId) => {
        // if (state.byId[toCellId].value === null) {
            dispatch({
                type: actions.moveShape,
                payload: {
                    fromCellId,
                    toCellId,
                    shapeId,
                }
            })
        // }
    }

    return {
        state,
        moveShape,
        selectShape,
    }
}