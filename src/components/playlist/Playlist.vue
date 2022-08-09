<template>
  <el-row :gutter="16">
    <el-col
      :span="4.8"
      v-for="item in props.playlists"
      :key="item.id"
      @click="toPlaylistDetail(item.id)"
    >
      <div class="playlist-item">
        <!-- 遮罩层 -->
        <div class="mask"></div>
        <!-- 歌单图片 -->
        <img :src="item.picUrl || item.coverImgUrl" alt class="pic" />
        <!-- 播放次数 -->
        <div class="playCount">
          <img src="@/assets/img/music/music.svg" alt class="music-img" />
          {{ formatPlayCount(item.playCount) }}
        </div>
        <!-- 播放按钮 -->
        <div class="play-icon"></div>
      </div>
      <!-- 歌单名 -->
      <p class="name">{{ item.name }}</p>
    </el-col>
  </el-row>
</template>

<script>
export default { name: 'Playlist' }
</script>
<script setup>
import { formatPlayCount } from '@/utils/formatPlayCount.js'
import { useRouter } from 'vue-router'
const router = useRouter()
const props = defineProps({
  playlists: {
    type: Array,
    default() {
      return []
    }
  }
})
const toPlaylistDetail = (id) => {
  router.push({
    path: '/playlistDetail',
    query: {
      id
    }
  })
}
</script>
<style scoped lang="less">
.playlist-item {
  position: relative;
  margin-top: 20px;
  margin-left: 14px;
  width: 220px;
  height: 210px;
  cursor: pointer;
  transition: all 0.3s ease;
  .mask {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .pic {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
  .playCount {
    position: absolute;
    bottom: 10px;
    right: 15px;
    padding: 0 11px;
    height: 25px;
    line-height: 25px;
    font-size: 13px;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    border-radius: 15px;
    transition: all 0.3s ease;
    .music-img {
      position: relative;
      top: 1px;
    }
  }
  .play-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 56px;
    height: 56px;
    background: url(@/assets/img/music/play.svg) no-repeat center;
    transform: translate(-50%, -50%);
    transition: all 0.3s ease;
    opacity: 0;
    &:hover {
      background: url(@/assets/img/music/play-active.svg) no-repeat center;
    }
  }

  &:hover .playCount {
    opacity: 0;
  }
  &:hover .mask {
    opacity: 1;
  }
  &:hover .play-icon {
    opacity: 1;
  }
  &:hover {
    transform: translateY(-14px);
  }
}
.name {
  margin-left: 14px;
  width: 220px;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  &:hover {
    color: skyblue;
  }
}
</style>
