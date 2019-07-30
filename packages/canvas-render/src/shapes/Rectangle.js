import Container from './Container';

class Rectangle {
  constructor(props) {
    this.props = props;
    this.childText = '';
  }

  appendInitialChild(child) {
    if (typeof child === 'string') {
      this.childText = child;
    } else {
      new Error('Cannot Add Child Otherthan text');
    }
  }

  render(context) {
    const {
      backgroundColor = '#000',
      left = 0,
      top = 0,
      width = 0,
      height = 0,
      padding = 0,
      color = 'gray',
      fontSize = 14,
      fontFamily = 'sans-serif',
    } = this.props.style || {};

    // Draw the rectangle background
    context.fillStyle = backgroundColor;
    context.fillRect(left, top, width, height);

    // Draw the text
    context.fillStyle = color;
    context.font = `${fontSize}px ${fontFamily}`;
    context.fillText(this.childText, left + padding, top + padding + fontSize);
  }
}

export default Rectangle;
