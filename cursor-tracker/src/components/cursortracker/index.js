import { useState } from "react";
import "./styles.css";

export const Cursortracker = ({height, width, render}) => {

    const [cursorPos, setCursorPos] = useState({});
    const onMouseTrack = (e) => {
        
        setCursorPos({
            x: e.clientX,
            y: e.clientY
        })
        console.log(`🚀 ~ onMouseTrack ~ {
            x: e.clientX,
            y: e.clientY
        }:`, {
            x: e.clientX,
            y: e.clientY
        })
    }
    return (
        <div className="cursor_tracker__container"> 
            Cursor Tracker
            <div
                style={{
                    width: `${width}px`,
                    height: `${height}px`,
                    border: "4px solid black",
                    background: "white"
                }}
                onMouseMove={(e) => onMouseTrack(e)}
            
            > 
                <div
                    style={{
                        position: "absolute",
                        top: `${cursorPos.y}px`,
                        left: `${cursorPos.x}px`,
                        // backgroundColor: "blue",
                        // height: "10px",
                        // width: "10px",
                        // borderRadius: "50%",
                    }}
                >
                    {render}
                </div>
            </div>
        </div>
    )
}