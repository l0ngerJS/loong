import { type } from '../object/type';

export function isIpMask(str) {
  if (type(str) !== 'string') {
    return false;
  }
  const reg =
    /^(254|252|248|240|224|192|128)\.0\.0\.0|255\.(254|252|248|240|224|192|128|0)\.0\.0|255\.255\.(254|252|248|240|224|192|128|0)\.0|255\.255\.255\.(255|254|252|248|240|224|192|128|0)$/;
  return reg.test(str);
}
