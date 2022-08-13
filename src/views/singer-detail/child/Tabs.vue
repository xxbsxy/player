<template>
  <div class="tabs">
    <el-tabs v-model="activeName" class="demo-tabs">
      <el-tab-pane label="热门音乐" name="hotSongs">
        <singer-hot-song></singer-hot-song>
      </el-tab-pane>
      <el-tab-pane label="热门MV" name="hotMv">
        <singer-hot-mv></singer-hot-mv>
      </el-tab-pane>
      <el-tab-pane label="歌手详情" name="introduce">
        <singer-introduce></singer-introduce>
      </el-tab-pane>
      <el-tab-pane label="相似歌手" name="similar">
        <singer-similar></singer-similar>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default { name: 'Tabs' }
</script>
<script setup>
import SingerHotMv from './singer-hot-mv.vue'
import SingerHotSong from './singer-hot-song.vue'
import SingerIntroduce from './singer-introduce.vue'
import SingerSimilar from './singer-similar.vue'

import { ref, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
let activeName = ref('hotSongs') //活跃tab的name
</script>
<style scoped lang="less">
.tabs {
  margin-top: 20px;
}
</style>
