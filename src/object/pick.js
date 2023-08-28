import { type } from '@jslib-book/type';

// Object.create(null) 的对象，没有hasOwnProperty方法
function hasOwnProp(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

export function pick(obj, paths) {
  if (type(obj) !== 'Object') {
    return {};
  }

  if (!Array.isArray(paths)) {
    return {};
  }

  const res = {};

  for (let i = 0; i < paths.length; i++) {
    const key = paths[i];
    if (hasOwnProp(obj, key)) {
      res[key] = obj[key];
    }
  }

  return res;
}
