import { useEffect } from "react";
import { useWhiteBoard } from "../../hooks";
import { Cell } from "../cell";
import { cellSize } from "../../engine/core";

export const Whiteboard = ({ rows, cols, shapeConfig }) => {

    const { state, selectShape, moveShape } = useWhiteBoard(rows, cols, shapeConfig);

    useEffect(() => {
        console.log('state', state)
    }, [state]);

    return (
        <div>
            <h2>Whiteboard</h2>
            <div
                style={{
                    display: "grid",
                }}
            
            >
                {
                    state.gridArray.map((ele, index) => {
                        return (
                            <div key={index} >
                                {
                                    ele.map(cellId => {
                                        return (
                                            <Cell
                                                key={cellId}
                                                cellState={state.byId[cellId]}
                                                cellId={cellId}
                                                selectShape={selectShape}
                                                moveShape={moveShape}
                                            />
                                        )
                                    })
                                }
                            </div>
                        )

                    })
                }
            </div>
        </div>
    );
}