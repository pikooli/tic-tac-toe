function checkRow(grid, size) {
  let count = 0;
  let prev;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const index = i * size + j;
      if (j === 0 && !grid[index]) {
        break;
      }
      if (j === 0) {
        grid[index] ? count++ : null;
      } else {
        grid[index] === prev ? count++ : count--;
      }
      prev = grid[index];
    }
    if (count === size) return prev;
  }
}

function checkCol(grid, size) {
  let count = 0;
  let prev;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const index = i + j * size;
      if (j === 0 && !grid[index]) {
        break;
      }
      if (j === 0) {
        grid[index] ? count++ : null;
      } else {
        grid[index] === prev ? count++ : count--;
      }

      prev = grid[index];
    }
    if (count === size) return prev;
  }
}

function checkDiagonalLeft(grid, size) {
  let count = 0;
  let prev;
  for (let i = 0; i < size; i++) {
    const index = i * size + i;
    if (!grid[index]) {
      return;
    }
    if (i === 0) {
      grid[index] ? count++ : null;
    } else {
      grid[index] === prev ? count++ : count--;
    }
    prev = grid[index];
  }
  return count === size ? prev : undefined;
}

function checkDiagonalRight(grid, size) {
  let count = 0;
  let prev;
  for (let i = 0; i < size; i++) {
    const index = i * size + size - 1 - i;
    if (!grid[index]) {
      return;
    }
    if (i === 0) {
      grid[index] ? count++ : null;
    } else {
      grid[index] === prev ? count++ : count--;
    }
    prev = grid[index];
  }
  return count === size ? prev : undefined;
}

export function solver(grid, size) {
  let winner;
  winner = checkRow(grid, size);
  if (winner) {
    return winner;
  }
  winner = checkCol(grid, size);
  if (winner) {
    return winner;
  }
  winner = checkDiagonalLeft(grid, size);
  if (winner) {
    return winner;
  }
  winner = checkDiagonalRight(grid, size);
  if (winner) {
    return winner;
  }
}
