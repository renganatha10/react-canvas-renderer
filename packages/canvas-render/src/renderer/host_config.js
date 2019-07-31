import Reconciler from 'react-reconciler';
import Rectangle from '../shapes/Rectangle';
import Container from '../shapes/Container';
import Circle from '../shapes/Circle';
import Text from '../shapes/Text';

const EMPTY_OBJECT = {};
const NOOP = () => {};

const CanvasRenderer = Reconciler({
  createInstance(type, props) {
    switch (type) {
    case 'canvas':
      return new Container(props);
    case 'rect':
      return new Rectangle(props);
    case 'text':
      return new Text(props);
    case 'circle':
      return new Circle(props);
    default:
      throw new Error(`Invalid component type: ${type}`);
    }
  },

  createTextInstance(child) {
    return child;
  },

  appendInitialChild(parentInstance, child) {
    if (parentInstance.type !== 'Text' && typeof child === 'string') {
      throw new Error(
        `You cannot pass text as child of ${
          parentInstance.type
        }. Enclose Text in <Text /> component`
      );
    }

    if (parentInstance.type === 'Container' || parentInstance.type === 'Text') {
      parentInstance.appendInitialChild(child);
    } else {
      throw new Error('Use <Group /> to created nested Canvas Objects');
    }
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
