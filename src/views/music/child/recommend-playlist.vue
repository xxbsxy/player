<template>
  <Playlist :playlists="recommendPlaylist" />
</template>

<script>
export default { name: 'recommend-playlist' }
</script>
<script setup>
import { musicStore } from '@/store/music'
import { storeToRefs } from 'pinia'
import Playlist from '@/components/playlist/Playlist.vue'
const store = musicStore()
const { recommendPlaylist } = storeToRefs(store) //获取推荐歌单
</script>
<style scoped lang="less"></style>
