class Rectangle {
  constructor(props) {
    this.props = props;
  }

  get type() {
    return 'Rectangle';
  }

  render(ctx) {
    const { fill = '#000', left = 0, top = 0, width = 0, height = 0 } =
      this.props || {};

    ctx.fillStyle = fill;
    ctx.fillRect(left, top, width, height);
  }
}

export default Rectangle;
