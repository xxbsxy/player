<template>
  <h2>{{ route.query.keyword }}</h2>
  <Tabs />
  <router-view></router-view>
</template>

<script>
export default { name: 'Search' }
</script>
<script setup>
import { onMounted } from 'vue'
import Tabs from './child/Tabs.vue'
import { searchStore } from '@/store/search'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
const route = useRoute()
const store = searchStore()
// const {} = storeToRefs(store)
onMounted(() => {
  store.getSearchResult({ keywords: route.query.keyword, type: 1 })
})
</script>
<style scoped lang="less"></style>
