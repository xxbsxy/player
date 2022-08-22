<template>
  <div class="aside">
    <!-- 导航栏 -->
    <h3 class="title">发现</h3>
    <div v-for="item in title" :key="item.name" class="list-item" @click="toModule(item.url)">
      <img :src="item.imgUrl" alt class="img" />
      {{ item.name }}
    </div>
    <!-- 用户创建的歌单 -->
    <h5>创建的歌单 <span v-if="userPlaylist.length === 0">(登陆查看)</span></h5>
    <div
      v-for="item in userPlaylist"
      :key="item.id"
      @click="toPlayListDetail(item.id)"
      class="user-playlist"
    >
      <img :src="item.coverImgUrl" alt />
      <p>{{ item.name }}</p>
    </div>
  </div>
</template>

<script>
export default { name: 'Aside' }
</script>
<script setup>
import { reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { userStore } from '@/store/user'
import { storeToRefs } from 'pinia'
const store = userStore()
const { userPlaylist } = storeToRefs(store) //用户歌单
const router = useRouter()
const title = reactive([
  {
    name: '乐库',
    url: '/music',
    imgUrl: require('@/assets/img/aside/music.svg')
  },
  {
    name: '视频',
    url: '/video',
    imgUrl: require('@/assets/img/aside/video.svg')
  },

  {
    name: '歌单',
    url: '/playlistSort',
    imgUrl: require('@/assets/img/aside/songList.svg')
  },
  {
    name: '排行榜',
    url: '/rank',
    imgUrl: require('@/assets/img/aside/rank.svg')
  }
])
//点击去相关模块
const toModule = (url) => {
  router.push({
    path: url
  })
}
//点击去用户创建的歌单详情
const toPlayListDetail = (id) => {
  router.push({
    path: '/playlistDetail',
    query: {
      id
    }
  })
}
</script>
<style scoped lang="less">
.aside {
  .list-item {
    margin-left: 20px;
    margin-top: 5px;
    cursor: pointer;
    border-radius: 6px;
    height: 35px;
    line-height: 35px;
    width: 160px;
    .img {
      vertical-align: -4px;
      margin-right: 10px;
      margin-left: 10px;
    }
    &:hover {
      background-color: #dddfe1;
    }
  }
  .user-playlist {
    display: flex;
    margin-left: 20px;
    margin-top: 15px;
    border-radius: 5px;
    width: 165px;
    cursor: pointer;
    &:hover {
      background-color: #dddfe1;
    }
    img {
      width: 35px;
      height: 35px;
      border-radius: 5px;
    }
    p {
      margin: 0;
      margin-left: 10px;
      width: 120px;
      height: 35px;
      line-height: 35px;
      font-size: 14px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  .title {
    margin-left: 30px;
  }
  h5 {
    margin-left: 20px;
    color: #6f6f6f;
  }
}
</style>
