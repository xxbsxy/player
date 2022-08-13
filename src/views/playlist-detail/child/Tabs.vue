<template>
  <el-tabs class="demo-tabs" v-model="activeName">
    <el-tab-pane label="歌曲" name="songs">
      <playlist-song></playlist-song>
    </el-tab-pane>
    <el-tab-pane label="评论" name="comment">
      <playlist-comment></playlist-comment>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default { name: 'Tabs' }
</script>
<script setup>
import PlaylistSong from './playlist-song.vue'
import PlaylistComment from './playlist-comment.vue'
import { ref } from 'vue'
let activeName = ref('songs')
</script>
<style scoped lang="less">
.demo-tabs {
  margin-top: 20px;
  margin-left: 14px;
}
</style>
