const Rectangle = () => {
  const draw = (ctx, props) => {
    const { fill = 'red', left = 0, top = 0, width = 0, height = 0 } = props;
    ctx.fillStyle = fill;
    ctx.fillRect(left, top, width, height);
  };

  const init = (props, id) => {
    return {
      id,
      type: 'Rectangle',
      props,
    };
  };

  return {
    init,
    draw,
  };
};

export default Rectangle();
