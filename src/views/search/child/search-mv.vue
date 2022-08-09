<template>
  <MvList :mvs="mvs" />
</template>

<script>
export default { name: 'search-mv' }
</script>
<script setup>
import MvList from '@/components/mvlist/MvList.vue'
import { searchStore } from '@/store/search'
import { storeToRefs } from 'pinia'
const store = searchStore()
const { mvs } = storeToRefs(store)
</script>
<style scoped lang="less"></style>
