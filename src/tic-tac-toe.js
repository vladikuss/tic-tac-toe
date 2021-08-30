class TicTacToe {
    constructor() {
      this.matrix = Array(3).fill().map(() => Array(3).fill(null));
      this.currentPlayerSymbol = 'x';
    }
  
    getCurrentPlayerSymbol() {
      return this.currentPlayerSymbol;
    }
  
    nextTurn(rowIndex, columnIndex) {
      if (this.matrix[rowIndex][columnIndex] === null) {
        this.matrix[rowIndex][columnIndex] = this.currentPlayerSymbol;
        this.currentPlayerSymbol === 'x' ? this.currentPlayerSymbol = 'o' : this.currentPlayerSymbol = 'x';
      }
    }
  
    isFinished() {
      return (this.getWinner() !== null) || this.noMoreTurns();
    }
  
    getWinner() {
      switch (true) {
        case (this.matrix[0][0] === this.matrix[0][1] && this.matrix[0][0] === this.matrix[0][2]):
          return this.matrix[0][0];
        case (this.matrix[1][0] === this.matrix[1][1] && this.matrix[1][0] === this.matrix[1][2]):
          return this.matrix[1][0];
        case (this.matrix[2][0] === this.matrix[2][1] && this.matrix[2][0] === this.matrix[2][2]):
          return this.matrix[2][0];
        case (this.matrix[0][0] === this.matrix[1][0] && this.matrix[0][0] === this.matrix[2][0]):
          return this.matrix[0][0];
        case (this.matrix[0][1] === this.matrix[1][1] && this.matrix[0][1] === this.matrix[2][1]):
          return this.matrix[0][1];
        case (this.matrix[0][2] === this.matrix[1][2] && this.matrix[0][2] === this.matrix[2][2]):
          return this.matrix[0][2];
        case (this.matrix[0][0] === this.matrix[1][1] && this.matrix[0][0] === this.matrix[2][2]):
          return this.matrix[0][0];
        case (this.matrix[0][2] === this.matrix[1][1] && this.matrix[0][2] === this.matrix[2][0]):
          return this.matrix[0][2];
        default: return null;
      }
    }
  
    noMoreTurns() {
      for (let row = 0; row < this.matrix.length; row++) {
        for (let cell = 0; cell < this.matrix[row].length; cell++) {
          if (!this.matrix[row][cell]) return false;
        };
      };
  
      return true;
    }
  
    isDraw() {
      return !this.getWinner() && this.noMoreTurns();
    }
  
    getFieldValue(rowIndex, colIndex) {
      return this.matrix[rowIndex][colIndex];
    }
  }
  
  module.exports = TicTacToe;
  