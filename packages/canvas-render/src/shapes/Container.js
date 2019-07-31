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

  appendInitialChild(child) {
    child.render(this.context);
  }
}

export default Container;
