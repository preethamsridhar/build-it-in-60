import { useState } from "react";
import { useBoggleGame } from "../../hooks";
import "./styles.css";

export const Boggle = ({dictionary}) => {

    const [gridSize, setGridSize] = useState(6);


    const {availableWords} = useBoggleGame(dictionary, gridSize);

    return (
        <div className="boggle__container">
            <div className="boggle__input">
                {/* input for grid size */}
                Word Search Game
                <div>
                    <label>Grid size</label>
                    <input type="number" value={gridSize} onChange={(e) => setGridSize(e.target.value)} />
                </div>
                <div>
                    <button>Generate</button>
                </div>

            </div>
            <div className="boggle__game">
                <div className="boggle__board">
                    {/* Boards */}
                </div>
                <div className="boggle__results">
                    <div clasName="boggle__found"></div>
                    <div clasName="boggle__available">
                        {
                            availableWords.map(ele => {
                                return (
                                    <span key={ele}>ele</span>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}