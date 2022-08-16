<template>
  <div class="user-followeds">
    <h2>{{ route.query.name }}的粉丝</h2>
    <el-row :gutter="20">
      <el-col :span="8" v-for="item in userFolloweds" :key="item.id">
        <div class="item">
          <img :src="item.avatarUrl" alt="" @click="toUserDetail(item.userId)" />
          <div class="right-area">
            <div class="nickname" @click="toUserDetail(item.userId)">{{ item.nickname }}</div>
            <p class="signature">{{ item.signature }}</p>
            <span class="playlist-count"> 歌单: {{ item.playlistCount }}</span>
            <span class="followeds"> 粉丝:{{ item.followeds }}</span>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default { name: 'UserFolloweds' }
</script>
<script setup>
import { onMounted } from 'vue'
import { userStore } from '@/store/user'
import { storeToRefs } from 'pinia'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
const store = userStore()
const { userFolloweds } = storeToRefs(store)
const toUserDetail = (id) => {
  router.push({
    path: '/userDetail',
    query: {
      id
    }
  })
}
onMounted(() => {
  store.getUserFolloweds(route.query.id)
})
</script>
<style scoped lang="less">
.user-followeds {
  .item {
    display: flex;
    margin-top: 20px;
    &:hover {
      background-color: #f9f9f9;
    }
    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      cursor: pointer;
    }
    .right-area {
      margin-left: 20px;
      .signature {
        height: 20px;
        width: 200px;
        font-size: 14px;
        color: rgb(100, 100, 100);
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .nickname {
        margin-top: 20px;
        cursor: pointer;
        &:hover {
          color: rgb(42, 157, 202);
        }
      }
      .playlist-count {
        font-size: 14px;
        color: rgb(100, 100, 100);
      }
      .followeds {
        margin-left: 40px;
        font-size: 14px;
        color: rgb(100, 100, 100);
      }
    }
  }
}
</style>
