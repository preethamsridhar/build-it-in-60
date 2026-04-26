import { useReducer, useState } from "react";
import { actions, circleConfig } from "../engine";

const gameReducer = (state, action) => {
  const e = action.payload.event;
  const id = action.payload.circleId;
  const y = e.clientY;
  const x = e.clientX;
  let returnState;
  let overlapFlag;
  const detectOverlap = (state) => {
    const leftCircle = state.byId['left'];
    const rightCircle = state.byId['right'];

    return Math.sqrt(Math.pow(leftCircle.x - rightCircle.x, 2) + Math.pow(leftCircle.y - rightCircle.y, 2)) < leftCircle.size/2 + rightCircle.size/2;
  }

  switch (action.type) {
    case actions.startCircle:
      overlapFlag = detectOverlap(state);
      returnState = {
        ...state,
        byId: {
          ...state.byId,
          [id]: {
            ...state.byId[id],
            x,
            y,
            size: 0,
            backgroundColor: overlapFlag ? 'red' : circleConfig.byId[id].backgroundColor,
          },
        },
      };
      return returnState;
    case actions.moveCircle:
      overlapFlag = detectOverlap(state);
      const sizeX = Math.abs(x - state.byId[id]?.x);
      const sizeY = Math.abs(y - state.byId[id]?.y);
      returnState = {
        ...state,
        byId: {
          ...state.byId,
          [id]: {
            ...state.byId[id],
            size: Math.abs(Math.max(sizeX, sizeY)) * 2,
            backgroundColor: overlapFlag ? 'red' : circleConfig.byId[id].backgroundColor ,
          },
        },
      };
      
      return returnState;
    default:
      returnState = {
        ...state,
        byId: {
          ...state.byId,
          left: {
            ...state.byId[id],
            backgroundColor: overlapFlag ? 'red' : circleConfig.byId.left.backgroundColor ,
          },
          right: {
            ...state.byId[id],
            backgroundColor: overlapFlag ? 'red' : circleConfig.byId.right.backgroundColor ,
          },
        },
      };
      return returnState;
  }
};

export const useGame = () => {
  const [currentCircleId, setCurrentCirlceId] = useState("");
  const [state, dispatch] = useReducer(gameReducer, circleConfig);

  const moveCircle = (e) => {
    if (currentCircleId) {
      dispatch({
        type: actions.moveCircle,
        payload: {
          circleId: currentCircleId,
          event: e,
        },
      });
    }
  };

  const startCircle = (e, circleId) => {
    setCurrentCirlceId(circleId);
    dispatch({
      type: actions.startCircle,
      payload: {
        circleId: circleId,
        event: e,
      },
    });
  };

  return {
    state,
    moveCircle,
    startCircle,
    setCurrentCirlceId
  };
};
