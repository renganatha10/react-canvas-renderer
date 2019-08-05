import Reconciler from 'react-reconciler';
import uuid from 'uuid/v4';

import { Container, Circle, Rectangle, Text } from './../shapes';

import canvasCollections from '../utils/canvas-collections';
import deepEqual from '../utils/deepEqual';

const EMPTY_OBJECT = {};
const NOOP = () => {};

const CanvasRenderer = Reconciler({
  createInstance(type, props) {
    switch (type) {
    case 'Container':
      return new Container();
    case 'Rect':
      return Rectangle.init(props, uuid());
    case 'Text':
      return Text.init(props, uuid());
    case 'Circle':
      return Circle.init(props, uuid());
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
      if (parentInstance.type === 'Container') {
        parentInstance.appendChild(child);
      }
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
    if (parentInstance.type !== 'Text' && typeof child === 'string') {
      throw new Error(
        `You cannot pass text as child of ${
          parentInstance.type
        }. Enclose Text in <Text /> component`
      );
    }

    if (parentInstance.type === 'Container' || parentInstance.type === 'Text') {
      if (parentInstance.type === 'Container') {
        parentInstance.appendChild(child);
      }
    } else {
      throw new Error('Use <Group /> to created nested Canvas Objects');
    }
  },

  removeChild(parentInstance, child) {
    parentInstance.removeChild(child);
  },

  commitUpdate(instance, updatePayload, type, oldProps, newProps) {
    if (!(oldProps.children || newProps.children)) {
      if (!deepEqual(oldProps, newProps)) {
        canvasCollections.updateCollection(instance.id, newProps);
      }
    }
  },
  commitTextUpdate: NOOP,
  commitMount: NOOP,
});

export default CanvasRenderer;
