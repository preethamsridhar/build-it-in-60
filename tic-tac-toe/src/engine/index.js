export const initializeBoard = (size) => {
  const arr = Array(size * size).fill(null);
  return {
    arr,
    xPos: [],
    oPos: [],
  };
};

export const generateWinPatterns = (size) => {
  let winPatterns = [];

  //generate all rows
  let pattern = [];
  for (let i = 0; i < size; i++) {
    pattern = [];
    for (let j = i * size; j < (i + 1) * size; j++) {
      pattern.push(j);
    }
    winPatterns.push(pattern);
  }

  //generate all columns
  for (let i = 0; i < size; i++) {
    pattern = [];
    for (let j = i; j < (size - 1) * size + i + 1; j = j + size) {
      pattern.push(j);
    }
    winPatterns.push(pattern);
  }

  // generate diagonals
  pattern = [];
  for (let i = 0; i < size; i++) {
    pattern.push(i + size * i);
  }
  winPatterns.push(pattern);

  pattern = [];
  for (let i = 1; i <= size; i++) {
    pattern.push(size * i - i);
  }
  winPatterns.push(pattern);

  return winPatterns;
};
