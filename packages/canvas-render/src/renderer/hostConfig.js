import Reconciler from 'react-reconciler';

import hostObject from './hostObject';
import middleware from './middleware';

import deepEqual from '../utils/deepEqual';

const EMPTY_OBJECT = {};
const NOOP = () => {};

const CanvasRenderer = Reconciler({
  createInstance(type, props) {
    switch (type) {
    case 'Container': {
      const canvas = document.getElementById('canvas');
      const context = canvas.getContext('2d');
      return hostObject(middleware)(type, props, context);
    }
    case 'Rect':
    case 'Text':
    case 'Circle':
      return hostObject(middleware)(type, props);
    default:
      throw new Error(`Invalid component type: ${type}`);
    }
  },

  createTextInstance(child) {
    return child;
  },

  appendInitialChild(parentInstance, child) {
    const {
      middleware: { add, setContext },
      type,
      props,
      ctx,
    } = parentInstance;

    if (parentInstance.type !== 'Text' && typeof child === 'string') {
      throw new Error(
        `You cannot pass text as child of ${
          parentInstance.type
        }. Enclose Text in <Text /> component`
      );
    }

    if (parentInstance.type === 'Container' || parentInstance.type === 'Text') {
      if (parentInstance.type === 'Container') {
        setContext(ctx);
      }
      add({ type, props, child });
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

  appendChildToContainer() {},

  removeChildFromContainer() {},

  appendChild(parentInstance, child) {
    const {
      middleware: { add, setContext },
      type,
      props,
      ctx,
    } = parentInstance;

    if (parentInstance.type !== 'Text' && typeof child === 'string') {
      throw new Error(
        `You cannot pass text as child of ${
          parentInstance.type
        }. Enclose Text in <Text /> component`
      );
    }

    if (parentInstance.type === 'Container' || parentInstance.type === 'Text') {
      if (parentInstance.type === 'Container') {
        setContext(ctx);
      }
      add({ type, props, child });
    } else {
      throw new Error('Use <Group /> to created nested Canvas Objects');
    }
  },

  removeChild() {
    // parentInstance.removeChild(child);
  },

  commitUpdate(instance, updatePayload, type, oldProps, newProps) {
    if (!(oldProps.children || newProps.children)) {
      if (!deepEqual(oldProps, newProps)) {
        // instance.update(oldProps, newProps);
      }
    }
  },
  commitTextUpdate: NOOP,
  commitMount: NOOP,
});

export default CanvasRenderer;
