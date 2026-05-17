import { Progress } from "../progress";
import "./styles.css"

export const Options = ({ id, answerCount, label, addAVote, totalAnswerCount}) => {
  return (
    <div className="options__container">
      <button className="options__button" key={id} onClick={() => addAVote(id)}>
        {label}
      </button>
      <div>
        <Progress total={totalAnswerCount} progress={answerCount} />
      </div>
    </div>
  );
};
