<template>
  <img src="@/assets/img/playlist/playlist.jpg" alt="" class="img" />
  <div class="playlist-sort">
    <div
      v-for="(item, index) in titleList"
      :key="index"
      class="cat"
      :class="{ active: activeCat === index }"
      @click="changeCat(item.cat, index)"
    >
      {{ item.cat }}
    </div>
  </div>
  <Playlist :playlists="playlists" />
  <div class="buttom">
    <el-pagination
      background
      layout="prev, pager, next"
      :total="500"
      class="pagination"
      v-model:currentPage="pageNum"
      v-model:page-size="pageSize"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
export default { name: 'PlaylistSort' }
</script>
<script setup>
import { reactive, ref, onMounted } from 'vue'
import { playlistStore } from '@/store/playlist'
import { storeToRefs } from 'pinia'
import Playlist from '@/components/playlist/Playlist.vue'
const store = playlistStore()
const { playlists } = storeToRefs(store)
const activeCat = ref(0)
let pageNum = ref(1)
let pageSize = ref(50)

const titleList = reactive([
  { cat: '全部' },
  { cat: '古风' },
  { cat: '流行' },
  { cat: '民谣' },
  { cat: '古典' },
  { cat: '伤感' },
  { cat: '说唱' },
  { cat: '治愈' },
  { cat: '欧美' },
  { cat: '轻音乐' },
  { cat: '网络歌曲' }
])
const changeCat = (cat, index) => {
  activeCat.value = index
  store.getPlaylistSort(cat)
}
const handleCurrentChange = (newPage) => {
  pageNum.value = newPage
  store.getPlaylistSort({ cat: '全部', offset: newPage })
}
onMounted(() => {
  store.getPlaylistSort({ cat: '全部', offset: 1 })
})
</script>
<style scoped lang="less">
.img {
  margin-left: 15px;
  margin-bottom: 20px;
  width: 1215px;
  border-radius: 8px;
}
.playlist-sort {
  display: flex;
  .cat {
    margin-left: 23px;
    padding: 6px 25px;
    border: 1px solid #e5e5e5;
    border-radius: 15px;
    cursor: pointer;
    &:hover {
      background-color: #f5f5f5;
      color: rgb(64, 182, 228);
    }
  }
  .active {
    background-color: rgb(64, 182, 228);
    color: #fff;
    &:hover {
      background-color: rgb(64, 182, 228);
      color: #fff;
    }
  }
}
.buttom {
  position: relative;
  margin-top: 20px;
  height: 30px;
  .pagination {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
