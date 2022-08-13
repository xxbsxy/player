<template>
  <div class="singer-description">
    <div class="left-area">
      <img :src="singer.img1v1Url" alt="" />
    </div>
    <div class="right-area">
      <h2>{{ singer.name }}</h2>
      <div class="singer-size">
        <span>单曲数: {{ singer.musicSize }}</span>
        <span>专辑数: {{ singer.albumSize }}</span>
        <span>MV数: {{ singer.mvSize }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default { name: 'singer-description' }
</script>
<script setup>
import { onMounted } from 'vue'
import { singerStore } from '@/store/singer'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
const route = useRoute()
const store = singerStore()
const { singer } = storeToRefs(store)
</script>
<style scoped lang="less">
.singer-description {
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
      margin-top: 50px;
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
