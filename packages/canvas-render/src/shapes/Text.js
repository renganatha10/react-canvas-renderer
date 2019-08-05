class Text {
  constructor(props, id) {
    this.props = props;
    this.text = '';
    this.id = id;
    this.ctx = null;
  }

  get type() {
    return 'Text';
  }

  appendChild(child) {
    this.text = child;
  }

  removeElement(ctx, props) {
    const { left, top, fontSize, fill } = props;
    const { width } = ctx.measureText(this.text);
    ctx.fillStyle = fill;
    ctx.fillText('', left, top);
    ctx.clearRect(left, top - fontSize, width, fontSize);
  }

  update(oldProps, newProps) {
    this.removeElement(this.ctx, oldProps);
    this._render(this.ctx, newProps);
  }

  addElement(ctx, props) {
    this.ctx = ctx;
    this._render(ctx, props);
  }

  _render(ctx, props) {
    const {
      fontSize = 12,
      fontFamily = 'Arial',
      fill = '#000',
      left = 0,
      top = 0,
    } = props;

    ctx.font = `${fontSize}px ${fontFamily}`;
    ctx.fillStyle = fill;
    ctx.fillText(this.text, left, top);
  }
}

export default Text;
