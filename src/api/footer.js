import myRequest from "./api"

export function getSongUrl(id) {
	return myRequest.request({
		url: '/song/url',
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