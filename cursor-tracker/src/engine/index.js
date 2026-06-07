export const initializeBoard = (size) => {
  const result = {};
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      let key = `${i}-${j}`;
      result[key] = {
        value: null,
        id: key,
        isSeq: false,
      };
    }
  }
  return result;
};

const direction = {
  hu: {
    direction: "hu",
    row: 0,
    col: -1,
  },
  hd: {
    direction: "hd",
    row: 0,
    col: 1,
  },
  vu: {
    direction: "vu",
    row: -1,
    col: 0,
  },
  vd: {
    direction: "vd",
    row: 1,
    col: 0,
  },
  pdu: {
    direction: "ddu",
    row: -1,
    col: -1,
  },
  pdd: {
    direction: "ddd",
    row: 1,
    col: 1,
  },
  sdu: {
    direction: "sdu",
    row: -1,
    col: 1,
  },
  sdd: {
    direction: "sdd",
    row: +1,
    col: -1,
  },
};

export const checkWin = (gridObj, row, col, turn, winLength, size) => {
  let result = [];

  const recCheck = (r, c, currentDirection, previousDirection, currentSequence) => {
    const currentRow = r + direction[currentDirection].row;
    const currentCol = c + direction[currentDirection].col;

    const isValidCell = checkBoundary(currentRow, currentCol, size);

    if (currentSequence === winLength - 1) {
      return true;
    }

    if (isValidCell) {
      if (gridObj[`${currentRow}-${currentCol}`].value === turn) {
        if (previousDirection === null) {
          return recCheck(currentRow, currentCol, currentDirection, currentDirection, currentSequence+1);
        } else if (currentDirection === previousDirection) {
          return recCheck(currentRow, currentCol, currentDirection, currentDirection, currentSequence+1);
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  Object.keys(direction).forEach((ele) => {
    result.push(recCheck(row, col, ele, null, 0));
  });

  return result.includes(true);
};

export const checkBoundary = (row, col, size) => {
  if (row < 0) {
    return false;
  }
  if (row >= size) {
    return false;
  }
  if (col < 0) {
    return false;
  }
  if (col >= size) {
    return false;
  }
  return true;
};
