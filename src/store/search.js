import { defineStore } from 'pinia'
import { getSearchResult } from '@/api/search';
export const searchStore = defineStore('search', {
	state: () => {
		return {
			songs: [],
			playlists: [],
			mvs: [],
			albums: []

		}
	},
	actions: {
		async getSearchResult(data) {
			if (data.type === 1) {
				const res = await getSearchResult(data)
				this.songs = res.result.songs
			} else if (data.type === 1000) {
				const res = await getSearchResult(data)
				this.playlists = res.result.playlists
			} else if (data.type === 1004) {
				const res = await getSearchResult(data)
				this.mvs = res.result.mvs
			} else {
				const res = await getSearchResult(data)
				this.albums = res.result.albums
			}

		}
	}
});