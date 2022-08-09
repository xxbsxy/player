<template>
  <Playlist :playlists="playlists" />
</template>

<script>
export default { name: 'search-playlist' }
</script>
<script setup>
import Playlist from '@/components/playlist/Playlist.vue'
import { searchStore } from '@/store/search'
import { storeToRefs } from 'pinia'
const store = searchStore()
const { playlists } = storeToRefs(store)
</script>
<style scoped lang="less"></style>
