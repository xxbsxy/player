<template>
  <Songlist :songs="songs" />
</template>

<script>
export default { name: 'playlist-song' }
</script>
<script setup>
import Songlist from '@/components/songlist/Songlist.vue'
import { playlistStore } from '@/store/playlist'
import { storeToRefs } from 'pinia'
const store = playlistStore()
const { songs } = storeToRefs(store)
</script>
<style scoped lang="less"></style>
