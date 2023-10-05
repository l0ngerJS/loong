export function getParentNode(data, config = { key: 'id', value: '2' }) {
  const { key, value } = config;
  for (let i = 0; i < data.length; i++) {
    if (data[i].children?.length) {
      if (data[i].children.some((item) => item[key] === value)) {
        return data[i];
      } else {
        const temp = getParentNode(data[i].children, config);
        if (temp) return temp;
      }
    }
  }
  return null;
}
