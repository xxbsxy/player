<template>
  <div class="album-description">
    <div class="left-area">
      <img :src="albumDetail.picUrl" alt="" />
    </div>
    <div class="right-area">
      <h2>{{ albumDetail.name }}</h2>
      <p>歌手:{{ albumDetail.artist.name }}</p>
      时间: {{ formatTimeStamp(albumDetail.publishTime) }}
    </div>
  </div>
</template>

<script>
export default { name: 'album-description' }
</script>
<script setup>
import { onMounted } from 'vue'
import { albumStore } from '@/store/album'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
import { formatTimeStamp } from '@/utils/formatTimeStamp'
const route = useRoute()
const store = albumStore()
const { albumDetail } = storeToRefs(store)
onMounted(() => {
  store.getAlbumDetail(route.query.id)
  store.getAlbumComment(route.query.id)
})
</script>
<style scoped lang="less">
.album-description {
  display: flex;
  .left-area {
    img {
      width: 200px;
      height: 200px;
      border-radius: 15px;
    }
  }
  .right-area {
    margin-left: 20px;
    .singer-size {
      margin-top: 20px;
      span {
        margin-left: 20px;
        &:nth-child(1) {
          margin-left: 0;
        }
      }
    }
  }
}
</style>
