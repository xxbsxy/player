<template>
  <Songlist :songs="hotSongs" />
</template>

<script>
export default { name: 'singer-hotsong' }
</script>
<script setup>
import Songlist from '@/components/songlist/Songlist.vue'
import { singerStore } from '@/store/singer'
import { storeToRefs } from 'pinia'
const store = singerStore()
const { hotSongs } = storeToRefs(store)
</script>
<style scoped lang="less"></style>
