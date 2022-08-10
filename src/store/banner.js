import { defineStore } from 'pinia'
import { getBanners } from '@/api/music';
export const bannerStore = defineStore('banner', {
	persist: true,
	state: () => {
		return {
			banners: []
		}
	},
	actions: {
		async getBanners() {
			const res = await getBanners()
			this.banners = res.banners
		}
	}

});