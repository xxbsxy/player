import myRequest from "./api"
// 获得专辑信息
export function getAlbumDetail(id) {
	return myRequest.request({
		url: '/album',
		params: {
			id
		}
	})
}
