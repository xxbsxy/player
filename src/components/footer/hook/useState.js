import { reactive } from 'vue'
//播放列表
const state = reactive({
	playlist: [
		{
			name: '留香',
			id: 1913262091,
			dt: 247901,
			al: {
				picUrl: 'http://p3.music.126.net/MGi2DhJTg3fowTNIrkT72A==/109951166953976034.jpg',
				name: '留香',
				id: 139094989
			},
			ar: [{ id: 5771, name: '许嵩' }],
			url: require('@/assets/img/footer/lx.mp3')
		},
		{
			name: '有何不可',
			id: 167876,
			dt: 241840,
			al: {
				picUrl: 'https://p1.music.126.net/KyBR4ZDYFlzQJE_uyvfjpA==/109951166118671647.jpg',
				name: '自定义',
				id: 16953
			},
			ar: [{ id: 5771, name: '许嵩' }],
			url: require('@/assets/img/footer/yhbk.mp3')
		},

		{
			name: '尘世美',
			id: 167755,
			dt: 260000,
			al: {
				picUrl: 'http://p4.music.126.net/VUtLfAqLDYMn2dfy0qlRkw==/109951166118678136.jpg',
				name: '半城烟沙',
				id: 16942
			},
			ar: [{ id: 5771, name: '许嵩' }],
			url: require('@/assets/img/footer/csm.mp3')
		}
	],
	currentIndex: 0
})
export default state