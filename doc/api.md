# 文档

这是一个常用的工具库

## range

实现生成范围数组

### 参数
- param {number} start 数组起点
- param {number} stop 数组终点
- param {number} step 数组步长
### 返回
- return {array} 生成成功的数组对象

```js
range(1, 6); // [1, 2, 3, 4, 5, 6]
range(1, 6, 2); // [1, 3, 5]
```

## debounce

创建防抖函数，从上一次触发回调后，延迟 wait 毫秒后再次触发回调

### 参数
- param {function} func 防抖回调函数
- param {number} wait 延迟触发时间
### 返回
- return {function} 创建的新的防抖函数

```js
jQuery(window).on('resize', debounce(callback, 150));
```

## throttle

创建节流函数，在 wait 秒内最多执行 func 一次的函数

### 参数
- param {function} func 节流回调函数
- param {number} wait 节流时间
### 返回
- return {function} 创建的新的节流函数

```js
jQuery(window).on('scroll', throttle(updatePosition, 100));
```

## pick

获取对象字段函数，获取某个对象的字段数据

### 参数
- param {object} obj 需要获取字段的对象
- param {array} paths 需要获取的字段
### 返回
- return {object} 获取的字段数据

```js
const obj1 = { a: 1, b: 2, c: 3 };

const obj2 = pick(obj1, ['a', 'b']);

console.log(obj2); // { a: 1, b: 2 }
```

## getParam

获取URL参数函数

### 参数
- param {string} name 需要获取的参数字段 
- param {string} url url目标地址
### 返回
- return {string} 获取的参数值

```js
const url = 'http://localhost:8888/test.html?name=张三&id=123';

getParam('name', url); // 张三
getParam('test', url); // ''
```

## truncate

字符串截断

### 参数
- param {string} str 需要截断的字符串
- param {number} len 截断的长度
- param {string} omission 超出限制显示字符串
### 返回
- return {string} 处理后的字符串

```js
truncate('12345', 5); // 12345
truncate('123456', 5); // 12...
truncate('123456', 5, '-'); // 1234-
```
