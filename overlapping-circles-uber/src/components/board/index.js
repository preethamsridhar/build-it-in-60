import { useEffect } from "react";
import "./styles.css";
import { useGame } from "../../hooks";

export const Board = () => {

    const {state, startCircle, moveCircle, setCurrentCirlceId} = useGame();

    const onMouseDownHandler = (e) => {
        if (e.button == 0) {
            startCircle(e, 'left');
        } else {
            startCircle(e, 'right');
        }
    }

    const onMouseMoveHandler = (e) => {
        moveCircle(e);
    }

    useEffect(() => {
        document.addEventListener('contextmenu', (e) => e.preventDefault());

        return () => {
            document.removeEventListener('contextmenu', () => {});
        }
    }, []);


    return (
        <div
            className="board"
            onMouseDown={onMouseDownHandler}
            onMouseMove={onMouseMoveHandler}
            onMouseUp={() => setCurrentCirlceId("")}
        >
            {
                Object.keys(state.byId).map(key => {
                    const circle = state.byId[key];
                    return (
                        <div 
                            key={key}
                            style={{
                                position: 'absolute',
                                top: circle.y,
                                left: circle.x,
                                backgroundColor: circle.backgroundColor,
                                height: circle.size,
                                width: circle.size,
                                borderRadius: '50%',
                                transform: 'translate(-50%,-50%)'
                            }}
                        />
                        
                    )
                })
            }
            </div>
    )
}