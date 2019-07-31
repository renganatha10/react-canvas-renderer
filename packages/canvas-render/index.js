import render from './src/renderer';

const CANVAS_NODES = ['Rect', 'Text', 'Circle', 'Container'];

let TYPES = {};

CANVAS_NODES.forEach(nodeName => {
  TYPES[nodeName] = nodeName;
});

export default { render, ...TYPES };
