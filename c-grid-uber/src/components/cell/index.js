import { useEffect, useState } from "react";
import "./styles.css";

export const Cell = ({id, isTile, isClicked, onCellClick}) => {

    const [cellClass, setCellClass] = useState();

    const getClassName = () => {
        let classForCell = "cell__container";
        if (isTile) {
            classForCell += " isTile";
        }
        if (isClicked) {
            classForCell += " isClicked";
        }
    }

    useEffect(() => {
        let classForCell = "cell__container";
        if (isTile) {
            classForCell += " isTile";
        }
        if (isClicked) {
            classForCell += " isClicked";
        }

        setCellClass(classForCell);

    }, [isTile, isClicked]);

    return (
        <div 
            className={cellClass} 
            onClick={() => onCellClick(id)}
        />
    )
}