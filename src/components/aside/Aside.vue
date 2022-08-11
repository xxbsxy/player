<template>
  <div class="aside">
    <h3 class="title">发现</h3>
    <div v-for="item in title" :key="item.name" class="list-item" @click="toModule(item.url)">
      <img :src="item.imgUrl" alt class="img" />
      {{ item.name }}
    </div>
  </div>
</template>

<script>
export default { name: 'Aside' }
</script>
<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
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
const toModule = (url) => {
  router.push({
    path: url
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
  .title {
    margin-left: 30px;
  }
}
</style>
