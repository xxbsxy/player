<template>
  <MvList :mvs="mvs" />
</template>

<script>
export default { name: 'singer-hot-mv' }
</script>
<script setup>
import { onMounted } from 'vue'
import MvList from '@/components/mvlist/MvList.vue'
import { singerStore } from '@/store/singer'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
const route = useRoute()
const store = singerStore()
const { mvs } = storeToRefs(store)
onMounted(() => {
  store.getHotMv(route.query.id)
})
</script>
<style scoped lang="less"></style>
