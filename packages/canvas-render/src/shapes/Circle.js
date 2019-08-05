class Circle {
  constructor(props, id) {
    this.props = props;
    this.id = id;
    this.ctx = null;
  }

  get type() {
    return 'Circle';
  }

  removeElement(ctx, props) {
    const { left, top, radius } = props;
    ctx.clearRect(
      left - radius - 1,
      top - radius - 1,
      radius * 2 + 2,
      radius * 2 + 2
    );
  }

  update(oldProps, newProps) {
    this.removeElement(this.ctx, oldProps);
    this._render(this.ctx, newProps);
  }

  addElement(ctx, props) {
    this.ctx = ctx;
    this._render(ctx, props);
  }

  render(ctx, props) {
    const { fill = 'black', left = 0, top = 0, radius = 10 } = props;
    ctx.fillStyle = fill;
    ctx.beginPath();
    ctx.arc(left, top, radius, 0, 2 * Math.PI);
    ctx.stroke();
  }
}

export default new Circle();
