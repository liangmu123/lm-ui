<template>
  <div class="layout">
    <layout-header />
    <div class="layout_main">
      <layout-aside />
      <layout-container />
    </div>
  </div>
</template>

<script>
import LayoutHeader from './components/header'
import LayoutAside from './components/aside'
import LayoutContainer from './components/container'

export default {
  components: {
    LayoutHeader,
    LayoutAside,
    LayoutContainer
  }
}
</script>
<style scoped lang="scss">
  .layout {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    .layout_main {
      flex: 1;
      display: flex;
      >div:last-child {
        flex: 1;
      }
    }
  }
</style>
