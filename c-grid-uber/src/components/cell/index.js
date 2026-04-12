import { useEffect, useState } from "react";
import "./styles.css";

export const Cell = ({id, isTile, isClicked, onCellClick}) => {

    return (
        <div
            className={`cell__container${isTile ? " isTile" : ""}${isClicked ? " isClicked" : ""}`} 
            onClick={() => onCellClick(id)}
        />
    )
}