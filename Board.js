class Board {
  constructor(board) {
    this._board = board;
  }

  isReachable(endPoint) {
    let totalZerosCount = 0;

    this._board.forEach((row) => {
      row.forEach(cell => {
        if (cell === 0)
          totalZerosCount++;
      })
    });

    // create a matrix with size this._board[rows x columns] and init values with 0
    let visitedNodes =
      [...Array(this._board.length)].map(x => Array(this._board[0].length).fill(0));

    let visitedNodesCount = 0;

    let stack = [];
    stack.push(endPoint);

    while (stack.length > 0) {
      const currPoint = stack.pop();

      // if the current point is not visited, then process it
      // otherwise skip it
      if (visitedNodes[currPoint[0]][currPoint[1]] !== 1) {
        visitedNodes[currPoint[0]][currPoint[1]] = 1;
        visitedNodesCount++;
  
        const possibleMoves = this.findLegalMoves(currPoint);
        possibleMoves.forEach((move) => {
          if (visitedNodes[move[0]][move[1]] !== 1) {
            stack.push(move);
          }
        });
      }
    }

    return visitedNodesCount === totalZerosCount;
  }

  findLegalMoves(startPos) {
    // input validation
    if (!Array.isArray(this._board)) {
      throw new Error('Invalid board - must be an array');
    }

    if (!Array.isArray(startPos) || startPos.length !== 2) {
      throw new Error('Invalid startPos - must be an array with 2 elements');
    }

    const currentRowId = startPos[0], currentColIdx = startPos[1];

    let possibleMoves = [];

    // is UP a option?
    if (this._isUpMoveValid(currentRowId, currentColIdx)) {
      possibleMoves.push([currentRowId - 1, currentColIdx]);
    }

    // is DOWN an option?
    if (this._isDownMoveValid(currentRowId, currentColIdx)) {
      possibleMoves.push([currentRowId + 1, currentColIdx]);
    }

    // is LEFT an option?
    if (this._isLeftMoveValid(currentRowId, currentColIdx)) {
      possibleMoves.push([currentRowId, currentColIdx - 1]);
    }

    // is RIGHT an option?
    if (this._isRightMoveValid(currentRowId, currentColIdx)) {
      possibleMoves.push([currentRowId, currentColIdx + 1]);
    }

    return possibleMoves;
  }

  calculateParallel(count) {
    return new Promise((resolve, reject) => {
      let allParallelPromises = [];
      let currentVal = 0;
      while (currentVal < count) {
        const newPromise = new Promise((resolve, reject) => {
          setInterval((val) => {
            // wait for 200 * currentVal ms and resolve
            resolve(val);
          }, currentVal * 200, currentVal);
        });

        allParallelPromises.push(newPromise);

        currentVal++;
      }

      // wait for all promises to come back
      Promise.all(allParallelPromises)
        .then((results) => {
          let sum = 0;

          if (Array.isArray(results)) {
            sum = results.reduce((prevVal, currVal) => {
              return prevVal + currVal;
            })
          }
          else {
            sum = results;
          }

          resolve({ sum });
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  _isUpMoveValid(rowIdx, colIdx) {
    return (rowIdx >= 1 && this._board[rowIdx - 1][colIdx] == 0);
  }

  _isDownMoveValid(rowIdx, colIdx) {
    return (rowIdx + 1 < this._board.length && this._board[rowIdx + 1][colIdx] == 0);
  }

  _isLeftMoveValid(rowIdx, colIdx) {
    return (colIdx >= 1 && this._board[rowIdx][colIdx - 1] == 0);
  }

  _isRightMoveValid(rowIdx, colIdx) {
    return (colIdx + 1 < this._board.length && this._board[rowIdx][colIdx + 1] == 0);
  }
}

module.exports = Board;