export function pickTreeItem(list, cb) {
  let res = [];
  list.forEach((item) => {
    if (item.children && item.children.length) {
      const result = pickTreeItem(item.children, cb);
      res.push(...result);
    }
    if (cb(item)) {
      delete item.children;
      res.push(item);
    }
  });
  return res;
}
