# 指南

## 介绍

这是一个通用的前端工具库，搭建的初衷是积累在前端工程中使用的工具类、函数等。

采用模块化的开发方式，并且引入必要的单元测试，更加合理的维护并扩展通用工具库。便于跨工程使用，提高开发效率。:tada: :wink:

:heart_decoration: :point_right: **欢迎大家积极使用和反馈，同时也可以加入团队共同维护** :point_left:

## 快速上手

通过 npm 下载安装代码

```bash
$ npm install --save loong-js
```

如果你是 node 环境

```js
var { truncate } = require('loong-js');

truncate('123456', 5);
```

如果你是 webpack 等环境

```js
import { truncate } from 'loong-js';

truncate('123456', 5);

import loong from 'loong-js';

loong.truncate('123456', 5);
```

如果你是浏览器环境

```html
<script src="node_modules/loong-js/dist/index.aio.js"></script>
<script>
  loong.truncate('123456', 5);
</script>
```
