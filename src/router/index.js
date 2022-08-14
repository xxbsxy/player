import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		path: '',
		redirect: '/music'
	},
	{
		path: '/search',
		redirect: '/search/song'
	},
	{
		path: '/music',
		component: () => import('@/views/music/Music.vue')
	},
	{
		path: '/search',
		component: () => import('@/views/search/Search'),
		children: [
			{
				path: 'song',
				component: () => import('../views/search/child/search-song'),
			},
			{
				path: 'mv',
				component: () => import('../views/search/child/search-mv.vue'),
			},
			{
				path: 'playlist',
				component: () => import('../views/search/child/search-playlist.vue')
			},
			{
				path: 'album',
				component: () => import('../views/search/child/search-album.vue')
			}
		]
	},
	{
		path: '/playlistDetail',
		component: () => import('../views/playlist-detail/PlaylistDteail.vue')

	},
	{
		path: '/playlistSort',
		component: () => import('../views/playlist-sort/PlaylistSort.vue')
	},

	{
		path: '/playlistQueue',
		component: () => import('../views/play-queue/PlayQueue.vue')
	},
	{
		path: '/rank',
		component: () => import('../views/rank/Rank.vue')
	},
	{
		path: '/video',
		component: () => import('../views/video/Video.vue')
	},
	{
		path: '/singerDetail',
		component: () => import('../views/singer-detail/SingerDetail.vue')
	},
	{
		path: '/albumDetail',
		component: () => import('../views/album-detail/AlbumDetail.vue')
	},
	{
		path: '/mvDetail',
		component: () => import('../views/mv-detail/MvDteail.vue')
	}

]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router
