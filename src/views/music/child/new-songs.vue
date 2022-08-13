<template>
  <div class="new-songs">
    <!-- 播放列表 -->
    <el-table :data="newSongs" style="width: 100%" @cell-dblclick="toPlayMusic">
      <!-- 歌曲名 -->
      <el-table-column prop="name" label="歌曲名" width="460">
        <template #default="scope">
          <img :src="scope.row.picUrl" alt class="pic" />
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <!-- 歌手 -->
      <el-table-column label="歌手" width="320">
        <template #default="scope">
          <span
            v-for="(item, index) in scope.row.song.artists"
            class="singer-name"
            v-show="index < 3"
          >
            <span class="singer" @click="toSingerDetail(item.id)">{{ item.name }}</span>
            <span v-show="index < scope.row.song.artists.length - 1"> &nbsp;/&nbsp;</span>
          </span>
        </template>
      </el-table-column>
      <!-- 专辑 -->
      <el-table-column prop="al.name" label="专辑" width="320">
        <template #default="scope">
          <span class="albumName">{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <!-- 时间 -->
      <el-table-column prop="duration" label="时长">
        <template #default="scope">{{ formatMillisecond(scope.row.song.duration) }}</template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default { name: 'new-songs' }
</script>
<script setup>
import { musicStore } from '@/store/music'
import { storeToRefs } from 'pinia'
import { formatMillisecond } from '@/utils/formatMillisecond'
import { useRouter } from 'vue-router'
const router = useRouter()
const store = musicStore()
const { newSongs } = storeToRefs(store) //获取推荐音乐
const toPlayMusic = (row) => {
  store.getSongUrl(row.id)
}
//点击歌手去歌手详情
const toSingerDetail = (id) => {
  router.push({
    path: '/singerDetail',
    query: {
      id
    }
  })
}
</script>
<style scoped lang="less">
.pic {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  vertical-align: -13px;
  margin-right: 14px;
}
span {
  color: black;
}
.play {
  margin-top: 5px;
}
.singer,
.albumName {
  cursor: pointer;
  &:hover {
    color: #6ca5fe;
  }
}
</style>
