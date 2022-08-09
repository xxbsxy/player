import { defineStore } from 'pinia'
import { getNewSongs, getRecommendPlaylist, getRecommendMv } from '@/api/music';
export const musicStore = defineStore('music', {
	state: () => {
		return {
			newSongs: [],
			recommendPlaylist: [],
			recommendMv: []

		}
	},
	actions: {
		async getNewSongs() {
			const res = await getNewSongs()
			this.newSongs = res.result
		},
		async getRecommendPlaylist() {
			const res = await getRecommendPlaylist()
			this.recommendPlaylist = res.result
		},
		async getRecommendMv() {
			const res = await getRecommendMv()
			this.recommendMv = res.data
		}
	}

});