import { type } from '../object/type';

export function isBankCard(str) {
  if (type(str) !== 'string') {
    return false;
  }
  const reg = /^[1-9]\d{9,29}$/;
  return reg.test(str);
}
