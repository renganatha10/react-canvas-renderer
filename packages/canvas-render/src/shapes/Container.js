import canvasObjectCollections from './../utils/canvas-collections';

class Container {
  constructor() {
    this.canvas = document.getElementById('canvas');
    canvasObjectCollections.setCanvasContext(
      this.canvas.getContext('2d'),
      this.canvas
    );
  }

  get type() {
    return 'Container';
  }

  appendChild(child) {
    const canvasObject = { id: child.id, props: child.props, type: child.type };
    canvasObjectCollections.setCanvasObject(canvasObject);
  }

  removeChild(child) {
    canvasObjectCollections.removeCanvasObject(child.id);
  }
}

export default Container;
