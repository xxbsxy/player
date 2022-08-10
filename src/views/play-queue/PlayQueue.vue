<template>
  <h2>播放队列</h2>
  <Songlist :songs="state.playlist" />
</template>

<script>
export default { name: 'PlayQueue' }
</script>
<script setup>
import SongList from '@/components/songlist/Songlist.vue'
import state from '@/components/footer/hook/useState'
</script>
<style scoped lang="less"></style>
