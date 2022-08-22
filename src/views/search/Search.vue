<template>
  <h2>{{ route.query.keyword }}</h2>
  <Tabs />
  <router-view></router-view>
</template>

<script>
export default { name: 'Search' }
</script>
<script setup>
import Tabs from './child/Tabs.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
</script>
<style scoped lang="less"></style>
