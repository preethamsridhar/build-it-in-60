import { ACTIONS } from "../constants";

export const getInitialState = () => {
    const state = getGridConfig;
    return state;
}

export const getGridConfig = {
    byId: {
        id1: {
            id: 'id1',
            isClicked: false,
            isTile: true,
        },
        id2: {
            id: 'id2',
            isClicked: false,
            isTile: true,
        },
        id3: {
            id: 'id3',
            isClicked: false,
            isTile: true,
        },
        id4: {
            id: 'id4',
            isClicked: false,
            isTile: true,
        },
        id5: {
            id: 'id5',
            isClicked: false,
            isTile: false,
        },
        id6: {
            id: 'id6',
            isClicked: false,
            isTile: false,
        },
        id7: {
            id: 'id7',
            isClicked: false,
            isTile: true,
        },
        id8: {
            id: 'id8',
            isClicked: false,
            isTile: true,
        },
        id9: {
            id: 'id9',
            isClicked: false,
            isTile: true,
        }
    },
    clickStack: [],
    isGameOver: false,
    size: 3,
    shapeSize: 7,
    isResetting: false,
}

export const gameReducer = (state, action) => {

    const actionType = action.type;

    let cellId;
    let clickStackTemp, returnState;
    switch (actionType) {
        case ACTIONS.onCellClick:
            cellId = action.payload.id;
            clickStackTemp = [...state.clickStack];
            if (!state.isGameOver && state.byId[cellId].isTile && !state.byId[cellId].isClicked && !state.byId[cellId].isResetting) {
                clickStackTemp.push(cellId);
                returnState = {
                    ...state,
                    byId: {
                        ...state.byId,
                        [cellId]: {
                            ...state.byId[cellId],
                            isClicked: !state.byId[cellId].isClicked
                        }
                    },
                    clickStack: clickStackTemp,
                }
                if (returnState.clickStack.length === returnState.shapeSize) {
                    returnState.isGameOver = true;
                }
                return returnState;
            } else {
                state;
            }
            break;
        case ACTIONS.reset:
            cellId = action.payload.id;
            clickStackTemp = [...state.clickStack];
            clickStackTemp = clickStackTemp.slice(0, clickStackTemp.length - 1);
            returnState = {
                ...state,
                byId: {
                    ...state.byId,
                    [cellId]: {
                        ...state.byId[cellId],
                        isClicked: false,
                    }
                },
                clickStack: clickStackTemp,
                isResetting: clickStackTemp.length > 0 ? true : false,
            }
            return returnState;

        case ACTIONS.restartGame: 
            return getInitialState();
        default:
            return state;
    }
    return state;
}