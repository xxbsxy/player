<template>
  <div class="music">
    <Banner />
    <Tabs />
  </div>
</template>

<script>
export default { name: 'Music' }
import Banner from '@/components/banner/Banner.vue'
</script>
<script setup>
import Tabs from './child/Tabs.vue'
import { onMounted } from 'vue'
import { musicStore } from '@/store/music'
import { storeToRefs } from 'pinia'
const store = musicStore()
onMounted(() => {
  store.getHomeMusic()
})
</script>
<style scoped lang="less"></style>
