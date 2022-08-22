<template>
  <MvList :mvs="mvs" />
</template>

<script>
export default { name: 'search-mv' }
</script>
<script setup>
import { watch } from 'vue'
import MvList from '@/components/mvlist/MvList.vue'
import { searchStore } from '@/store/search'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
const route = useRoute()
const store = searchStore()
const { mvs } = storeToRefs(store)
watch(
  () => route.query.keyword,
  (newvalue) => {
    if (newvalue) {
      store.getSearchResult({ keywords: route.query.keyword, type: 1004, offset: 0 })
    }
  },
  { immediate: true, deep: true }
)
</script>
<style scoped lang="less"></style>
