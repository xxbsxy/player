<template>
  <Songlist :songs="songs" />
  <div class="buttom">
    <el-pagination
      background
      layout="prev, pager, next"
      :total="300"
      class="pagination"
      v-model:currentPage="pageNum"
      v-model:page-size="pageSize"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
export default { name: 'search-song' }
</script>
<script setup>
import Songlist from '@/components/songlist/Songlist.vue'
import { searchStore } from '@/store/search'
import { storeToRefs } from 'pinia'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
let pageNum = ref(1)
let pageSize = ref(30)
const store = searchStore()
const route = useRoute()
const { songs } = storeToRefs(store)
const handleCurrentChange = (newPage) => {
  console.log(newPage)
  pageNum.value = newPage
  store.getSearchResult({
    keywords: route.query.keyword,
    type: 1,
    offset: (newPage - 1) * pageSize.value
  })
}
watch(
  () => route.query.keyword,
  (newvalue) => {
    if (newvalue) {
      store.getSearchResult({ keywords: route.query.keyword, type: 1, offset: 0 })
    }
  },
  { immediate: true, deep: true }
)
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
