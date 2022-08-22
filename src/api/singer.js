import myRequest from "./api"
//获得歌手详情
export function getSingerDescription(id) {
	return myRequest.request({
		url: '/artist/detail',
		params: {
			id
		}
	})
}
//获得歌手热门音乐
export function getHotSong(id) {
	return myRequest.request({
		url: '/artists',
		params: {
			id
		}
	})
}
//获得歌手热门MV
export function getHotMv(id) {
	return myRequest.request({
		url: '/artist/mv',
		params: {
			id
		}
	})
}

//获得歌手描述(奖项,经历)
export function getSingerIntroduce(id) {
	return myRequest.request({
		url: '/artist/desc',
		params: {
			id
		}
	})
}