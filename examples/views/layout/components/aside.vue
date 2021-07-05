<template>
  <div class="aside">
    <div class="aside_main">
      <div class="nav" v-for="(item, index) in navList" :key="index">
        <div class="title">{{item.name}}</div>
        <div class="nav_main">
          <div class="nav_list" v-for="(itm, idx) in item.list" :key="idx">
            <router-link :to="itm.path">{{itm.name}}</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navList: [
        {
          name: '开发指南',
          list: [
            { name: '介绍', path: '/intro' },
            { name: '安装', path: '/install' },
            { name: '快速上手', path: '/quickStart' }
          ]
        },
        {
          name: '工具库',
          list: [
            { name: 'VClick 点击指令', path: '/VClick' },
            { name: 'validator 通用校验', path: '/111' },
            { name: '金额转换', path: '/amountTransform' }
          ]
        },
        {
          name: '脚手架',
          list: [
            { name: '用法详解', path: '/111' }
          ]
        },
        {
          name: '基础组件',
          list: [
            { name: 'Button 按钮', path: '/111' },
            { name: 'Form 表单', path: '/111' },
            { name: 'Icon 图标', path: '/111' }
          ]
        },
        {
          name: '业务组件',
          list: [
            { name: 'Table 表格', path: '/111' }
          ]
        }
      ]
    }
  }
}
</script>
<style scoped lang="scss">
  .aside {
    width: 240px;
    height: 100%;
    box-shadow: 5px 0 5px -4px #eee;
    overflow: hidden;
    .aside_main {
      width: 260px;
      height: 100%;
      overflow: auto;
      padding: 20px;
      .nav {
        margin-bottom: 40px;
        .title {
          color: #455a64;
          font-weight: bold;
          margin-bottom: 20px;
        }
        .nav_main {
          .nav_list {
            font-size: 14px;
            color: #455a64;
            margin-bottom: 20px;
            & a {
              text-decoration: none;
              color: #455a64;
              &:hover, &.router-link-active {
                color: #4fc08d;
              }
            }
          }
        }
      }
    }
  }
</style>
