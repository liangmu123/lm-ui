<template>
  <el-table
  :data="data"
  class="my_table"
  :border="border"
  ref="table"
  :height="height"
  v-bind="$attrs"
  v-on="$listeners"
  :header-cell-style="headerCellStyle"
  :cell-style="cellStyle"
  style="width: 100%"
  >
    <slot></slot>
    <template v-for="item in tableType">
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
    <template slot="empty">
      <div class="noData">
        <img src="@/assets/img/empty.png" alt="空图片" />
        <p>暂无数据</p>
      </div>
    </template>
  </el-table>
</template>

<script>
import { Table } from 'element-ui'
import TableColumn from './column'
export default {
  name: 'TableComp',
  components: {
    ElTable: Table,
    TableColumn
  },
  props: {
    cellStyle: String,
    headerCellStyle: String,
    border: {
      type: Boolean,
      default: false
    },
    tableType: {
      required: true,
      type: Array
    },
    data: {
      type: Object
    },
    height: String
  },
  methods: {
    // 用于多选表格，切换所有行的选中状态
    toggleAllSelection () {
      this.$refs.table.toggleAllSelection()
    },
    // 用于多选表格，切换某一行的选中状态
    toggleRowSelection (row, selected) {
      this.$refs.table.toggleRowSelection(row, selected)
    }
  }
}
</script>

<style lang="scss" scoped>
.my_table {
  margin: 0;
  // /deep/ td {
  //   height: 50px;
  //   line-height: 50px;
  // }
  .noData {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    > img {
      display: block;
      width: 200px;
      margin-bottom: -20px;
    }
    > p {
      text-align: center;
      font-size: 12px;
      line-height: 36px;
    }
  }
}
</style>
