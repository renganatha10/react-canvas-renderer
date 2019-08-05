const Circle = () => {
  const draw = (ctx, props) => {
    const { fill = 'black', left = 0, top = 0, radius = 10 } = props;
    ctx.fillStyle = fill;
    ctx.beginPath();
    ctx.arc(left, top, radius, 0, 2 * Math.PI);
    ctx.stroke();
  };

  const init = (props, id) => {
    return {
      id,
      type: 'Circle',
      props,
    };
  };

  return {
    init,
    draw,
  };
};

export default Circle();
