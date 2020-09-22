// Node class.
export default class Node {
  // Class constructor.
  constructor(value, parentNode, childPosition) {
    this.leftNode = null; // Left Node.
    this.rightNode = null; // Right Node.
    this.value = value; // Node value.
    this.parentNode = parentNode; // Parent Node.
    this.xStart = 0; // x coordinate to start drawing the Node.
    this.width = this.getWidth(); // Draw width, depends on child nodes.
    this.depth = parentNode != null ? parentNode.depth + 1 : 0; // Depth from root.
    this.childPosition = childPosition; // LeftChild = 0; RightChild = 1;
  }

  // Update function.
  update() {
    // Updates width.
    this.width = this.getWidth();

    // Updates position.
    if (this.parentNode != null) {
      this.xStart = this.parentNode.xStart; // Child position is always relative to parent position.
      if (this.childPosition == 1) {
        if (this.parentNode.leftNode != null)
          // Right child always comes after left child.
          this.xStart =
            this.parentNode.leftNode.xStart +
            this.parentNode.leftNode.width * 50;
      }
    }

    // Left and Right Nodes gets updated recursively.
    if (this.leftNode != null) this.leftNode.update();
    if (this.rightNode != null) this.rightNode.update();
  }

  // Recursively iterates trough child nodes to get width.
  getWidth() {
    let newWidth = 0;

    if (this.leftNode != null) newWidth += this.leftNode.width;
    if (this.rightNode != null) newWidth += this.rightNode.width;

    if (newWidth == 0) newWidth = 1;

    this.width = newWidth;

    return this.width;
  }

  // Adds a value in the correspondent Node (Left or Right).
  addValue(newValue, depthMap) {
    if (newValue < this.value) {
      // Left Node.

      // Left node exists.
      if (this.leftNode != null) this.leftNode.addValue(newValue, depthMap);
      // Left node doest't exist.
      else {
        this.leftNode = new Node(newValue, this, 0);

        // Adds new Node to depth map.
        if (depthMap.hasOwnProperty(this.leftNode.depth)) {
          depthMap[this.leftNode.depth].push(this.leftNode);
        } else {
          depthMap[this.leftNode.depth] = [];
          depthMap[this.leftNode.depth].push(this.leftNode);
        }
      }
    } else if (newValue > this.value) {
      // Right Node.

      // Right node exists.
      if (this.rightNode != null) this.rightNode.addValue(newValue, depthMap);
      // Right node doest't exist.
      else {
        this.rightNode = new Node(newValue, this, 1);

        // Adds new Node to depth map.
        if (depthMap.hasOwnProperty(this.rightNode.depth)) {
          depthMap[this.rightNode.depth].push(this.rightNode);
        } else {
          depthMap[this.rightNode.depth] = [];
          depthMap[this.rightNode.depth].push(this.rightNode);
        }
      }
    }
  }
}
