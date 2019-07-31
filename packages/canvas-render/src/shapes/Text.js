class Text {
  constructor(props) {
    this.props = props;
    this.text = '';
  }

  get type() {
    return 'Text';
  }

  appendInitialChild(child) {
    this.text = child;
  }

  render(ctx) {
    const {
      fontSize = 12,
      fontFamily = 'Arial',
      fill = '#000',
      left = 0,
      top = 0,
    } = this.props || {};

    ctx.font = `${fontSize}px ${fontFamily}`;
    ctx.fillStyle = fill;
    ctx.fillText(this.text, top, left);
  }
}

export default Text;
