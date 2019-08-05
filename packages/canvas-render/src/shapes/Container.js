import canvasObjectCollections from './../utils/canvas-collections';

class Container {
  constructor() {
    this.canvas = document.getElementById('canvas');
  }

  get type() {
    return 'Container';
  }

  get context() {
    return this.canvas.getContext('2d');
  }

  appendChild(child) {
    const canvasObject = { id: child.id, ...child.props, type: child.type };
    canvasObjectCollections.setCanvasObject(canvasObject);
    child.addElement(this.context, child.props);
  }

  removeChild(child) {
    canvasObjectCollections.removeCanvasObject(child.id);
    child.removeElement(this.context, child.props);
  }
}

export default Container;
