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
      backgroundColor = '#000',
      left = 0,
      top = 0,
    } = this.props.style || {};

    ctx.font = `${fontSize}px ${fontFamily}`;
    ctx.fillStyle = backgroundColor;
    ctx.fillText(this.text, top, left);
  }
}

export default Text;
