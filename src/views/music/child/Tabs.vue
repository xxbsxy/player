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
import { useRouter } from 'vue-router'
const router = useRouter()
let activeName = ref('newSongs') //活跃tab的name
const titleList = reactive([
  { label: '推荐音乐', name: 'newSongs', url: '/music/newSongs' },
  { label: '推荐歌单', name: 'playlist', url: '/music/recommendPlaylist' },
  { label: '推荐MV', name: 'mv', url: '/music/recommendMv' }
])
//点击到相关模块
const toModule = (name) => {
  titleList.forEach((item) => {
    if (item.name === name) {
      router.push({
        path: item.url
      })
    }
  })
}
</script>
<style scoped lang="less"></style>
