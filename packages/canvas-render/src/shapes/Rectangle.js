class Rectangle {
  constructor(props, id) {
    this.props = props;
    this.id = id;
    this.context = null;
  }

  get type() {
    return 'Rectangle';
  }

  set setContext(ctx) {
    this.context = ctx;
  }

  removeElement(ctx, props) {
    const { height, width, top, left } = props;
    ctx.clearRect(left, top, width, height);
  }

  update(oldProps, newProps) {
    this.removeElement(this.ctx, newProps);
    this._render(this.ctx, newProps);
  }

  addElement(ctx, props) {
    this.ctx = ctx;
    this._render(ctx, props);
  }

  render(ctx, props) {
    const { fill = '#000', left = 0, top = 0, width = 0, height = 0 } = props;
    ctx.fillStyle = fill;
    ctx.fillRect(left, top, width, height);
  }
}

export default new Rectangle();
