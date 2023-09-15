import { type } from '../object/type';

export function isIDCard(str) {
  if (type(str) !== 'string') {
    return false;
  }
  const reg =
    /^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/;
  return reg.test(str);
}
