import { usePolling } from "../../hooks";
import { Options } from "../options";
import "./styles.css";

export const Polling = ({ config }) => {
  const { pollingState, addAVote } = usePolling(config);
  const optionsObject = pollingState.options;
  return (
    <div className="polling__container">
      <h2>{pollingState.question.label}</h2>
      <div className="options__list">
        {Object.keys(optionsObject).map((ele) => {
          return (
            <Options
              id={ele}
              key={ele}
              addAVote={addAVote}
              label={optionsObject[ele].label}
              answerCount={optionsObject[ele].answerCount}
              totalAnswerCount={pollingState.totalAnswerCount}
            />
          );
        })}
      </div>
    </div>
  );
};
