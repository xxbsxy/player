<template>
  <singer-description></singer-description>
  <Tabs />
  <router-view></router-view>
</template>

<script>
export default { name: 'SingerDetail' }
</script>
<script setup>
import SingerDescription from './child/singer-description'
import Tabs from './child/Tabs.vue'
</script>
<style scoped lang="less"></style>
