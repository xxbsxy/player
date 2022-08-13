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
import { onMounted } from 'vue'
import MvList from '@/components/mvlist/MvList.vue'
import { singerStore } from '@/store/singer'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
const route = useRoute()
const store = singerStore()
const { singerIntroduce } = storeToRefs(store)
onMounted(() => {
  store.getSingerIntroduce(route.query.id)
})
</script>
<style scoped lang="less">
.singer-introduce {
  padding: 0 10px;
  p {
    color: rgb(96, 96, 96);
  }
}
</style>
