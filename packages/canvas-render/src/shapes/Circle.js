class Circle {
  constructor(props) {
    this.props = props;
  }

  get type() {
    return 'Circle';
  }

  render(ctx) {
    const { backgroundColor = 'black', left = 0, top = 0, width = 10 } =
      this.props.style || {};

    ctx.fillStyle = backgroundColor;
    ctx.beginPath();
    ctx.arc(left, top, width, 0, 2 * Math.PI);
    ctx.stroke();
  }
}

export default Circle;
