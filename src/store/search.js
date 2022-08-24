import { defineStore } from 'pinia'
import { getSearchResult } from '@/api/search';
export const searchStore = defineStore('search', {
	persist: true,
	state: () => {
		return {
			songs: [],
			songsTotal: 0,
			playlists: [],
			playlistsTotal: 0,
			mvs: [],
			mvsTotal: 0,
			albums: [],
			albumsTotal: 0

		}
	},
	actions: {
		async getSearchResult(data) {
			if (data.type === 1) {
				const res = await getSearchResult(data)
				this.songsTotal = res.result.songCount
				this.songs = res.result.songs
			} else if (data.type === 1000) {
				const res = await getSearchResult(data)
				this.playlists = res.result.playlists
				this.playlistsTotal = res.result.playlistCount

			} else if (data.type === 1004) {
				const res = await getSearchResult(data)
				this.mvs = res.result.mvs
				this.mvsTotal = res.result.mvCount
			} else {
				const res = await getSearchResult(data)
				this.albums = res.result.albums
				console.log(res);
				this.albumsTotal = res.result.albumCount

			}

		}
	}
});