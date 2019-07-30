class Container {
  constructor() {
    this.canvas = document.getElementById('canvas');
  }

  context() {
    return this.canvas.getContext('2d');
  }

  appendInitialChild(child) {
    console.log(child, 'child');
    if (typeof child !== 'string') {
      child.render(this.context());
    }
  }
}

export default Container;
