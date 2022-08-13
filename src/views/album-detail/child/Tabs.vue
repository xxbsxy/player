<template>
  <el-tabs v-model="activeName" class="demo-tabs">
    <el-tab-pane label="歌曲" name="song">
      <album-song></album-song>
    </el-tab-pane>
    <el-tab-pane label="评论" name="comment">
      <album-comment></album-comment>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default { name: 'Tabs' }
</script>
<script setup>
import AlbumSong from './album-song'
import AlbumComment from './album-comment'
import { ref } from 'vue'
let activeName = ref('song')
</script>
<style scoped lang="less"></style>
