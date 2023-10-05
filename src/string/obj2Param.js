import { cleanArray } from '../array/cleanArray';

/**
 * @param {Object} json
 * @return {String}
 */
export function obj2Param(json) {
  if (!json) return '';
  return cleanArray(
    Object.keys(json).map((key) => {
      if (json[key] === undefined) return '';
      return encodeURIComponent(key) + '=' + encodeURIComponent(json[key]);
    })
  ).join('&');
}
