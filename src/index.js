import "./style.scss";
import Tree from "./Tree";
import p5 from "p5";

let tree;
let inputNodeValue;
let btnAddNode;
let btnClear;

window.onload = () => {
  // A Tree instance.
  tree = new Tree();

  // Graphic inputs.
  inputNodeValue = document.querySelector("#InputNodeValue");
  btnAddNode = document.querySelector("#ButtonAddNode");
  btnClear = document.querySelector("#ButtonClear");

  // Listeners.
  addListeners();

  // Test values.
  tree.addValue(18);
  tree.addValue(15);
  tree.addValue(12);
  tree.addValue(1);
  tree.addValue(5);
  tree.addValue(8);
  tree.addValue(50);
  tree.addValue(51);
  tree.addValue(52);
  tree.addValue(53);
  tree.addValue(6);
  tree.addValue(20);
  tree.addValue(16);
  tree.addValue(7);
  tree.addValue(17);
  tree.addValue(28);
  tree.addValue(19);

  // P5 Sketch.
  const sketch = (p5) => {
    // Setup function.
    p5.setup = () => {
      let canvas = p5.createCanvas(500, 500);
      canvas.parent("Canvas");
    };

    // Draw loop.
    p5.draw = () => {
      p5.background(0);
      // p5.translate(p5.width / 2, 50);
      tree.update();
      tree.draw(p5);
    };
  };

  const P5 = new p5(sketch);
};

// Listeners
function addListeners() {
  // Add Node Button.
  btnAddNode.addEventListener("click", addNode);

  // Text input "Enter" key listener.
  inputNodeValue.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) addNode();
  });

  // Clear Button.
  btnClear.addEventListener("click", () => {
    tree = new Tree();
  });
}

// Add Node function.
function addNode() {
  let inputValue = inputNodeValue.value;

  // Detects if input is a valid integer.
  inputValue = parseInt(inputValue);
  if (!isNaN(inputValue)) tree.addValue(inputValue);
  inputNodeValue.value = "";
}
