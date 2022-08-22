<template>
  <div class="buttom">
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      class="pagination"
      v-model:currentPage="pageNum"
      v-model:page-size="pageSize"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
export default { name: 'Pagination' }
</script>
<script setup>
import { defineEmits } from 'vue'
const props = defineProps({
  pageNum: {
    type: Number,
    default: 1
  },
  pageSize: {
    type: Number,
    default: 1
  },
  total: {
    type: Number,
    default: 1
  }
})
const emit = defineEmits(['changePageSize'])
//页码改变将新页码发送给父组件
const handleCurrentChange = (newPage) => {
  emit('changePageSize', newPage)
}
</script>
<style scoped lang="less">
.buttom {
  position: relative;
  margin-top: 20px;
  height: 30px;
  .pagination {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
