<template>
  <mv-list :mvs="recommendMv" />
</template>

<script>
export default { name: 'recommend-mv' }
</script>
<script setup>
import { onMounted } from 'vue'
import { musicStore } from '@/store/music'
import { storeToRefs } from 'pinia'
import MvList from '@/components/mvlist/MvList.vue'
const store = musicStore()
const { recommendMv } = storeToRefs(store) //获取推荐mv
onMounted(() => {
  store.getRecommendMv()
})
</script>
<style scoped lang="less"></style>
