import { defineStore } from 'pinia'
import { getSongDetail, getSongLyric } from '@/api/footer';
import { getComment } from '@/api/comment';
export const footerStore = defineStore('footer', {
	persist: true,
	state: () => {
		return {
			song: {},
			isPlayQueue: false,
			state: {
				playlist: [],
				currentIndex: 0
			},
			lyrics: [],
			comments: [],
			time: 0
		}
	},
	actions: {
		async getSongUrl(id) {
			// console.log(id);
			// const res = await getSongUrl(id)
			// console.log(res);
			const song = await getSongDetail(id)
			this.song = song.songs[0]
			this.song.url = `http://music.163.com/song/media/outer/url?id=${id}.mp3`
		},
		async getSongLyric(id) {
			const res = await getSongLyric(id)
			this.lyric = res.lrc.lyric
			const res1 = await getComment({ id, type: 0 })
			this.comments = res1.data.comments
			let arr = this.lyric.split(/\n/gi)
			arr.length = arr.length - 1 // 处理最后一次换行为空
			let songWord = arr.map((v) => {
				let idx = v.indexOf(']')
				let time1 = v.slice(1, idx).trim().split(':')
				let time = Number((Number(time1[0]) * 60 + Number(time1[1])).toFixed(3))
				let msg = v.slice(idx + 1).trim()
				return {
					time,
					msg
				}
			})
			songWord.forEach((v, i, arr) => { // 处理歌词为空
				if (v.msg === '') {
					arr.splice(i, 1)
				}
			})
			this.lyrics = songWord;
		}
	}
})