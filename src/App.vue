<template>
  <div class="app">
    <div class="container">
      <el-container>
        <!-- 头部区域 -->
        <el-header>
          <Header />
        </el-header>
        <el-container>
          <!-- 侧边栏区域 -->
          <el-aside>
            <Aside />
          </el-aside>
          <el-container>
            <!-- 主体区域 -->
            <el-main>
              <router-view></router-view>
            </el-main>
            <!-- 尾部区域 -->
            <el-footer>
              <Footer />
            </el-footer>
          </el-container>
        </el-container>
      </el-container>
    </div>
    <div class="draewer" ref="draewer" v-show="isPlaylistQueue"></div>
    <play-queue />
  </div>
</template>

<script>
export default { name: 'App' }
</script>
<script setup>
import PlayQueue from './components/play-queue/PlayQueue.vue'
import Header from './components/header/Header.vue'
import Aside from './components/aside/Aside.vue'
import Footer from './components/footer/Footer.vue'
import { footerStore } from '@/store/footer'
import { storeToRefs } from 'pinia'
const store = footerStore()
const { isPlaylistQueue } = storeToRefs(store)
</script>
<style scoped lang="less">
@import './assets/css/base.css';
@import './assets/css/globe.css';
.app {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: #edeef3;
  .container {
    position: relative;
    width: 1500px;
    height: 820px;
    background-color: #fff;
    border-radius: 30px;
  }
}
</style>
