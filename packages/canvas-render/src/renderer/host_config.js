import Reconciler from 'react-reconciler';
import Rectangle from '../shapes/Rectangle';
import Container from '../shapes/Container';

const EMPTY_OBJECT = {};
const NOOP = () => {};

const CanvasRenderer = Reconciler({
  createInstance(type, props) {
    switch (type) {
    case 'rect':
      return new Rectangle(props);
    case 'canvas':
      return new Container(props);
    default:
      throw new Error(`Invalid component type: ${type}`);
    }
  },

  createTextInstance(text) {
    return text;
  },

  appendInitialChild(parentInstance, child) {
    parentInstance.appendInitialChild(child);
  },

  finalizeInitialChildren() {
    return false;
  },

  getPublicInstance(instance) {
    return instance;
  },

  prepareUpdate() {
    return EMPTY_OBJECT;
  },

  prepareForCommit: NOOP,
  resetAfterCommit: NOOP,

  getRootHostContext() {
    return EMPTY_OBJECT;
  },

  getChildHostContext() {
    return EMPTY_OBJECT;
  },

  shouldSetTextContent() {
    return false;
  },

  resetTextContent: NOOP,

  useSyncScheduling: true,

  now: () => performance.now(),
  supportsMutation: true,
  appendChildToContainer: () => {},
  commitUpdate() {},
  commitTextUpdate() {},
  removeChild() {},
});

export default CanvasRenderer;
