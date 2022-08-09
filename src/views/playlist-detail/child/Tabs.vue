<template>
  <el-tabs class="demo-tabs" v-model="activeName" @tab-change="toModule">
    <el-tab-pane
      v-for="item in titleList"
      :label="item.label"
      :name="item.name"
      :key="item.name"
    ></el-tab-pane>
  </el-tabs>
</template>

<script>
export default { name: 'Tabs' }
</script>
<script setup>
import { ref, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()

let activeName = ref('songs')
const titleList = reactive([
  { label: '歌曲', name: 'songs', url: '/playlistDetail/song' },
  { label: '评论', name: 'comment', url: '/playlistDetail/comment' }
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
.demo-tabs {
  margin-top: 20px;
  margin-left: 14px;
}
</style>
