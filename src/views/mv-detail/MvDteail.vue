<template>
  <div class="mv-detail">
    <div class="left-area">
      <h3>视频详情</h3>
      <video :src="mvUrl" controls></video>
      <p>
        <span class="mv-name">{{ mvDetail.name }}</span> - {{ mvDetail.artistName }}
      </p>
      <p class="detail">
        发布时间: <span class="publish-time">{{ mvDetail.publishTime }}</span> 播放次数:
        {{ formatPlayCount(mvDetail.playCount) }}
      </p>
      <Comment :comments="mvComments" />
    </div>
    <div class="right-area">
      <h3>相关推荐</h3>
      <div v-for="item in mvSimilar" :key="item.id" class="item">
        <img :src="item.cover" alt="" @click="toMvDetail(item.id)" />
        <div>
          <p class="similar-mv-name">{{ item.name }}</p>
          <p class="artist-name">{{ item.artistName }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default { name: 'MvDteail' }
</script>
<script setup>
import Comment from '@/components/comment/Comment'
import { onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { videoStore } from '@/store/video'
import { storeToRefs } from 'pinia'
import { formatPlayCount } from '@/utils/formatPlayCount.js'
const route = useRoute()
const router = useRouter()
const store = videoStore()
const { mvUrl, mvDetail, mvComments, mvSimilar } = storeToRefs(store)
const toMvDetail = (id) => {
  router.push({
    path: '/mvDetail',
    query: {
      id
    }
  })
}
watch(
  () => route.query.id,
  (newvalue) => {
    if (newvalue && route.path === '/mvDetail') {
      store.getMvUrl(newvalue)
      store.getMvDetail(newvalue)
      store.getMvComment(newvalue)
      store.getMvSimilar(newvalue)
    }
  },
  { immediate: true, deep: true }
)
</script>
<style scoped lang="less">
.mv-detail {
  display: flex;
  .left-area {
    width: 900px;
    video {
      margin: 0;
      margin-top: 20px;
      width: 900px;
    }
    .mv-name {
      font-size: 20px;
      font-weight: 600;
    }
    h3 {
      margin: 0;
    }
    .detail {
      margin-top: 25px;
      margin-bottom: 30px;
      .publish-time {
        margin-right: 20px;
      }
    }
  }
  .right-area {
    flex: 1;
    margin-left: 40px;
    h3 {
      margin: 0;
      margin-bottom: 20px;
    }
    .item {
      display: flex;
      margin-top: 20px;
      img {
        width: 170px;
        border-radius: 8px;
        cursor: pointer;
      }
    }
    p {
      margin: 0;
    }
    .similar-mv-name {
      margin-left: 5px;
      margin-top: 10px;
      width: 150px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .artist-name {
      margin-left: 5px;
      margin-top: 40px;
      font-size: 14px;
      color: rgb(110, 110, 110);
    }
  }
}
</style>
