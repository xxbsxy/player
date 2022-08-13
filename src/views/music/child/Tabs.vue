<template>
  <div class="tabs">
    <el-tabs v-model="activeName" class="demo-tabs">
      <el-tab-pane label="推荐音乐" name="newSongs">
        <new-songs></new-songs>
      </el-tab-pane>
      <el-tab-pane label="推荐歌单" name="playlist">
        <recommend-playlist></recommend-playlist>
      </el-tab-pane>
      <el-tab-pane label="推荐MV" name="mv">
        <recommend-mv></recommend-mv>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default { name: 'Tabs' }
</script>
<script setup>
import { ref } from 'vue'
import NewSongs from './new-songs'
import RecommendMv from './recommend-mv'
import RecommendPlaylist from './recommend-playlist'
let activeName = ref('newSongs') //活跃tab的name
</script>
<style scoped lang="less"></style>
