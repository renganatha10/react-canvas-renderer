import uuid from 'uuid/v4';

import { Circle, Rectangle, Text } from './../shapes';

const middleWare = () => {
  const canvasObjects = new WeakMap();
  let context = null;

  const setContext = ctx => {
    context = ctx;
  };

  const add = ({ type, props, child }) => {
    const text = typeof child === 'string' ? child : '';
    canvasObjects.set({ id: uuid() }, { type, props, text });
    render({ type, props, text });
  };

  const remove = id => {
    canvasObjects.delete({ id });
  };

  const update = (id, props) => {
    const canvasObject = canvasObjects.get({ id });
    const newCanvasObject = { ...props, ...canvasObject };
    canvasObjects.set({ id }, newCanvasObject);
  };

  const render = ({ type, props, text }) => {
    switch (type) {
    case 'Text':
      Text.render(context, props, text);
      break;
    case 'Rectangle':
      Rectangle.render(context, props);
      break;
    case 'Circle':
      Circle.render(context, props);
      break;
    default:
      break;
    }
  };
  return {
    add,
    remove,
    update,
    setContext,
  };
};

export default middleWare();
