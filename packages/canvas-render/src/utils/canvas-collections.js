const canvasCollections = () => {
  const canvasObjects = new WeakMap();
  const getCanvasObject = id => {
    return canvasObjects.get({ id });
  };
  const setCanvasObject = canvasObject => {
    canvasObjects.set({ id: canvasObject.id }, canvasObject);
  };
  const removeCanvasObject = id => {
    canvasObjects.delete({ id });
  };
  return {
    setCanvasObject,
    getCanvasObject,
    removeCanvasObject,
  };
};

export default canvasCollections();
