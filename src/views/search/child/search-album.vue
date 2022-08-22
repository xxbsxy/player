<template>
  <el-table :data="albums" style="width: 100%" :show-header="false" @cell-dblclick="toAlbumDetail">
    <!-- 专辑名称 -->
    <el-table-column width="500">
      <template #default="scope">
        <img :src="scope.row.picUrl" alt="" class="pic" />
        <span>{{ scope.row.name }}</span>
      </template>
    </el-table-column>
    <!-- 歌手名称 -->
    <el-table-column width="300">
      <template #default="scope">
        <span>{{ scope.row.artist.name }}</span>
      </template>
    </el-table-column>
    <!-- 专辑发布时间 -->
    <el-table-column width="300">
      <template #default="scope">
        <span>{{ formatTimeStamp(scope.row.publishTime) }}</span>
      </template>
    </el-table-column>
    <!-- 专辑歌曲数目 -->
    <el-table-column>
      <template #default="scope">
        <span>{{ scope.row.size }}首</span>
      </template>
    </el-table-column>
  </el-table>
  <Pagination :pageNum="1" :pageSize="30" :total="150" @changePageSize="changePageSize" />
</template>

<script>
export default { name: 'search-album' }
</script>
<script setup>
import Pagination from '@/components/pagination/Pagination'
import { watch, ref } from 'vue'
import { searchStore } from '@/store/search'
import { storeToRefs } from 'pinia'
import { formatTimeStamp } from '@/utils/formatTimeStamp'
import { useRouter, useRoute } from 'vue-router'

let activePageSize = ref(0) //保持再次搜索页码不变
const router = useRouter()
const route = useRoute()
const store = searchStore()
const { albums } = storeToRefs(store)
const toAlbumDetail = (row) => {
  router.push({
    path: '/albumDetail',
    query: {
      id: row.id
    }
  })
}
//页码改变回调
const changePageSize = (newPage) => {
  activePageSize.value = (newPage - 1) * 30
  store.getSearchResult({
    keywords: route.query.keyword,
    type: 10,
    offset: (newPage - 1) * 30
  })
}
watch(
  () => route.query.keyword,
  (newvalue) => {
    if (newvalue) {
      store.getSearchResult({
        keywords: route.query.keyword,
        type: 10,
        offset: activePageSize.value
      })
    }
  },
  { immediate: true, deep: true }
)
</script>
<style scoped lang="less">
.pic {
  width: 60px;
  height: 60px;
  border-radius: 4px;
  vertical-align: -24px;
  margin-right: 18px;
}
</style>
