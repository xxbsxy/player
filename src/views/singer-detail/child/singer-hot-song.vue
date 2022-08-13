<template>
  <Songlist :songs="hotSongs" />
</template>

<script>
export default { name: 'singer-hotsong' }
</script>
<script setup>
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import Songlist from '@/components/songlist/Songlist.vue'
import { singerStore } from '@/store/singer'
import { storeToRefs } from 'pinia'
const route = useRoute()
const store = singerStore()
const { hotSongs } = storeToRefs(store)
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
