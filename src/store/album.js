import { defineStore } from 'pinia'
import { getAlbumDetail } from '@/api/albumDetail';
import { getComment } from '@/api/comment';

export const albumStore = defineStore('album', {
	persist: true,
	state: () => {
		return {
			albumSongs: [],
			albumDetail: null,
			comments: []
		}
	},
	actions: {
		async getAlbumDetail(id) {
			const res = await getAlbumDetail(id)
			console.log(res);
			this.albumSongs = res.songs
			this.albumDetail = res.album
		},
		async getAlbumComment(id) {
			const res = await getComment({ type: 3, id })
			console.log(res);
			this.comments = res.data.comments
		}
	}
});