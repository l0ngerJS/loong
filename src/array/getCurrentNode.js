export function getCurrentNode(data, config = { key: 'id', value: '2' }) {
  const { key, value } = config;
  let temp = null;
  for (let i = 0; i < data.length; i++) {
    if (data[i][key] === value) {
      return data[i];
    } else if (data[i].children?.length) {
      const o = getCurrentNode(data[i].children, config);
      if (o) return o;
    }
  }
  return temp;
}
