<template>
  <Songlist :songs="songs" />
</template>

<script>
export default { name: 'search-song' }
</script>
<script setup>
import Songlist from '@/components/songlist/Songlist.vue'
import { searchStore } from '@/store/search'
import { storeToRefs } from 'pinia'
const store = searchStore()
const { songs } = storeToRefs(store)
</script>
<style scoped lang="less"></style>
