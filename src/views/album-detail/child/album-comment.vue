<template>
  <Comment :comments="comments" />
</template>

<script>
export default { name: 'album-comment' }
</script>
<script setup>
import { albumStore } from '@/store/album'
import { storeToRefs } from 'pinia'
const store = albumStore()
const { comments } = storeToRefs(store)
</script>
<style scoped lang="less"></style>
