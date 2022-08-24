<template>
  <div class="beautiful">
    <h2>主题</h2>
    <el-row :gutter="30">
      <el-col :span="5" v-for="(item, index) in beautifulList" :key="index">
        <div class="a" @click="changeBC($event, index)" :style="{ backgroundColor: item.color }">
          <img src="@/assets/img/beauiful.svg" alt="" class="img" v-if="index === activeIndex" />
        </div>
        <p class="title">{{ item.title }}</p>
      </el-col>
    </el-row>
    <span class="demonstration">自定义颜色</span>
    <el-color-picker v-model="color" show-alpha @change="colorChange" class="picker" />
    <p class="des">Copyright © 2013 by Perchouli Shanzhai to Nipponcolors</p>
    <p class="buttom">
      参看: 色谱 中科院科技情报编委会名词室.科学出版社,1957. Adobe RGB / CMYK FOGRA39, Dot Gain 15%
      Screenshot沪ICP备17025116号-2
    </p>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
export default { name: 'Beautiful' }
</script>
<script setup>
const beautifulList = reactive([
  { title: '默认色', color: '#dde2eb' },
  { title: '太阳橙', color: '#f08d01' },
  { title: '山茶粉', color: '#e9617b' },
  { title: '宝石红', color: '#c80851' },
  { title: '落叶黄', color: '#e6a201' },
  { title: '翡翠绿', color: '#14ae66' },
  { title: '孔雀蓝', color: '#00a4c5' },
  { title: '水晶紫', color: '#7f4985' },
  { title: '天青色', color: '#87c5ec' },
  { title: '靛青色', color: '#022e5b' },
  { title: '满江红', color: '#e92b77' },
  { title: '松霜绿', color: '#82a68c' },
  { title: '豆汁黄', color: '#f5e6bf' },
  { title: '玫瑰灰', color: '#4a2d2a' },
  { title: '风信紫', color: '#c4a9c0' }
])
const activeIndex = ref(0)
const color = ref('#409EFF')
const changeBC = (e, index) => {
  document.body.style.setProperty('--bc', e.target.style.backgroundColor)
  activeIndex.value = index
}
const colorChange = () => {
  document.body.style.setProperty('--bc', color.value)
  activeIndex.value = -1
}
</script>
<style scoped lang="less">
.beautiful {
  position: relative;
  .a {
    position: relative;
    width: 100%;
    height: 120px;
    border-radius: 6px;
    cursor: pointer;
    &:hover {
      transform: scale(1.01);
    }
    .img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .title {
    text-align: center;
  }
  .demonstration {
    margin-right: 10px;
  }
  .des {
    margin: 0;
    margin-top: 35px;
    color: rgb(107, 107, 107);
  }
  .buttom {
    margin: 0;
    margin-top: 5px;
    color: rgb(107, 107, 107);
  }
}
</style>
