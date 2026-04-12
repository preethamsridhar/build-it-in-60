import { useEffect } from "react"
import { halfShapeSize, shapeSize } from "../../engine/core"
import "./styles.css"
export const Shape = ({cellState, type, selectShape}) => {

    useEffect(() => {console.log('cellState', cellState)}, [cellState])

    const getStyles = {
            border: cellState.isSelected ? '4px dotted black' : '4px solid black',
            width: shapeSize,
            height: type === 'rectangle' ? halfShapeSize : shapeSize,
            backgroundColor: type === 'circle' ? 'red' : type === 'rectangle' ? 'yellow' : 'white',
            borderRadius: type === 'circle' ? '50%' : null,
        }

    const onDrag = (e) => {
        e.dataTransfer.setData('cellId', cellState.id);
        console.log("🚀 ~ onDrag ~ cellState.id:", cellState.id)
        e.dataTransfer.setData('shapeId', cellState.value );
        console.log("🚀 ~ onDrag ~ cellState.value:", cellState.value)
    }

    return (
        <div
            draggable
            onDragStart={e => onDrag(e)}
            className={`shape__container`}
            style={getStyles}
            onClick={() => selectShape(cellState.id)}
        /> 
    )
}