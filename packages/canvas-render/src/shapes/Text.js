const Text = () => {
  const draw = (ctx, props) => {
    const {
      fontSize = 12,
      fontFamily = 'Arial',
      fill = '#000',
      left = 0,
      top = 0,
      children = '',
    } = props;

    ctx.font = `${fontSize}px ${fontFamily}`;
    ctx.fillStyle = fill;
    ctx.fillText(children, left, top);
  };

  const init = (props, id) => {
    return {
      id,
      type: 'Text',
      props,
    };
  };

  return {
    init,
    draw,
  };
};

export default Text();
