import { type } from '../object/type';

export function isPlateNum(str) {
  if (type(str) !== 'string') {
    return false;
  }
  const reg =
    /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z][A-HJ-NP-Z0-9]{4,5}[A-HJ-NP-Z0-9挂学警港澳]$/;
  return reg.test(str);
}
