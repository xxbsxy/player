<template>
  <div class="singer-introduce">
    <h3>歌手简介</h3>
    <p>{{ singerIntroduce.briefDesc }}</p>
    <div v-for="(item, index) in singerIntroduce.introduction" :key="index">
      <h3>{{ item.ti }}</h3>
      <p v-html="item.txt" style="white-space: pre-wrap"></p>
    </div>
  </div>
</template>

<script>
export default { name: 'singer-introduce' }
</script>
<script setup>
import MvList from '@/components/mvlist/MvList.vue'
import { singerStore } from '@/store/singer'
import { storeToRefs } from 'pinia'
const store = singerStore()
const { singerIntroduce } = storeToRefs(store)
</script>
<style scoped lang="less">
.singer-introduce {
  padding: 0 10px;
  p {
    color: rgb(96, 96, 96);
  }
}
</style>
