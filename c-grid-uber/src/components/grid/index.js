import { useGame } from "../../hooks/useGame";
import { Cell } from "../cell";

export const Grid = () => {

    const { state, onCellClick } = useGame();
    return (
        <>
            <div>
                {state.isGameOver && <h4>Game over</h4>}
            </div>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: Array(state.size).fill("80px").join(" ")
                }}
            >
                {
                    Object.keys(state.byId).map(ele => {
                        const cellObj = state.byId[ele];
                        return (
                            <Cell
                                key={ele}
                                id={cellObj.id}
                                isClicked={cellObj.isClicked}
                                isTile={cellObj.isTile}
                                onCellClick={() => onCellClick(cellObj.id)}
                            />
                        )
                    })
                }
            </div>
        </>
    );
}