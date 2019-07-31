class Circle {
  constructor(props) {
    this.props = props;
  }

  get type() {
    return 'Circle';
  }

  render(ctx) {
    const { fill = 'black', left = 0, top = 0, radius = 10 } = this.props || {};

    ctx.fillStyle = fill;
    ctx.beginPath();
    ctx.arc(left, top, radius, 0, 2 * Math.PI);
    ctx.stroke();
  }
}

export default Circle;
