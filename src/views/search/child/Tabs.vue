<template>
  <div class="tabs">
    <el-tabs class="demo-tabs" @tab-change="toModule" v-model="activeName">
      <el-tab-pane
        v-for="item in titleList"
        :label="item.label"
        :name="item.type"
        :key="item.type"
      ></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default { name: 'Tabs' }
</script>
<script setup>
import { useRoute, useRouter } from 'vue-router'
import { ref, reactive, onMounted } from 'vue'
import { searchStore } from '@/store/search'
import { storeToRefs } from 'pinia'
const route = useRoute()
const store = searchStore()
const router = useRouter()
let activeName = ref(1) //活跃tab的Name
const titleList = reactive([
  { label: '热门歌曲', type: 1, url: '/search/song' },
  { label: '歌单', type: 1000, url: '/search/playlist' },
  { label: 'MV', type: 1004, url: '/search/mv' },
  { label: '专辑', type: 10, url: '/search/album' }
])
//点击到相关模块
const toModule = (name) => {
  titleList.forEach((item) => {
    if (item.type === name) {
      store.getSearchResult({ keywords: route.query.keyword, type: item.type })
      router.push({
        path: item.url,
        query: {
          keyword: route.query.keyword
        }
      })
    }
  })
}
</script>
<style scoped lang="less"></style>
