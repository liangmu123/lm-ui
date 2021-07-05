## vue指令 v-click
- 支持防抖 首次点击后立即触发 之后一秒内重复点击 无效 超出1秒后点击 依然有效
- 支持加载动画 配置.loading后 函数第一个参数和第二个参数 分别为start和close方法 start开启加载动画 close关闭 可以通过loadingOption传入loading配置 或者执行start函数时 传入loading配置
- start如果传参 会与loadingOption合并 优先级大于loadingOption
- loading配置 同 element-ui/loading

### 使用方法
```js
import Vue from 'vue'
import VClick from '@class_liangmu/lm-ui/helpers/directives/click'

Vue.use(VClick)
```

### 组件中使用
```vue
<template>
  <lm-button v-click:[{loadingOption}].debounce.loading="handleClick">click</lm-button>
</template>

<script>
  export default {
    data () {
      return {
        // loading加载配置 同element-ui/loading 配置
        loadingOption: {}
      }
    },
    methods: {
      handleClick (start, close) {
        // 开启加载动画 start支持传参 参数同element-ui/loading
        start()
        // 关闭加载动画
        close()
      }
    }
  }
</script>
```