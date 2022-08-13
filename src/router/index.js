import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		redirect: '/music/newSongs'
	},
	{
		path: '/music',
		redirect: '/music/newSongs'
	},
	{
		path: '/search',
		redirect: '/search/song'
	},
	{
		path: '/playlistDetail',
		redirect: '/playlistDetail/song'
	},
	{
		path: '/singerDetail',
		redirect: '/singerDetail/hotSong'
	},
	{
		path: '/music',
		component: () => import('@/views/music/Music.vue'),
		children: [
			{
				path: 'newSongs',
				component: () => import('@/views/music/child/new-songs'),
			},
			{
				path: 'recommendPlaylist',
				component: () => import('@/views/music/child/recommend-playlist'),
			},
			{
				path: 'recommendMv',
				component: () => import('@/views/music/child/recommend-mv'),
			}
		]
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
		component: () => import('../views/playlist-detail/PlaylistDteail.vue'),
		children: [
			{
				path: 'song',
				component: () => import('../views/playlist-detail/child/playlist-song.vue')
			},
			{
				path: 'comment',
				component: () => import('../views/playlist-detail/child/playlist-comment.vue')
			}
		]
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
		component: () => import('../views/singer-detail/SingerDetail.vue'),
		children: [
			{
				path: 'hotSong',
				component: () => import('../views/singer-detail/child/singer-hot-song.vue')
			},
			{
				path: 'hotMv',
				component: () => import('../views/singer-detail/child/singer-hot-mv.vue')
			},
			{
				path: 'similar',
				component: () => import('../views/singer-detail/child/singer-similar.vue')
			},
			{
				path: 'introduce',
				component: () => import('../views/singer-detail/child/singer-introduce.vue')
			}
		]
	}

]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router
