<template>
  <div class="music">
    <Banner />
    <Tabs />
    <router-view></router-view>
  </div>
</template>

<script>
export default { name: 'Music' }
import Banner from '@/components/banner/Banner.vue'
</script>
<script setup>
import Tabs from './child/Tabs.vue'
</script>
<style scoped lang="less"></style>
