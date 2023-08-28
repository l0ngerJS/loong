# 常用工具库

### 使用者指南

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

### 贡献者指南

首次运行需要先安装依赖

```bash
$ npm install
```

一键打包生成生产代码

```bash
$ npm run build
```

运行单元测试:

```bash
$ npm test
```
