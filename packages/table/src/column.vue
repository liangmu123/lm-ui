<template>
  <el-table-column
  :type="type"
  :label="label"
  :min-width="minWidth"
  :width="width"
  >
    <template v-if="type === 'custom'" v-slot="scope">
      <slot :row="scope.row"></slot>
    </template>
    <template v-else-if="columns">
      <template v-for="item in columns">
        <table-column
        :key="item.prop"
        :type="item.type"
        :minWidth="item.minWidth"
        :width="item.width"
        :label="item.label"
        :prop="item.prop"
        :columns="item.columns"
        >
          <template v-if="item.customName" v-slot="scope">
            <slot :name="item.customName" :row="scope.row"></slot>
          </template>
        </table-column>
      </template>
    </template>
    <template v-else-if="!type" v-slot="scope">
      {{ (scope.row[prop] === '' && "-") || scope.row[prop] }}
    </template>
  </el-table-column>
</template>

<script>
import { TableColumn } from 'element-ui'
export default {
  name: 'Column',
  props: {
    type: String,
    minWidth: String,
    width: String,
    label: String,
    prop: String,
    columns: Array
  },
  components: {
    ElTableColumn: TableColumn
  }
}
</script>
