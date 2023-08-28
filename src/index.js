import * as Array from './array/index.js';
import * as Function from './function/index.js';
import * as Object from './object/index.js';
import * as String from './string/index.js';

export * from './array/index.js';
export * from './function/index.js';
export * from './object/index.js';
export * from './string/index.js';

export default {
  ...Array,
  ...Function,
  ...Object,
  ...String,
};
