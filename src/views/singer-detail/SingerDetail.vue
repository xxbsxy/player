<template>
  <singer-description></singer-description>
  <Tabs />
</template>

<script>
export default { name: 'SingerDetail' }
</script>
<script setup>
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import SingerDescription from './child/singer-description'
import Tabs from './child/Tabs.vue'
import { singerStore } from '@/store/singer'
import { storeToRefs } from 'pinia'
const store = singerStore()
const route = useRoute()
watch(
  () => route.query.id,
  (newvalue) => {
    if (newvalue) {
      store.getSingerDescription(newvalue)
    }
  },
  { immediate: true, deep: true }
)
</script>
<style scoped lang="less"></style>
