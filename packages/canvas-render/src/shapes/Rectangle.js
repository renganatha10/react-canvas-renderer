class Rectangle {
  constructor(props) {
    this.props = props;
  }

  get type() {
    return 'Rectangle';
  }

  render(ctx) {
    const {
      backgroundColor = '#000',
      left = 0,
      top = 0,
      width = 0,
      height = 0,
    } = this.props.style || {};

    ctx.fillStyle = backgroundColor;
    ctx.fillRect(left, top, width, height);
  }
}

export default Rectangle;
