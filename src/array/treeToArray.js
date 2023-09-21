export function treeToArray(tree, arr = []) {
  tree.forEach((item) => {
    const { children } = item;
    if (children) {
      delete item.children;
      if (children.length) {
        arr.push(item);
        return treeToArray(children, arr);
      }
    }
    arr.push(item);
  });
  return arr;
}
