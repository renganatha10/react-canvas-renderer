import { Rectangle, Circle, Text } from './../shapes';

const canvasCollections = () => {
  let canvasCtx = null;
  let canvas = null;

  const setCanvasContext = (ctx, canvasElement) => {
    canvasCtx = ctx;
    canvas = canvasElement;
  };

  let canvasObjects = {};

  const setCanvasObject = canvasObject => {
    if (canvasCtx) {
      canvasObjects[canvasObject.id] = canvasObject;
      switch (canvasObject.type) {
      case 'Rectangle':
        Rectangle.draw(canvasCtx, canvasObject.props);
        break;
      case 'Circle':
        Circle.draw(canvasCtx, canvasObject.props);
        break;
      case 'Text':
        Text.draw(canvasCtx, canvasObject.props);
        break;
      default:
        break;
      }
    }
  };

  const removeCanvasObject = id => {
    if (canvasCtx) {
      delete canvasObjects[id];
      renderAll();
    }
  };

  const updateCollection = (id, canvasProps) => {
    if (canvasCtx) {
      const canvasObjectToUpdate = canvasObjects[id];
      const newCanvasObject = { ...canvasObjectToUpdate, props: canvasProps };
      canvasObjects[id] = newCanvasObject;
      renderAll();
    }
  };

  const renderAll = () => {
    canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
    Object.keys(canvasObjects).forEach(key => {
      const canvasObject = canvasObjects[key];
      switch (canvasObject.type) {
      case 'Rectangle':
        Rectangle.draw(canvasCtx, canvasObject.props);
        break;
      case 'Circle':
        Circle.draw(canvasCtx, canvasObject.props);
        break;
      case 'Text':
        Text.draw(canvasCtx, canvasObject.props);
        break;
      default:
        break;
      }
    });
  };

  return {
    setCanvasObject,
    removeCanvasObject,
    setCanvasContext,
    updateCollection,
  };
};

export default canvasCollections();
