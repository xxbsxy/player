import { defineStore } from 'pinia'
import { getUserMessages } from '@/api/user';
export const userStore = defineStore('user', {
	persist: true,
	state: () => {
		return {
			profile: null
		}
	},
	actions: {
		async getUserMessages(account) {
			const res = await getUserMessages(account)
			this.profile = res.profile
		}
	}
});