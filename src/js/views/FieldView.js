export default class FieldView {
  constructor() {
    this.scheme = null;
    this.field = null;
    this.paleteSize = 70;
    this.padding = 5;
  }

  init(scheme) {
    this.scheme = scheme;
    this.createField();
    this.render();
  }

  createField() {
    this.field = document.createElement("div");
    this.field.className = "field";
    this.updateFieldSize();
    document.querySelector(".wrapper").appendChild(this.field);
  }

  updateFieldSize() {
    this.setStyles(this.field, {
      width:
        this.scheme.length * this.paleteSize +
        (this.scheme.length + 1) * this.padding +
        "px",
      height:
        this.scheme.length * this.paleteSize +
        (this.scheme.length + 1) * this.padding +
        "px",
    });
  }

  render() {
    this.field.innerHTML = "";
    this.scheme.forEach((row, i) => {
      row.forEach((value, j) => {
        if (value != 0) {
          const palete = document.createElement("div");
          palete.className = "palete";
          palete.textContent = value;
          this.setPaleteAttributes(palete, i, j);
          this.field.appendChild(palete);
        }
      });
    });
  }

  animate({ row, col, direction }) {
    const palete = this.field.querySelector(`#id${row}_${col}`);
    switch (direction) {
      case 0:
        this.topAnimation(palete, row, col);
        break;
      case 1:
        this.rightAnimation(palete, row, col);
        break;
      case 2:
        this.downAnimation(palete, row, col);
        break;
      case 3:
        this.leftAnimation(palete, row, col);
        break;
    }
  }

  topAnimation(palete, row, col) {
    this.setPaleteAttributes(palete, row - 1, col);
  }

  rightAnimation(palete, row, col) {
    this.setPaleteAttributes(palete, row, col + 1);
  }

  downAnimation(palete, row, col) {
    this.setPaleteAttributes(palete, row + 1, col);
  }

  leftAnimation(palete, row, col) {
    this.setPaleteAttributes(palete, row, col - 1);
  }

  setScheme(scheme) {
    this.scheme = scheme;
    this.updateFieldSize();
  }

  setStyles(element, styles) {
    for (const property in styles) {
      element.style[property] = styles[property];
    }
  }

  setPaleteAttributes(palete, row, col) {
    palete.id = `id${row}_${col}`;
    palete.setAttribute("data-row", row);
    palete.setAttribute("data-col", col);
    this.setStyles(palete, {
      width: this.paleteSize + "px",
      height: this.paleteSize + "px",
      top: row * this.paleteSize + (row + 1) * this.padding + "px",
      left: col * this.paleteSize + (col + 1) * this.padding + "px",
    });
  }
}
