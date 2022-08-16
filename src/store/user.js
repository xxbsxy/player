import { defineStore } from 'pinia'
import { getUserMessages, getUserSongList, getUserDetail, UserLogout, getUserFolloweds, getUserFollows } from '@/api/user';
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
			userFollows: []
		}
	},
	actions: {
		async getUserMessages(account) {
			const res = await getUserMessages(account)
			console.log(res);
			this.profile = res.profile
			if (res.code === 200) {
				ElMessage.success('登录成功')
				const res1 = await getUserSongList(this.profile.userId)
				this.userPlaylist = res1.playlist
			} else {
				ElMessage.error('登录失败')
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
		}
	}
});