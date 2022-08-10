import { defineStore } from 'pinia'
import { getPlaylistDetail, getSongDetail, getPlaylistSort } from '@/api/playlist';
import { getComment } from '@/api/comment';
export const playlistStore = defineStore('playlist', {
	persist: true,
	state: () => {
		return {
			playlistDetail: null,
			songs: [],
			comments: [],
			playlists: []
		}
	},
	actions: {
		async getPlaylistDetail(id) {
			const res = await getPlaylistDetail(id)
			this.playlistDetail = res.playlist
			const idsArr = []
			res.playlist.trackIds.forEach(item => {
				idsArr.push(item.id)
			})
			const ids = idsArr.join(',')
			const songs = await getSongDetail(ids)
			this.songs = songs.songs
			const comment = await getComment({ id, type: 2 })
			this.comments = comment.data.comments
		},
		async getPlaylistSort(cat) {
			const res = await getPlaylistSort(cat)
			this.playlists = res.playlists
		}
	}
});