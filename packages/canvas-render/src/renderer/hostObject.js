const hostObject = middleware => (type, props, context) => {
  let ctx = context ? context : null;
  return {
    type,
    props,
    middleware,
    ctx,
  };
};

export default hostObject;
