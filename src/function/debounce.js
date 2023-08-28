export function debounce(func, wait = 0) {
  wait = Math.round(wait, 10);

  let timerId;
  return function debounced(...args) {
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}
