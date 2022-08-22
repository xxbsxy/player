import myRequest from "./api"
//获得歌单详情
export function getPlaylistDetail(id) {
	return myRequest.request({
		url: '/playlist/detail',
		params: {
			id
		}
	})
}
//获得歌曲详情
export function getSongDetail(ids) {
	return myRequest.request({
		url: '/song/detail',
		params: {
			ids
		}
	})
}
//获得歌单分类
export function getPlaylistSort(cat, offset) {
	return myRequest.request({
		url: '/top/playlist',
		params: {
			cat,
			offset
		}
	})
}