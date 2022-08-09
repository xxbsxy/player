<template>
  <h3>精彩评论</h3>
  <div v-for="item in comments" :key="item.id" class="comment">
    <div class="left-area">
      <el-avatar :src="item.user.avatarUrl" :size="50"></el-avatar>
    </div>

    <div class="right-area">
      <div class="nickname">{{ item.user.nickname }}</div>
      <div class="time">{{ item.timeStr }}</div>
      <div class="content">{{ item.content }}</div>
      <div class="like">
        <img src="@/assets/img/comment/zan.svg" alt="" />
        <span class="like-count">{{ item.likedCount }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default { name: 'playlist-comment' }
</script>
<script setup>
import { playlistStore } from '@/store/playlist'
import { storeToRefs } from 'pinia'
const store = playlistStore()
const { comments } = storeToRefs(store)
</script>
<style scoped lang="less">
.comment {
  display: flex;

  padding: 20px 0;
  border-bottom: 1px solid rgb(232, 232, 232);
  .right-area {
    margin-left: 20px;
    color: rgb(79, 79, 79);
    .nickname {
      margin-top: 3px;
    }
    .time {
      margin-top: 5px;
    }
    .content {
      margin-top: 20px;
      color: #000;
    }
    .like {
      margin-top: 10px;
      .like-count {
        position: relative;
        bottom: 4px;
        left: 4px;
        color: #000;
      }
    }
  }
}
</style>
