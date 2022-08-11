import { defineStore } from 'pinia'
import { getRank } from '@/api/rank';
export const rankStore = defineStore('rank', {
	persist: true,
	state: () => {
		return {
			rankList: []
		}
	},
	actions: {
		async getRank() {
			const res = await getRank()
			this.rankList = res.list
		}
	}
});