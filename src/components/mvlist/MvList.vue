<template>
  <el-row :gutter="20">
    <el-col :span="8" v-for="item in prop.mvs" :key="item.id">
      <div class="mv-list">
        <!-- mv图片 -->
        <img :src="item.cover || item.imgurl16v9" alt class="img" @click="toMvDetail(item.id)" />
        <!-- 播放按钮 -->
        <div class="play-icon"></div>
      </div>
      <!-- mv名称 -->
      <p>{{ item.name }}</p>
    </el-col>
  </el-row>
</template>

<script>
export default { name: 'MvList' }
</script>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const prop = defineProps({
  mvs: {
    type: Array,
    default() {
      return []
    }
  }
})
const toMvDetail = (id) => {
  router.push({
    path: '/mvDetail',
    query: {
      id
    }
  })
}
</script>
<style scoped lang="less">
.mv-list {
  position: relative;
  margin-left: 5px;
  width: 390px;
  height: 219px;
  cursor: pointer;
  .img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    border: 5px solid rgb(247, 247, 247);
    transition: all 0.3s ease;
  }
  .play-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 56px;
    height: 56px;
    background: url(@/assets/img/music/play.svg) no-repeat center;
    transform: translate(-50%, -50%);
    transition: all 0.3s ease;
    opacity: 0;
    &:hover {
      background: url(@/assets/img/music/play-active.svg) no-repeat center;
    }
  }

  &:hover .img {
    transform: scale(1.02);
    border: 5px solid transparent;
  }
  &:hover .play-icon {
    opacity: 1;
  }
}

p {
  width: 390px;
  text-align: center;
  margin-top: 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
