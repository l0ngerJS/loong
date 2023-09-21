export function arrayToTree(items, config = { id: 'id', pid: 'pid', root: 0 }) {
  const result = []; // 存放结果集
  const itemMap = {};
  for (const item of items) {
    const id = item[config.id];
    const pid = item[config.pid];

    if (!itemMap[id]) {
      itemMap[id] = {
        children: [],
      };
    }

    itemMap[id] = {
      ...item,
      children: itemMap[id]['children'],
    };

    const treeItem = itemMap[id];

    if (pid === config.root) {
      result.push(treeItem);
    } else {
      if (!itemMap[pid]) {
        itemMap[pid] = {
          children: [],
        };
      }
      itemMap[pid].children.push(treeItem);
    }
  }
  return result;
}
