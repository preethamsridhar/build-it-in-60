import { useEffect } from "react";
import { cellSize, shapeConfig } from "../../engine/core";
import "./styles.css";
import { Shape } from "../shape";

export const Cell = ({ cellState, cellId, selectShape, moveShape }) => {

    const onDropShape = (e) => {
        const shapeId = e.dataTransfer.getData('shapeId');
        const fromCellId = e.dataTransfer.getData('cellId');
        moveShape(fromCellId, cellId, shapeId);
    }

    return (
        <div
            className="cell__container"
            style={{
                width: cellSize,
                height: cellSize
            }}
            onDragOver={(e) => {e.preventDefault()}}
            onDrop={e => onDropShape(e)}
        >
            <div>
                <div
                    style={{
                        display: 'absolute'
                    }}
                >
                    {cellId}
                </div>
                {
                    cellState.value
                        ? <Shape
                            cellState={cellState}
                            type={shapeConfig[cellState.value].type}
                            selectShape={selectShape} 
                        />
                        : null
                }
            </div>
        </div>
    );
}