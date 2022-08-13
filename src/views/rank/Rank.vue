<template>
  <Playlist :playlists="rankList" />
</template>

<script>
export default { name: 'Rank' }
</script>
<script setup>
import Playlist from '@/components/playlist/Playlist.vue'
import { onMounted } from 'vue'
import { rankStore } from '@/store/rank'
import { storeToRefs } from 'pinia'
const store = rankStore()
const { rankList } = storeToRefs(store)
onMounted(() => {
  if (rankList.length === 0) {
    store.getRank()
  }
})
</script>
<style scoped lang="less"></style>
