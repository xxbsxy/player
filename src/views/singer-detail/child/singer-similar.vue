<template>
  <div class="singer-similar">
    <div v-for="item in singerSimilar" class="item">
      <img :src="item.img1v1Url" alt="" @click="toSingerDetail(item.id)" />
      <p>
        <span>{{ item.name }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default { name: 'singer-similar' }
</script>
<script setup>
import { onMounted } from 'vue'
import { singerStore } from '@/store/singer'
import { storeToRefs } from 'pinia'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()

const store = singerStore()
const { singerSimilar } = storeToRefs(store)
const toSingerDetail = (id) => {
  router.push({
    path: '/singerDetail/hotSong',
    query: {
      id
    }
  })
}
onMounted(() => {
  store.getSingerSimilar(route.query.id)
})
</script>
<style scoped lang="less">
.singer-similar {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .item {
    margin-top: 30px;
    &:nth-child(-n + 6) {
      margin-top: 0;
    }
    img {
      width: 180px;
      height: 180px;
      border-radius: 10px;
      cursor: pointer;
    }
    p {
      margin: 0;
      margin-top: 10px;
      margin-left: 2px;
      span {
        cursor: pointer;
      }
    }
  }
}
</style>
