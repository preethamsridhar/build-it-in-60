import "./styles.css"

export const Cell = ({cellObj, isSelected, isCorrect}) => {
    return (
        <div className="cell">{cellObj.value}</div>
    )
}