<template>
  <div class="banner">
    <el-carousel :interval="4000" type="card" height="220px">
      <el-carousel-item v-for="item in banners" :key="item.targetId">
        <img :src="item.imageUrl" alt="" class="img" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default { name: 'Banner' }
</script>
<script setup>
import { onMounted } from 'vue'
import { bannerStore } from '@/store/banner'
import { storeToRefs } from 'pinia'
const store = bannerStore()
const { banners } = storeToRefs(store)
onMounted(() => {
  store.getBanners()
})
</script>
<style scoped lang="less">
.banner {
  .img {
    margin-left: 40px;
    width: 550px;
    height: 220px;
    border-radius: 5px;
  }
}
</style>
