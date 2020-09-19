export default class Node {
  constructor(value) {
    this.leftNode = null;
    this.rightNode = null;
    this.value = value;
  }

  addValue(newValue) {
    if (newValue < this.value) {
      if (this.leftNode) this.leftNode.addValue(newValue);
      else this.leftNode = new Node(newValue);
    } else if (newValue > this.value) {
      if (this.rightNode) this.rightNode.addValue(newValue);
      else this.rightNode = new Node(newValue);
    }
  }

  toString() {
    if (this.leftNode != null) this.leftNode.toString();
    console.log(this.value);
    if (this.rightNode != null) this.rightNode.toString();
  }

  draw(p5) {
    p5.push();
    p5.translate(-50, 50);
    if (this.leftNode) this.leftNode.draw(p5);
    p5.pop();

    let x = p5.width / 2;
    let y = 50;

    p5.noFill();
    p5.stroke("#fff");

    if (this.leftNode) p5.line(x - 20, y + 20, x - 30, y + 30);
    if (this.rightNode) p5.line(x + 20, y + 20, x + 30, y + 30);

    p5.strokeWeight(2);
    p5.ellipse(x, y, 30);
    p5.noStroke();
    p5.fill("#fff");
    p5.textAlign(p5.CENTER, p5.CENTER);
    p5.text(this.value, x, y + 2);

    p5.push();
    p5.translate(50, 50);
    if (this.rightNode) this.rightNode.draw(p5);
    p5.pop();
  }
}
