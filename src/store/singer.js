import { defineStore } from 'pinia'
import { getSingerDescription, getHotSong, getHotMv, getSingerSimilar, getSingerIntroduce } from '@/api/singer';
export const singerStore = defineStore('singer', {
	persist: true,
	state: () => {
		return {
			singer: null,
			hotSongs: [],
			mvs: [],
			singerSimilar: [],
			singerIntroduce: null
		}
	},
	actions: {
		async getSingerDescription(id) {
			const res = await getHotSong(id)
			this.hotSongs = res.hotSongs
			this.singer = res.artist
		},
		async getHotMv(id) {
			const res = await getHotMv(id)
			console.log(res);
			this.mvs = res.mvs
		},
		async getSingerSimilar(id) {
			const res = await getSingerSimilar(id)
			this.singerSimilar = res.artists
		},
		async getSingerIntroduce(id) {
			const res = await getSingerIntroduce(id)
			this.singerIntroduce = res
		}
	}

});