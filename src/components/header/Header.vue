<template>
  <div class="header">
    <!-- logo -->
    <div>
      <img src="@/assets/img/header/vae.jpg" alt class="img" />
    </div>
    <!-- 前进后退 -->
    <div class="icons">
      <ArrowLeftBold
        style="width: 1em; height: 1em; margin-right: 16px"
        class="left"
        @click="back"
      />
      <ArrowRightBold
        style="width: 1em; height: 1em; margin-right: 8px"
        class="right"
        @click="go"
      />
    </div>
    <!-- 搜素音乐 -->
    <div>
      <input
        type="text"
        placeholder="搜素音乐"
        class="search"
        v-model="keyword"
        @keyup.enter="toSearch"
      />
    </div>
    <!-- 登录 -->
    <div class="login" >
      <span v-if="!profile" @click="dialogVisible = true">登录</span>
      <div v-if="profile">
        <el-avatar :src="profile.avatarUrl"></el-avatar>
        <span class="nickname">{{ profile.nickname }}</span>
      </div>
    </div>
    <!-- 登录对话框 -->
    <el-dialog v-model="dialogVisible" title="登录" width="30%">
      <el-form ref="ruleFormRef" label-width="60px" class="demo-ruleForm" :model="accountForm">
        <el-form-item label="手机号">
          <el-input v-model="accountForm.phone" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="accountForm.password" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="login">确认</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default { name: 'Header' }
</script>
<script setup>
import { ref, reactive } from 'vue'
import { ArrowLeftBold, ArrowRightBold } from '@element-plus/icons-vue'
import { ElMessageBox } from 'element-plus'
import { userStore } from '@/store/user'
import { storeToRefs } from 'pinia'
import { getUserMessages } from '../../api/user'
import { useRouter } from 'vue-router'
const router = useRouter()
const store = userStore()
const { profile } = storeToRefs(store) //用户信息
let dialogVisible = ref(false) //控制对话框的显示与隐藏
let keyword = ref('') //搜素内容
const accountForm = reactive({
  phone: '15905876135',
  password: '1808298593'
})
//点击确定进行登录操作
const login = () => {
  store.getUserMessages(accountForm)
  dialogVisible.value = false
}
//按下回车进行搜素
const toSearch = () => {
  router.push({
    path: '/search',
    query: {
      keyword: keyword.value
    }
  })
}
//前进后退
const back = () => {
  router.back()
}
const go = () => {
  router.go(1)
}
</script>
<style scoped lang="less">
.header {
  display: flex;
  align-items: center;
  height: 100%;
  .img {
    width: 30px;
    height: 30px;
    border-radius: 5px;
  }
  .icons {
    margin-left: 160px;
    .left,
    .right {
      cursor: pointer;
    }
  }
  .search {
    margin-left: 200px;
    padding-left: 55px;
    width: 250px;
    height: 32px;
    outline: none;
    background-color: rgb(244, 244, 244);
    background-image: url(@/assets/img/header/search.svg);
    background-repeat: no-repeat;
    background-position: 20px 5px;
    border: transparent;
    border-radius: 20px;
  }
  .login {
    margin-left: 500px;
    cursor: pointer;
    .nickname {
      position: relative;
      left: 7px;
      bottom: 12px;
    }
  }
}
</style>
