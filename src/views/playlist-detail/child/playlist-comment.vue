<template>
  <Comment :comments="comments" />
</template>

<script>
export default { name: 'playlist-comment' }
</script>
<script setup>
import Comment from '@/components/comment/Comment.vue'
import { playlistStore } from '@/store/playlist'
import { storeToRefs } from 'pinia'
const store = playlistStore()
const { comments } = storeToRefs(store)
</script>
<style scoped lang="less"></style>
