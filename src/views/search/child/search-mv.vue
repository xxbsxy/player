<template>
  <MvList :mvs="mvs" />
  <Pagination
    :pageNum="pageNum"
    :pageSize="30"
    :total="mvsTotal"
    @changePageSize="changePageSize"
  />
</template>

<script>
export default { name: 'search-mv' }
</script>
<script setup>
import { watch, ref } from 'vue'
import MvList from '@/components/mvlist/MvList.vue'
import Pagination from '@/components/pagination/Pagination'
import { searchStore } from '@/store/search'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
let activePageSize = ref(0) //保持再次搜索页码不变
let pageNum = ref(1)
const route = useRoute()
const store = searchStore()
const { mvs, mvsTotal } = storeToRefs(store)
//页码改变回调
const changePageSize = (newPage) => {
  pageNum.value = newPage
  activePageSize.value = (newPage - 1) * 30
  store.getSearchResult({
    keywords: route.query.keyword,
    type: 1004,
    offset: (newPage - 1) * 30
  })
}
watch(
  () => route.query.keyword,
  (newvalue) => {
    if (newvalue) {
      store.getSearchResult({
        keywords: route.query.keyword,
        type: 1004,
        offset: activePageSize.value
      })
    }
  },
  { immediate: true, deep: true }
)
</script>
<style scoped lang="less"></style>
