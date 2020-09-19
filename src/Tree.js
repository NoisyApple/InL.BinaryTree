import Node from "./Node";

export default class Tree {
  constructor() {
    this.root = null;
  }

  addValue(value) {
    if (this.root) this.root.addValue(value);
    else this.root = new Node(value);
  }

  toString() {
    if (this.root) this.root.toString();
  }

  draw(p5) {
    if (this.root) this.root.draw(p5);
  }
}
