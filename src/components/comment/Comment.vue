<template>
  <el-input
    v-model="content"
    :rows="5"
    type="textarea"
    placeholder="期待你的评论"
    maxlength="150"
    show-word-limit
  />
  <div class="comment-btn">
    <el-button @click="publishComment" class="btn">发表评论</el-button>
  </div>

  <h3>精彩评论</h3>
  <div v-for="item in props.comments" :key="item.id" class="comment">
    <div class="left-area">
      <el-avatar
        :src="item.user.avatarUrl"
        :size="50"
        @click="toAlbumDetail(item.user.userId)"
        class="avatar"
      ></el-avatar>
    </div>
    <div class="right-area">
      <div class="nickname" @click="toUserDetail(props.comments.user.userId)">
        {{ item.user.nickname }}
      </div>
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
export default { name: 'Comment' }
</script>
<script setup>
import { ElMessage } from 'element-plus'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
let content = ref('')
const props = defineProps({
  comments: {
    type: Array,
    default() {
      return []
    }
  }
})
const publishComment = () => {
  if (content.value.length === 0) {
    ElMessage.error('内容不能为空哦')
  } else {
    ElMessage.success('评论成功')
    content.value = ''
  }
}
const toUserDetail = (id) => {
  router.push({
    path: '/userDetail',
    query: {
      id
    }
  })
}
</script>
<style scoped lang="less">
.comment-btn {
  position: relative;
  height: 30px;
  .btn {
    position: absolute;
    top: 10px;
    right: 5px;
    border-radius: 18px;
  }
}
.comment {
  display: flex;
  padding: 20px 0;
  border-bottom: 1px solid rgb(232, 232, 232);
  .avatar {
    cursor: pointer;
  }
  .right-area {
    margin-left: 20px;
    color: rgb(79, 79, 79);
    .nickname {
      margin-top: 3px;
      cursor: pointer;
      &:hover {
        color: #000;
      }
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
