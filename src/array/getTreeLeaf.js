export function getTreeLeaf(data, leafArr = []) {
  data.forEach((el) => {
    if (el.children && el.children.length) {
      getTreeLeaf(el.children, leafArr);
    } else {
      leafArr.push(el);
    }
  });
  return leafArr;
}
