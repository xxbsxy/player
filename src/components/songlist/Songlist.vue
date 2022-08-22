<template>
  <!-- 播放列表 -->
  <el-table :data="props.songs" style="width: 100%" @cell-dblclick="toPlayMusic">
    <!-- 歌曲名 -->
    <el-table-column prop="name" label="歌曲名" width="460">
      <template #default="scope">
        <img :src="scope.row.al.picUrl" alt class="pic" v-show="props.imgShow" />
        <span>{{ scope.row.name }}</span>
      </template>
    </el-table-column>
    <!-- 歌手 -->
    <el-table-column label="歌手" width="320">
      <template #default="scope">
        <p class="singer-colunm">
          <span v-for="(item, index) in scope.row.ar">
            <span class="singer" @click="toSingerDetail(item.id)">{{ item.name }}</span>
            <span v-show="index < scope.row.ar.length - 1">&nbsp;/&nbsp;</span>
          </span>
        </p>
      </template>
    </el-table-column>
    <!-- 专辑 -->
    <el-table-column prop="al.name" label="专辑" width="320">
      <template #default="scope">
        <span class="albumName" @click="toAlbumDetail(scope.row.al.id)">{{
          scope.row.al.name
        }}</span>
      </template>
    </el-table-column>
    <!-- 时间 -->
    <el-table-column prop="duration" label="时长">
      <template #default="scope">{{ formatMillisecond(scope.row.dt) }}</template>
    </el-table-column>
  </el-table>
</template>

<script>
export default { name: 'PlayList' }
</script>
<script setup>
import { footerStore } from '@/store/footer'
import { storeToRefs } from 'pinia'
import { formatMillisecond } from '@/utils/formatMillisecond'
import { useRouter } from 'vue-router'
const router = useRouter()
const store = footerStore()
const props = defineProps({
  songs: {
    type: Array,
    default() {
      return []
    }
  },
  imgShow: {
    type: Boolean,
    default: true
  }
})
//点击歌手去歌手详情
const toSingerDetail = (id) => {
  router.push({
    path: '/singerDetail',
    query: {
      id
    }
  })
}
//点击专辑详情
const toAlbumDetail = (id) => {
  router.push({
    path: '/albumDetail',
    query: {
      id
    }
  })
}
//双击播放音乐
const toPlayMusic = (row) => {
  store.getSongUrl(row.id)
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
.singer-colunm {
  width: 230px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
