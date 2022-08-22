import { defineStore } from 'pinia'
import { getUserMessages, getUserSongList, getUserDetail, getUserAccount, loginRefresh, loginStatus, UserLogout, getUserFolloweds, getUserFollows, captchaLogin, getCaptcha } from '@/api/user';
import { ElMessage } from 'element-plus'
export const userStore = defineStore('user', {
	persist: true,
	state: () => {
		return {
			profile: null,
			userPlaylist: [],
			otherProfile: null,
			otherPlaylist: [],
			userFolloweds: [],
			userFollows: [],
			loginDialogVisible: false
		}
	},
	actions: {
		async getUserMessages(account) {
			const res = await getUserMessages(account)
			this.profile = res.profile
			if (res.code === 200) {
				ElMessage.success('登录成功')
				const res1 = await getUserSongList(this.profile.userId)
				this.userPlaylist = res1.playlist
				this.loginDialogVisible = false
			} else {
				ElMessage.error('账号或密码错误')
				this.loginDialogVisible = true
			}
		},
		async getUserDetail(id) {
			const res = await getUserDetail(id)
			this.otherProfile = res.profile
		},
		async getUserSongList(id) {
			const res = await getUserSongList(id)
			this.otherPlaylist = res.playlist
		},
		async UserLogout() {
			const res = await UserLogout()
			if (res.code === 200) {
				ElMessage.success('退出登录成功')
				this.profile = null,
					this.userPlaylist = []
			}
			else {
				ElMessage.error('退出登录失败')
			}
		},
		async getUserFolloweds(id) {
			const res = await getUserFolloweds(id)
			this.userFolloweds = res.followeds
		},
		async getUserFollows(id) {
			const res = await getUserFollows(id)
			this.userFollows = res.follow
		},
		//发送验证码
		async getCaptcha(phone) {
			const res = await getCaptcha(phone)
			if (res.code === 200) {
				ElMessage.success('发送验证码成功')
			} else {
				ElMessage.error('发送验证码失败')
			}
		},
		async captchaLogin(data) {
			const res = await captchaLogin(data.phone, data.captcha)
			if (res.code === 200) {
				ElMessage.success('验证码验证成功')
				const res1 = await getUserMessages(data)
				this.profile = res1.profile
				const res2 = await getUserSongList(this.profile.userId)
				this.userPlaylist = res2.playlist
				this.loginDialogVisible = false
			} else {
				ElMessage.error('验证码错误')
				this.loginDialogVisible = true

			}
		},
		//登录状态
		async loginStatus() {
			const res = await loginStatus()
		}
	}
});