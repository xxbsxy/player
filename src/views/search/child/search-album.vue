<template>
  <el-table :data="albums" style="width: 100%" :show-header="false">
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
</template>

<script>
export default { name: 'search-album' }
</script>
<script setup>
import { searchStore } from '@/store/search'
import { storeToRefs } from 'pinia'
import { formatTimeStamp } from '@/utils/formatTimeStamp'
const store = searchStore()
const { albums } = storeToRefs(store)
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
