<template>
  <el-table
  class="y_table"
  :data="data"
  v-bind="$attrs"
  v-on="$listeners">
    <slot></slot>
    <template v-for="item in tableColumn">
      <table-column
      :key="item.prop || item.slotName || item.type"
      v-bind="item">
        <template v-if="item.slotName" v-slot="scope">
          <slot :row="scope.row" :name="item.slotName"></slot>
        </template>
      </table-column>
    </template>
    <template v-slot:empty>
      <slot name="empty"></slot>
    </template>
  </el-table>
</template>

<script>
import TableColumn from './table-column'
export default {
  name: 'TableComp',
  components: {
    TableColumn
  },
  props: {
    tableColumn: {
      type: Array,
      default: () => []
    },
    data: {
      type: Array,
      default: () => []
    }
  }
}
</script>
