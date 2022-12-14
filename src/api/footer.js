import myRequest from "./api"
//获得歌曲url
export function getSongUrl(id) {
	return myRequest.request({
		url: '/song/url',
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
//获取歌词
export function getSongLyric(id) {
	return myRequest.request({
		url: '/lyric',
		params: {
			id
		}
	})
}