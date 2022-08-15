import { defineStore } from 'pinia'
import { getSongUrl, getSongDetail } from '@/api/footer';
export const footerStore = defineStore('footer', {
	persist: true,
	state: () => {
		return {
			song: {},
			state: {
				playlist: [
				],
				currentIndex: 0
			}
		}
	},
	actions: {
		async getSongUrl(id) {
			const res = await getSongUrl(id)
			const song = await getSongDetail(id)
			this.song = song.songs[0]
			this.song.url = res.data[0].url
		}
	}
});