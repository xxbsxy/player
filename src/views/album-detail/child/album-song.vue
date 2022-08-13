<template>
  <Songlist :songs="albumSongs" />
</template>

<script>
export default { name: 'album-song' }
</script>
<script setup>
import Songlist from '@/components/songlist/Songlist'
import { albumStore } from '@/store/album'
import { storeToRefs } from 'pinia'
const store = albumStore()
const { albumSongs } = storeToRefs(store)
</script>
<style scoped lang="less"></style>
