import { type } from '../object/type';

export function isTelephone(str) {
  if (type(str) !== 'string') {
    return false;
  }
  const reg = /^(?:(?:\d{3}-)?\d{8}|^(?:\d{4}-)?\d{7,8})(?:-\d+)?$/;
  return reg.test(str);
}
