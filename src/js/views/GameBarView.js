export default class GameBarView {
  constructor() {
    this.gameBar = null;
    this.timeField = null;
    this.moviesField = null;
  }

  init() {
    this.createGameBar();
  }

  createGameBar() {
    this.gameBar = document.createElement("div");
    this.gameBar.className = "gameBar";
    document.querySelector(".wrapper").appendChild(this.gameBar);
    this.createTimeField();
    this.createMoviesField();
  }

  createTimeField() {
    this.timeField = document.createElement("div");
    this.timeField.className = "timer";
    this.gameBar.appendChild(this.timeField);
    this.setTimerValue(0);
  }

  createMoviesField() {
    this.moviesField = document.createElement("div");
    this.moviesField.className = "movies";
    this.gameBar.appendChild(this.moviesField);
    this.setMoviesFieldValue(0);
  }

  setTimerValue(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    this.timeField.textContent = `${Math.floor(minutes / 10)}${
      minutes % 10
    }:${Math.floor(seconds / 10)}${seconds % 10}`;
  }

  setMoviesFieldValue(movies) {
    this.moviesField.textContent = `Movies: ${movies}`;
  }
}
