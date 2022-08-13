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
			const res1 = await getHotMv(id)
			this.mvs = res1.mvs
			const res2 = await getSingerSimilar(id)
			this.singerSimilar = res2.artists
			const res3 = await getSingerIntroduce(id)
			this.singerIntroduce = res3
		},
		// async getHotMv(id) {
		// 	const res1 = await getHotMv(id)
		// 	this.mvs = res1.mvs
		// },
		// async getSingerSimilar(id) {
		// 	const res2 = await getSingerSimilar(id)
		// 	this.singerSimilar = res2.artists
		// },
		// async getSingerIntroduce(id) {
		// 	const res3 = await getSingerIntroduce(id)
		// 	this.singerIntroduce = res3
		// }
	}

});