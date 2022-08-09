import myRequest from "./api"

export function getPlaylistDetail(id) {
	return myRequest.request({
		url: '/playlist/detail',
		params: {
			id
		}
	})
}
export function getSongDetail(ids) {
	return myRequest.request({
		url: '/song/detail',
		params: {
			ids
		}
	})
}