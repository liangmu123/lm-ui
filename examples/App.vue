<template>
  <div id="app">
    <lm-button type="primary">点击</lm-button>
    <lm-button type="success">点击</lm-button>
    <lm-button type="danger">点击</lm-button>
    <lm-button type="info">点击</lm-button>
    <lm-button type="warning">点击</lm-button>
    <br/>
    <lm-button type="primary" :plain="true">点击</lm-button>
    <lm-button type="success" :plain="true">点击</lm-button>
    <lm-button type="danger" :plain="true">点击</lm-button>
    <lm-button type="info" :plain="true">点击</lm-button>
    <lm-button type="warning" :plain="true">点击</lm-button>
    <br/>
    <lm-button type="primary" :plain="true" :round="true">点击</lm-button>
    <lm-button type="success" :plain="true" :round="true">点击</lm-button>
    <lm-button type="danger" :plain="true" :round="true">点击</lm-button>
    <lm-button type="info" :plain="true" :round="true">点击</lm-button>
    <lm-button type="warning" :plain="true" :round="true">点击</lm-button>
    <br/>
    <lm-button type="primary" :plain="true" :round="true" :circle="true">拆</lm-button>
    <lm-button type="success" :plain="true" :round="true" :circle="true">拆</lm-button>
    <lm-button type="danger" :plain="true" :round="true" :circle="true">拆</lm-button>
    <lm-button type="info" :plain="true" :round="true" :circle="true">拆</lm-button>
    <lm-button type="warning" :plain="true" :round="true" :circle="true">拆</lm-button>
    <br/>
    <lm-button type="primary" icon="ice-cream-round">点击</lm-button>
    <lm-button type="success" icon="ice-cream-round">点击</lm-button>
    <lm-button type="danger" icon="ice-cream-round">点击</lm-button>
    <lm-button type="info" icon="ice-cream-round">点击</lm-button>
    <lm-button type="warning" icon="ice-cream-round">点击</lm-button>
    <br/>
    <lm-button @click="handleClick(666)" type="warning" icon="ice-cream-round">事件按钮</lm-button>
    <br />
    <lm-button disabled type="primary" icon="ice-cream-round">点击</lm-button>
    <lm-button disabled type="success" icon="ice-cream-round">点击</lm-button>
    <lm-button disabled type="danger" icon="ice-cream-round">点击</lm-button>
    <lm-button disabled type="info" icon="ice-cream-round">点击</lm-button>
    <lm-button disabled type="warning" icon="ice-cream-round">点击</lm-button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick (row) {
      console.log(row)
    }
  }
}
</script>
<style scoped lang="scss">
</style>
