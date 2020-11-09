<template>
    <div>
        <h1>已完成课程</h1>
        <el-table
        :data="tableData"
        style="width: 50%"
        :row-class-name="tableRowClassName">
        <el-table-column
        prop="date"
        label="日期"
        width="180">
        </el-table-column>
        <el-table-column
        prop="name"
        label="已完成课程"
        width="180">
        </el-table-column>
        <el-table-column
        prop="address"
        label="考试成绩">
        </el-table-column>
    </el-table>
    </div>
</template>


<style>
.el-table{
    margin: 0 auto;
    text-align: center;
}
  .el-table .warning-row {
    background: oldlace;
    text-align: center;
  }

  .el-table .success-row {
    background: #f0f9eb;
    text-align: center;
  }
</style>

<script>
  export default {
    methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      }
    },
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: 'python基础',
          address: '80',
        }, {
          date: '2016-05-04',
          name: 'Java基础',
          address: '70'
        }, {
          date: '2016-05-01',
          name: 'Web前端基础',
          address: '90',
        }, {
          date: '2016-05-03',
          name: 'C语言',
          address: '100'
        }]
      }
    }
  }
</script>