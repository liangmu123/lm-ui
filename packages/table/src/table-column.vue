<template>
  <!-- type类型 -->
  <el-table-column v-if="$attrs.type" v-bind="$attrs">
  </el-table-column>
  <!-- 表头合并类型 -->
  <el-table-column v-else-if="$attrs.columns" v-bind="$attrs">
    <template v-for="item in $attrs.columns">
      <table-column
      :key="item.prop || item.slotName || item.type"
      v-bind="item">
        <template v-slot="scope">
          <slot :row="scope.row" :name="item.slotName"></slot>
        </template>
      </table-column>
    </template>
  </el-table-column>
  <!-- 普通类型及slot类型 -->
  <el-table-column v-else v-bind="$attrs">
    <template v-slot="scope">
      <template v-if="$attrs.slotName">
        <slot :row="scope.row"></slot>
      </template>
      <template v-else>
        {{scope.row[prop]}}
      </template>
    </template>
  </el-table-column>
</template>

<script>
export default {
  name: 'TableColumn',
  props: {
    prop: {
      type: String
    }
  }
}
</script>
