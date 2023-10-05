export function getChildrenId(data, idArr = [], key = 'id') {
  data.forEach((el) => {
    idArr.push(el[key]);
    el.children && getChildrenId(el.children, idArr, key);
  });
  return idArr;
}
