<template>
  <div class="type">
    <h5>类型：</h5>
    <div
      v-for="(item, index) in type"
      class="item"
      @click="sendTypeRequest(index)"
      :class="{ active: index === typeIndex }"
    >
      {{ item }}
    </div>
  </div>
  <div class="area">
    <h5>地区：</h5>
    <div
      v-for="(item, index) in area"
      class="item"
      @click="sendAreaRequest(index)"
      :class="{ active: index === areaIndex }"
    >
      {{ item }}
    </div>
  </div>
  <div class="order">
    <h5>排序：</h5>
    <div
      v-for="(item, index) in order"
      class="item"
      @click="sendOrderRequest(index)"
      :class="{ active: index === orderIndex }"
    >
      {{ item }}
    </div>
  </div>
  <MvList :mvs="mvs" />
</template>

<script>
export default { name: 'Video' }
</script>
<script setup>
import MvList from '@/components/mvlist/MvList.vue'
import { onMounted, reactive, ref } from 'vue'
import { videoStore } from '@/store/video'
import { storeToRefs } from 'pinia'
const store = videoStore()
const { mvs } = storeToRefs(store)
const area = reactive(['全部', '内地', '港台', '欧美', '日本', '韩国'])
const type = reactive(['全部', '官方版', '现场版', '网易出品'])
const order = reactive(['上升最快', '最热', '最新'])
let areaIndex = ref(0)
let typeIndex = ref(0)
let orderIndex = ref(0)

const sendTypeRequest = (index) => {
  typeIndex.value = index
  store.getMvAll({
    area: area[areaIndex.value],
    type: type[typeIndex.value],
    order: order[orderIndex.value]
  })
}
const sendAreaRequest = (index) => {
  areaIndex.value = index
  store.getMvAll({
    area: area[areaIndex.value],
    type: type[typeIndex.value],
    order: order[orderIndex.value]
  })
}
const sendOrderRequest = (index) => {
  orderIndex.value = index
  store.getMvAll({
    area: area[areaIndex.value],
    type: type[typeIndex.value],
    order: order[orderIndex.value]
  })
}
onMounted(() => {
  store.getMvAll()
})
</script>
<style scoped lang="less">
.type,
.area,
.order {
  display: flex;
  h5 {
    margin: 0;
    padding: 0;
  }
  .item {
    margin-left: 20px;
    padding: 3px 12px;
    border-radius: 10px;
    color: rgb(73, 73, 73);
    cursor: pointer;
    &:hover {
      color: rgb(14, 14, 14);
    }
  }
  .active {
    background-color: #fcebeb;
    color: rgb(175, 41, 41);
  }
}
</style>
