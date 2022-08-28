import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

const routes = [
	{
		path: '/',
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
				component: () => import('@/views/search/child/search-song'),
				meta: { activeName: 1 }
			},
			{
				path: 'mv',
				component: () => import('@/views/search/child/search-mv.vue'),
				meta: { activeName: 1004 }

			},
			{
				path: 'playlist',
				component: () => import('@/views/search/child/search-playlist.vue'),
				meta: { activeName: 1000 }

			},
			{
				path: 'album',
				component: () => import('@/views/search/child/search-album.vue'),
				meta: { activeName: 10 }
			}
		]
	},
	{
		path: '/playlistDetail',
		component: () => import('@/views/playlist-detail/PlaylistDteail.vue')

	},
	{
		path: '/playlistSort',
		component: () => import('@/views/playlist-sort/PlaylistSort.vue')
	},
	{
		path: '/rank',
		component: () => import('@/views/rank/Rank.vue')
	},
	{
		path: '/video',
		component: () => import('@/views/video/Video.vue')
	},
	{
		path: '/singerDetail',
		component: () => import('@/views/singer-detail/SingerDetail.vue')
	},
	{
		path: '/albumDetail',
		component: () => import('@/views/album-detail/AlbumDetail.vue')
	},
	{
		path: '/mvDetail',
		component: () => import('@/views/mv-detail/MvDteail.vue')
	},
	{
		path: '/userDetail',
		component: () => import('@/views/user-detail/UserDetail.vue')
	},
	{
		path: '/userFolloweds',
		component: () => import('@/views/user-detail/UserFolloweds.vue')
	},
	{
		path: '/userFollows',
		component: () => import('@/views/user-detail/UserFollows.vue')
	},
	{
		path: '/beautiful',
		component: () => import('@/views/beautiful/Beautiful.vue'),
	},
	{
		path: '/lyric',
		component: () => import('@/views/lyric/Lyric.vue'),
	},

]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router
