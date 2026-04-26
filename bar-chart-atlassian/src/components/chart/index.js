import { Bar } from "../bar";
import "./styles.css"

export const Chart = ({config}) => {
    return (
        <div className="chart">
            <div className="chart__child">
                {/* <div > */}
                    <div className="chart__yLabel">
                        {config.yLabel}
                    </div>
                {/* </div> */}
            </div>
            <div className="chart__child">
                <div className="chart__graph">
                    <div 
                        className="chart__graph__bar"
                        style={{
                            gridTemplateColumns: `${Array(Object.keys(config.byId).length).fill('200px').join(" ")}`
                        }}
                    >
                        {Object.keys(config.byId).map(key => {
                            const bar = config.byId[key];
                            return (
                                <Bar 
                                    key={key}
                                    color={bar.color}
                                    height={bar.tickets}
                                    name={bar.name}
                                />
                            )
                        })}
                    </div>
                    <div className="chart__xLabel">
                        {config.xLabel}
                    </div>
                </div>
            </div>
        </div>
    )
}