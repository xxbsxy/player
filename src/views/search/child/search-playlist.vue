<template>
  <Playlist :playlists="playlists" />
  <Pagination
    :pageNum="pageNum"
    :pageSize="30"
    :total="playlistsTotal"
    @changePageSize="changePageSize"
  />
</template>

<script>
export default { name: 'search-playlist' }
</script>
<script setup>
import Playlist from '@/components/playlist/Playlist.vue'
import Pagination from '@/components/pagination/Pagination'
import { watch, ref } from 'vue'
import { searchStore } from '@/store/search'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
let activePageSize = ref(0) //保持再次搜索页码不变
let pageNum = ref(1)

const route = useRoute()
const store = searchStore()
const { playlists, playlistsTotal } = storeToRefs(store)
//页码改变回调
const changePageSize = (newPage) => {
  pageNum.value = newPage
  activePageSize.value = (newPage - 1) * 30
  store.getSearchResult({
    keywords: route.query.keyword,
    type: 1000,
    offset: (newPage - 1) * 30
  })
}
watch(
  () => route.query.keyword,
  (newvalue) => {
    if (newvalue) {
      store.getSearchResult({
        keywords: route.query.keyword,
        type: 1000,
        offset: activePageSize.value
      })
    }
  },
  { immediate: true, deep: true }
)
</script>
<style scoped lang="less"></style>
