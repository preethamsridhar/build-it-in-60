export const shapeConfig = {
    "shape1": {
        id: "shape1",
        x: "0",
        y: "0",
        type: "circle"
    },
    "shape2": {
        id: "shape2",
        x: "0",
        y: "1",
        type: "rectangle"
    },
    "shape3": {
        id: "shape3",
        x: "1",
        y: "1",
        type: "rectangle"
    },
    "shape4": {
        id: "shape4",
        x: "1",
        y: "2",
        type: "rectangle"
    },
    "shape5": {
        id: "shape5",
        x: "1",
        y: "0",
        type: "circle"
    }
}


export const actions = {
    addShape: 'addShape',
    selectShape: 'selectShape',
    moveShape: 'moveShape'
}

export const generateGridConfig = (rows, cols) => {
    return {
        byId: {
            "00": {
                id: '00',
                value: null,
                rowPos: 0,
                colPos: 0,
                isSelected: false,
            },
            "01": {
                id: '01',
                value: null,
                rowPos: 0,
                colPos: 1,
                isSelected: false,
            },
            "02": {
                id: '02',
                value: null,
                rowPos: 0,
                colPos: 2,
                isSelected: false,
            },
            "10": {
                id: '10',
                value: null,
                rowPos: 1,
                colPos: 0,
                isSelected: false,
            },
            "11": {
                id: '11',
                value: null,
                rowPos: 1,
                colPos: 1,
                isSelected: false,
            },
            "12": {
                id: '12',
                value: null,
                rowPos: 1,
                colPos: 2,
                isSelected: false,
            }
        },
        gridArray: [
            ["00", "01", "02"],
            ["10", "11", "12"],
        ]
    }
}

export const whiteboardReducer = (state, action) => {
    const type = action.type;

    switch (type) {
        case actions.addShape: 
            const shapeConfig = action.payload.shapeConfig;
            let tempState = {...state};

            Object.keys(shapeConfig).forEach(ele => {
        
                const coord = String(shapeConfig[ele].x)+String(shapeConfig[ele].y);
                tempState = {
                    ...tempState,
                    byId: {
                        ...tempState.byId,
                        [coord]: {
                            ...tempState.byId[coord],
                            value: ele
                        }
                    }
                }
            });
            return tempState;
        case actions.selectShape: 
            const cellId = action.payload.cellId;
            return {
                ...state,
                byId: {
                    ...state.byId,
                    [cellId]: {
                        ...state.byId[cellId],
                        isSelected: !state.byId[cellId].isSelected,
                    }
                }
            }
        case actions.moveShape: 
            const fromCellId = action.payload.fromCellId;
            const toCellId = action.payload.toCellId;
            const shapeId = action.payload.shapeId;

            return {
                ...state,
                byId: {
                    ...state.byId,
                    [fromCellId]: {
                        ...state.byId[fromCellId],
                        isSelected: false,
                        value: state.byId[toCellId].value,
                    },
                    [toCellId]: {
                        ...state.byId[toCellId],
                        isSelected: false,
                        value: state.byId[fromCellId].value
                    }
                }
            }
        default: return state;
    }
}

export const cellSize = '80px';

export const shapeSize = '40px';
export const halfShapeSize = '20px';
