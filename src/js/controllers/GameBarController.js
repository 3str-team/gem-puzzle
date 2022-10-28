import GameBarModel from "../models/GameBarModel";
import GameBarView from "../views/GameBarView";

export default class GameBarController {
  constructor() {
    this.Model = new GameBarModel();
    this.View = new GameBarView();
  }

  init() {
    this.Model.init();
    this.View.init();
    this.startTimer();
    this.folowingMoveEvent();
  }

  folowingMoveEvent() {
    document.body.addEventListener("paleteMove", () => {
      this.View.setMoviesFieldValue(this.Model.moviesIncrement());
    });
  }

  startTimer() {
    const timer = setInterval(() => {
      this.View.setTimerValue(this.Model.timeIncrement());
    }, 1000);
  }
}
