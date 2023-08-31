# debounce

创建防抖函数，从上一次触发回调后，延迟 wait 毫秒后再次触发回调

## 参数

- param `function` func 防抖回调函数
- param `number` wait 延迟触发时间

## 返回

- return `function` 创建的新的防抖函数

## 示例

```js
jQuery(window).on('resize', debounce(callback, 150));
```
