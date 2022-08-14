import myRequest from "./api"
// 获得用户信息
export function getMvAll(data) {
	return myRequest.request({
		url: '/mv/all',
		params: data
	})
}

export function getMvUrl(id) {
	return myRequest.request({
		url: '/mv/url',
		params: {
			id
		}
	})
}
export function getMvDetail(mvid) {
	return myRequest.request({
		url: '/mv/detail',
		params: {
			mvid
		}
	})
}
export function getMvSimilar(mvid) {
	return myRequest.request({
		url: '/simi/mv',
		params: {
			mvid
		}
	})
}