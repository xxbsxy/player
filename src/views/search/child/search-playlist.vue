<template>
  <Playlist :playlists="playlists" />
</template>

<script>
export default { name: 'search-playlist' }
</script>
<script setup>
import Playlist from '@/components/playlist/Playlist.vue'
import { ref, watch } from 'vue'
import { searchStore } from '@/store/search'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
const route = useRoute()
const store = searchStore()
const { playlists } = storeToRefs(store)
watch(
  () => route.query.keyword,
  (newvalue) => {
    if (newvalue) {
      store.getSearchResult({ keywords: route.query.keyword, type: 1000, offset: 0 })
    }
  },
  { immediate: true, deep: true }
)
</script>
<style scoped lang="less"></style>
