<template>
  <album-description></album-description>
  <Tabs />
</template>

<script>
export default { name: 'AlbumDetail' }
</script>
<script setup>
import AlbumDescription from './child/album-description'
import Tabs from './child/Tabs.vue'
</script>
<style scoped lang="less"></style>
