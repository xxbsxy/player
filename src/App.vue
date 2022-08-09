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
            <el-footer>Footer</el-footer>
          </el-container>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script>
export default { name: 'App' }
</script>
<script setup>
import Header from './components/header/Header.vue'
import Aside from './components/aside/Aside.vue'
</script>
<style scoped lang="less">
@import './assets/css/base.css';
@import './assets/css/globe.css';
.app {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #edeef3;
  .container {
    width: 1500px;
    height: 820px;
    background-color: #fff;
    border-radius: 40px;
  }
}
</style>
