# throttle

创建节流函数，在 wait 秒内最多执行 func 一次的函数

## 参数

- param `function` func 节流回调函数
- param `number` wait 节流时间

## 返回

- return `function` 创建的新的节流函数

## 示例

```js
jQuery(window).on('scroll', throttle(updatePosition, 100));
```
