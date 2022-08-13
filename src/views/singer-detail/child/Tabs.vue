<template>
  <div class="tabs">
    <el-tabs v-model="activeName" class="demo-tabs" @tab-change="toModule">
      <el-tab-pane v-for="item in titleList" :label="item.label" :name="item.name"></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default { name: 'Tabs' }
</script>
<script setup>
import { ref, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
let activeName = ref('hotSongs') //活跃tab的name
const titleList = reactive([
  { label: '热门音乐', name: 'hotSongs', url: '/singerDetail/hotSong' },
  { label: '热门MV', name: 'hotMv', url: '/singerDetail/hotMv' },
  { label: '歌手详情', name: 'introduce', url: '/singerDetail/introduce' },
  { label: '相似歌手', name: 'similar', url: '/singerDetail/similar' }
])
//点击到相关模块
const toModule = (name) => {
  titleList.forEach((item) => {
    if (item.name === name) {
      router.push({
        path: item.url,
        query: {
          id: route.query.id
        }
      })
    }
  })
}
</script>
<style scoped lang="less">
.tabs {
  margin-top: 20px;
}
</style>
