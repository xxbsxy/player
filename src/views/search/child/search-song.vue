<template>
  <Songlist :songs="songs" />
  <Pagination
    :pageNum="pageNum"
    :pageSize="30"
    :total="songsTotal"
    @changePageSize="changePageSize"
  />
</template>

<script>
export default { name: 'search-song' }
</script>
<script setup>
import Songlist from '@/components/songlist/Songlist.vue'
import Pagination from '@/components/pagination/Pagination'
import { searchStore } from '@/store/search'
import { storeToRefs } from 'pinia'
import { watch, ref } from 'vue'
import { useRoute } from 'vue-router'
let activePageSize = ref(0) //保持再次搜索页码不变
let pageNum = ref(1)
const store = searchStore()
const route = useRoute()
const { songs, songsTotal } = storeToRefs(store)
//页码改变回调
const changePageSize = (newPage) => {
  pageNum.value = newPage
  activePageSize.value = (newPage - 1) * 30
  store.getSearchResult({
    keywords: route.query.keyword,
    type: 1,
    offset: (newPage - 1) * 30
  })
}
watch(
  () => route.query.keyword,
  (newvalue) => {
    if (newvalue) {
      store.getSearchResult({
        keywords: route.query.keyword,
        type: 1,
        offset: activePageSize.value
      })
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
