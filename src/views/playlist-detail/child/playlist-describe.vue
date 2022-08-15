<template>
  <div class="playlist-describe" v-if="playlistDetail">
    <div class="left-area">
      <img :src="playlistDetail.coverImgUrl" alt="" class="cover-img" />
    </div>
    <div class="right-area">
      <!-- 歌单名称 -->
      <h2>{{ playlistDetail.name }}</h2>
      <!-- 歌单创建者 -->
      <div class="creator-detail">
        <el-avatar :src="playlistDetail.creator.avatarUrl" :size="32"></el-avatar>
        <span class="nickname">{{ playlistDetail.creator.nickname }}</span>
        <span class="update-time">{{ formatTimeStamp(playlistDetail.updateTime) }} 创建</span>
      </div>
      <div class="tabs">
        <span>标签:</span>
        <span v-for="item in playlistDetail.tags" :key="item" class="tabs-item">#{{ item }}</span>
      </div>
      <div class="song">
        <span>歌曲 :&nbsp;</span>
        <span>{{ playlistDetail.trackCount }}首</span>
        <span class="play">播放 : &nbsp;</span>
        <span class="playCount">{{ formatPlayCount(playlistDetail.playCount) }}</span>
      </div>
      <div class="description">
        <p>
          简介 : <span class="des">{{ playlistDetail.description }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default { name: 'playlist-describe' }
</script>
<script setup>
import { watch } from 'vue'
import { playlistStore } from '@/store/playlist'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
import { formatTimeStamp } from '@/utils/formatTimeStamp'
import { formatPlayCount } from '@/utils/formatPlayCount'
const route = useRoute()
const store = playlistStore()
const { playlistDetail } = storeToRefs(store)
watch(
  () => route.query.id,
  (newvalue) => {
    if (newvalue) {
      store.getPlaylistDetail(newvalue)
    }
  },
  { immediate: true, deep: true }
)
</script>
<style scoped lang="less">
.playlist-describe {
  display: flex;
  .left-area {
    margin-left: 10px;
    .cover-img {
      width: 220px;
      height: 220px;
      border-radius: 10px;
    }
  }
  .right-area {
    margin-left: 20px;
    h2 {
      margin: 0;
    }
    .creator-detail {
      margin-top: 15px;
      .nickname {
        position: relative;
        left: 10px;
        bottom: 12px;
        font-size: 14px;
        color: #5091ca;
      }
      .update-time {
        position: relative;
        left: 30px;
        bottom: 12px;
        font-size: 12px;
        color: #818181;
      }
    }
    .tabs {
      margin-top: 20px;
      .tabs-item {
        margin-left: 10px;
        color: #520ea5;
      }
    }
    .song {
      margin-top: 17px;
      .play {
        margin-left: 20px;
      }
    }
    .description {
      margin-top: 17px;
      p {
        margin: 0;
        line-height: 25px;
        height: 50px;
        overflow: hidden;
        .des {
          color: rgb(78, 78, 78);
        }
      }
    }
  }
}
</style>
