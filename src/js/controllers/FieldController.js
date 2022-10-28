import FieldModel from "../Models/FieldModel";
import FieldView from "../views/FieldView";

export default class FieldController {
  constructor() {
    this.Model = new FieldModel();
    this.View = new FieldView();
  }

  init() {
    this.Model.init();
    this.View.init(this.Model.field);
    this.movePaleteHandler();
  }

  setFieldSize(size) {
    this.Model.init(size);
    this.View.setScheme(this.Model.field);
    this.View.render();
  }

  movePaleteHandler() {
    this.View.field.addEventListener("click", async (event) => {
      if (event.target.classList.contains("palete")) {
        // this.View.render();
        const movingResult = this.Model.move({
          row: +event.target.dataset.row,
          col: +event.target.dataset.col,
        });
        if (movingResult) {
          this.triggerPaleteMoveEvent();
          this.View.animate(movingResult);
        }
      }
    });
  }

  triggerPaleteMoveEvent() {
    document.body.dispatchEvent(
      new CustomEvent("paleteMove", { bubbles: true })
    );
  }
}
