import { defineStore } from 'pinia'
import { footerStore } from './footer'
import { getNewSongs, getRecommendPlaylist, getRecommendMv } from '@/api/music';
import { getSongUrl, getSongDetail } from '@/api/footer';

export const musicStore = defineStore('music', {
	persist: true,

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
		},

		async getSongUrl(id) {
			const footer = footerStore()
			const res = await getSongUrl(id)
			const song = await getSongDetail(id)
			footer.song = song.songs[0]
			footer.song.url = res.data[0].url

		}



	}

});