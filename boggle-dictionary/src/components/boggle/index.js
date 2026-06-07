import { useState } from "react";
import { useBoggleGame } from "../../hooks";
import "./styles.css";
import { Grid } from "../grid";

export const Boggle = ({dictionary}) => {

    const [gridSize, setGridSize] = useState(6);


    const {availableWords, gridArray} = useBoggleGame(dictionary, gridSize);

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
                    <Grid gridArray={gridArray} />
                </div>
                <div className="boggle__results">
                    <div clasName="boggle__found"></div>
                    <div clasName="boggle__available">
                        Available words
                        {
                            availableWords.map(ele => {
                                return (
                                    <div key={ele}>{ele}</div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}