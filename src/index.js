import "./style.scss";
import Tree from "./Tree";
import p5 from "p5";

let tree;
let inputNodeValue;
let btnAddNode;
let btnClear;

window.onload = () => {
  tree = new Tree();

  inputNodeValue = document.querySelector("#InputNodeValue");
  btnAddNode = document.querySelector("#ButtonAddNode");
  btnClear = document.querySelector("#ButtonClear");

  addListeners();

  // tree.addValue(18);
  // tree.addValue(15);
  // tree.addValue(12);
  // tree.addValue(1);
  // tree.addValue(5);
  // tree.addValue(8);
  // tree.addValue(8);
  // tree.addValue(20);
  // tree.addValue(16);
  // tree.addValue(7);
  // tree.addValue(17);
  // tree.addValue(28);
  // tree.addValue(19);

  tree.toString();

  const sketch = (p5) => {
    p5.setup = () => {
      let canvas = p5.createCanvas(500, 500);
      canvas.parent("Canvas");
    };

    p5.draw = () => {
      p5.background(0);
      tree.draw(p5);
    };
  };

  const P5 = new p5(sketch);
};

function addListeners() {
  btnAddNode.addEventListener("click", addNode);
  inputNodeValue.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) addNode();
  });

  btnClear.addEventListener("click", () => {
    tree.root = null;
  });
}

function addNode() {
  let inputValue = inputNodeValue.value;
  inputValue = parseInt(inputValue);

  if (!isNaN(inputValue)) tree.addValue(inputValue);
  inputNodeValue.value = "";
}
