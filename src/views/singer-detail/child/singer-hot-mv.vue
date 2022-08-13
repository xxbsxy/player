<template>
  <MvList :mvs="mvs" />
</template>

<script>
export default { name: 'singer-hot-mv' }
</script>
<script setup>
import MvList from '@/components/mvlist/MvList.vue'
import { singerStore } from '@/store/singer'
import { storeToRefs } from 'pinia'
const store = singerStore()
const { mvs } = storeToRefs(store)
</script>
<style scoped lang="less"></style>
