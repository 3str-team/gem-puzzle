import FieldController from "./controllers/FieldController";
import GameBarController from "./controllers/GameBarController";

export default class Game {
  constructor() {
    this.Field = null;
    this.GameBar = null;
  }
  init() {
    this.GameBar = new GameBarController();
    this.Field = new FieldController();
    this.GameBar.init();
    this.Field.init();
  }
}
