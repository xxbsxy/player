<template>
  <div class="header">
    <!-- logo -->
    <div>
      <img src="@/assets/img/header/vae.jpg" alt class="vae" />
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
    <div class="login">
      <span v-if="!profile" @click="loginDialogVisible = true">登录</span>
      <div v-if="profile">
        <el-dropdown>
          <div>
            <el-avatar :src="profile.avatarUrl"></el-avatar>
            <span class="nickname">{{ profile.nickname }}</span>
          </div>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="toUserDetail(profile.userId)">个人中心</el-dropdown-item>
              <el-dropdown-item @click="Logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
    <!-- 登录对话框 -->
    <el-dialog v-model="loginDialogVisible" width="22%">
      <div class="login-dialog">
        <div class="content">
          <img src="@/assets/img/header/mobile.svg" alt="" class="img" />
          <el-form
            :model="accountForm"
            :rules="accountFormRules"
            ref="accountFormRef"
            v-if="isLoginFromPhone"
          >
            <el-form-item prop="phone">
              <el-input
                v-model="accountForm.phone"
                placeholder="请输入手机号"
                :prefix-icon="Iphone"
              ></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                v-model="accountForm.password"
                placeholder="请输入密码"
                type="password"
                :prefix-icon="Lock"
              ></el-input>
            </el-form-item>
          </el-form>
          <el-form
            :model="captchaForm"
            :rules="captchaFormRules"
            ref="captchaFormRef"
            v-if="!isLoginFromPhone"
          >
            <el-form-item prop="phone">
              <el-input
                v-model="captchaForm.phone"
                placeholder="请输入手机号"
                :prefix-icon="Iphone"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <div class="yzm">
                <el-input v-model="captchaForm.captcha" placeholder="请输入验证码"></el-input>
                <el-button type="primary" class="yzm-btn" @click="getCaptcha" v-if="isShowCaptcha"
                  >获取验证码</el-button
                >
                <el-button
                  type="info"
                  class="yzm-btn"
                  @click="getCaptcha"
                  disabled
                  plain
                  v-if="!isShowCaptcha"
                  >{{ captchaTime }}</el-button
                >
              </div>
            </el-form-item>
          </el-form>
        </div>
      </div>

      <template #footer>
        <div class="footer-dialog">
          <el-button @click="login" class="btn">登录</el-button>

          <el-link
            type="primary"
            @click="isLoginFromPhone = !isLoginFromPhone"
            v-if="!isLoginFromPhone"
            >密码登录</el-link
          >
          <el-link
            type="primary"
            @click="isLoginFromPhone = !isLoginFromPhone"
            v-if="isLoginFromPhone"
            >返回验证码登录</el-link
          >
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default { name: 'Header' }
</script>
<script setup>
import { ref, reactive } from 'vue'
import { ArrowLeftBold, ArrowRightBold, Iphone, Lock } from '@element-plus/icons-vue'
import { ElMessageBox, ElMessage } from 'element-plus'
import { userStore } from '@/store/user'
import { storeToRefs } from 'pinia'
import { getUserMessages } from '@/api/user'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
const store = userStore()
const { profile, loginDialogVisible } = storeToRefs(store) //用户信息
const accountFormRef = ref()
const captchaFormRef = ref()
let dialogVisible = ref(false) //控制对话框的显示与隐藏
let isShowCaptcha = ref(true) //发送验证按钮是否可以点击
let captchaTime = ref(60) //验证码时间
let keyword = ref('') //搜素内容
let isLoginFromPhone = ref(false) //登录与注册切换
const captchaRef = ref() //获取验证码按钮
let timer = ref('') //保存定时器
const accountForm = reactive({
  phone: '',
  password: ''
})
const captchaForm = reactive({
  phone: '',
  captcha: ''
})
const accountFormRules = reactive({
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 18, message: '密码应该在6-18位之间', trigger: 'blur' }
  ],
  phone: [
    { required: true, message: '请输入手机号码', trigger: 'blur' },
    { min: 11, max: 11, message: '请输入11位手机号码', trigger: 'blur' },
    {
      pattern: /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/,
      message: '请输入正确的手机号码',
      trigger: 'blur'
    }
  ]
})
const captchaFormRules = reactive({
  phone: [
    { required: true, message: '请输入手机号码', trigger: 'blur' },
    { min: 11, max: 11, message: '请输入11位手机号码', trigger: 'blur' },
    {
      pattern: /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/,
      message: '请输入正确的手机号码',
      trigger: 'blur'
    }
  ]
})
//点击确定进行登录操作
const login = () => {
  if (isLoginFromPhone.value) {
    accountFormRef.value.validate((isVaildate) => {
      if (isVaildate) {
        store.getUserMessages(accountForm)
      }
    })
  } else {
    captchaFormRef.value.validate((isVaildate) => {
      if (isVaildate) {
        store.captchaLogin(captchaForm)
      }
    })
  }
}
//获取验证码
const getCaptcha = () => {
  captchaFormRef.value.validate((isVisible) => {
    if (isVisible) {
      isShowCaptcha.value = false
      timer.value = setInterval(() => {
        desTime()
      }, 1000)
      store.getCaptcha(captchaForm.phone)
    } else {
      ElMessage.error('请输入正确的手机号码')
    }
  })
}
//获取验证码倒计时
const desTime = () => {
  captchaTime.value = captchaTime.value - 1
  if (captchaTime.value < 0) {
    clearInterval(timer.value)
    isShowCaptcha.value = true
    captchaTime.value = 60
  }
}
//退出登录
const Logout = () => {
  store.UserLogout()
}
//按下回车进行搜素
const toSearch = () => {
  if (route.path.includes('search')) {
    router.push({
      path: route.path,
      query: {
        keyword: keyword.value
      }
    })
  } else {
    router.push({
      path: '/search',
      query: {
        keyword: keyword.value
      }
    })
  }
}
//点击去用户详情
const toUserDetail = (id) => {
  router.push({
    path: '/userDetail',
    query: {
      id
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
  .vae {
    margin-left: 10px;
    width: 35px;
    height: 35px;
    border-radius: 5px;
  }
  .icons {
    margin-left: 150px;
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
      display: inline-block;
      left: 7px;
      bottom: 12px;
      width: 120px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  .login-dialog {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    .content {
      width: 203px;
    }
    .img {
      margin-bottom: 20px;
      margin-left: 30px;
    }
  }
  .footer-dialog {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 20px;
    text-align: center;
    .btn {
      width: 205px;
    }
    .el-link {
      margin-top: 15px;
    }
  }
  .yzm {
    display: flex;
    .yzm-btn {
      width: 80px;
      margin-left: 10px;
    }
  }
}
</style>
