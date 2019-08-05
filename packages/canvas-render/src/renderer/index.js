import CanvasRenderer from './hostConfig';

const containers = new WeakMap();

function render(element, canvas, callback) {
  let container;

  if (containers.has(canvas)) {
    container = containers.get(canvas);
  } else {
    container = CanvasRenderer.createContainer(canvas, false, false);
    containers.set(canvas, container);
  }

  CanvasRenderer.updateContainer(element, container, null, callback);

  CanvasRenderer.injectIntoDevTools({
    bundleType: 1,
    version: '0.1.0',
    rendererPackageName: 'canvas-renderer',
    findHostInstanceByFiber: CanvasRenderer.findHostInstance,
  });
}

export default render;
