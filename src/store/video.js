import { defineStore } from 'pinia'
import { getMvAll } from '@/api/video';
export const videoStore = defineStore('video', {
	persist: true,
	state: () => {
		return {
			mvs: []
		}
	},
	actions: {
		async getMvAll(value) {
			const res = await getMvAll(value)
			this.mvs = res.data

		}
	}
});