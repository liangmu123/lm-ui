## 快速上手

本节将介绍如何在项目中使用组件库。

### 引入 lm-ui

你可以引入整个 lm-ui，或是根据需要仅引入部分组件。

#### 完整引入

在 main.js 中写入以下内容：

```javascript
import Vue from 'vue';
import LMUI from '@class_liangmu/lm-ui';
import '@class_liangmu/lm-ui/lib/lm-theme/index.css';
import App from './App.vue';

Vue.use(LMUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

注意：样式文件需要单独引入。


#### 按需引入

借助 [babel-plugin-component](https://github.com/QingWei-Li/babel-plugin-component)，我们可以只引入需要的组件，以达到减小项目体积的目的。

首先，安装 babel-plugin-component：

```bash
npm install babel-plugin-component -D
```

然后，将 .babelrc 修改为：

```json
{
  "presets": [["es2015", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "@class_liangmu/lm-ui",
        "styleLibraryName": "lm-theme"
      }
    ]
  ]
}
```

接下来，如果你只希望引入部分组件，那么需要在 main.js 中写入以下内容：

```javascript
import Vue from 'vue';

import { Button } from '@class_liangmu/lm-ui';

import App from './App.vue';

Vue.component(Button.name, Button);

/* 或写为
 * Vue.use(Button)
 */

new Vue({
  el: '#app',
  render: h => h(App)
});
```