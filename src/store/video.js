import { defineStore } from 'pinia'
import { getMvAll, getMvUrl, getMvDetail, getMvSimilar } from '@/api/video';
import { getComment } from '@/api/comment';

export const videoStore = defineStore('video', {
	persist: true,
	state: () => {
		return {
			mvs: [],
			mvUrl: '',
			mvDetail: null,
			mvComments: [],
			mvSimilar: []
		}
	},
	actions: {
		async getMvAll(value) {
			const res = await getMvAll(value)
			this.mvs = res.data
		},
		async getMvUrl(id) {
			const res = await getMvUrl(id)
			this.mvUrl = res.data.url
		},
		async getMvDetail(id) {
			const res = await getMvDetail(id)
			this.mvDetail = res.data
		},
		async getMvComment(id) {
			const res = await getComment({ type: 1, id })
			this.mvComments = res.data.comments
		},
		async getMvSimilar(id) {
			const res = await getMvSimilar(id)
			this.mvSimilar = res.mvs
		}
	}

});