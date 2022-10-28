import { shuffle } from "../helpers/random";

export default class FieldModel {
  constructor() {
    this.size = null;
    this.field = null;
    this.answer = null;
  }

  init(size = 5) {
    this.size = size;
    this.generateRandomField();
    this.generateCorrectAnswer();
  }

  generateRandomField() {
    this.field = [];
    let randomNumbers = [];

    for (let i = 0; i < this.size ** 2; ++i) randomNumbers[i] = i;
    randomNumbers = shuffle(randomNumbers);

    for (let i = 0; i < this.size; ++i) {
      const row = [];
      for (let j = 0; j < this.size; ++j) {
        row[j] = randomNumbers[this.size * this.field.length + row.length];
      }
      this.field[i] = row;
    }
  }

  generateCorrectAnswer() {
    this.answer = [];
    let currentNumber = 1;

    for (let i = 0; i < this.size; ++i) {
      const row = [];
      for (let j = 0; j < this.size; ++j) {
        row[j] = currentNumber++;
      }
      this.answer[i] = row;
    }
    this.answer[this.size - 1][this.size - 1] = 0;
  }

  move({ row, col }) {
    if (row > 0 && this.field[row - 1][col] == 0) {
      this.moveSide(row, col, -1, 0);
      return { row, col, direction: 0 };
    } else if (
      col < this.field[row].length - 1 &&
      this.field[row][col + 1] == 0
    ) {
      this.moveSide(row, col, 0, 1);
      return { row, col, direction: 1 };
    } else if (row < this.field.length - 1 && this.field[row + 1][col] == 0) {
      this.moveSide(row, col, 1, 0);
      return { row, col, direction: 2 };
    } else if (col > 0 && this.field[row][col - 1] == 0) {
      this.moveSide(row, col, 0, -1);
      return { row, col, direction: 3 };
    } else {
      return null;
    }
  }

  moveSide(row, col, deltaRow, deltaColumn) {
    this.field[row][col] ^= this.field[row + deltaRow][col + deltaColumn];
    this.field[row + deltaRow][col + deltaColumn] ^= this.field[row][col];
    this.field[row][col] ^= this.field[row + deltaRow][col + deltaColumn];
  }
}
