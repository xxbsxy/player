<template>
  <playlist-describe></playlist-describe>
  <Tabs />
</template>

<script>
export default { name: 'PlaylistDteail' }
</script>
<script setup>
import Tabs from './child/Tabs.vue'
import PlaylistDescribe from './child/playlist-describe.vue'
</script>
<style scoped lang="less"></style>
