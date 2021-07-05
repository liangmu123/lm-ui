<template>
  <div class="container">
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script>

</script>
<style scoped lang="scss">
  .container {
    width: 100%;
    height: 100%;
    background: #e9ecef;
    padding: 20px;
    overflow: auto;
    .main {
      background: #fff;
      padding: 20px;
      width: 100%;
      border-radius: 4px;
    }
  }
</style>
