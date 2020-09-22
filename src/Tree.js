import Node from "./Node";

// Tree class.
export default class Tree {
  // Class constructor.
  constructor() {
    this.root = null; // Root Node.
    this.depthMap = {}; // Depth Map.
  }

  // Adds a new Node to the tree.
  addValue(value) {
    // Root Node doesn't exists.
    if (this.root != null) this.root.addValue(value, this.depthMap);
    // Root Node already exists.
    else {
      this.root = new Node(value, null, 0);

      // New Node is added to the depth map.
      this.depthMap[0] = [];
      this.depthMap[0].push(this.root);
    }
  }

  // Draw method.
  draw(p5) {
    if (this.root != null) {
      p5.colorMode(p5.HSB, 100); // Color mode is set to HSB.

      // console.log(this.depthMap);

      // Nodes gets drawn level by level.
      for (const level in this.depthMap) {
        if (this.depthMap.hasOwnProperty(level)) {
          const levelNodes = this.depthMap[level];

          // An individual node is drawn.
          levelNodes.forEach((node) => {
            p5.fill(node.depth * 10, 100, 80, 50);
            p5.rect(node.xStart, node.depth * 50, node.width * 50, 50);

            p5.fill(255);
            p5.text(node.value, node.xStart, (node.depth + 1) * 50);
          });
        }
      }
      // p5.noLoop();
    }
  }

  // Update method.
  update() {
    if (this.root != null) this.root.update();
  }
}
