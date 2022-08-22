import myRequest from "./api"
// 获得Mv分类
export function getMvAll(data) {
	return myRequest.request({
		url: '/mv/all',
		params: data
	})
}
// 获得Mv Url
export function getMvUrl(id) {
	return myRequest.request({
		url: '/mv/url',
		params: {
			id
		}
	})
}
// 获得Mv详情
export function getMvDetail(mvid) {
	return myRequest.request({
		url: '/mv/detail',
		params: {
			mvid
		}
	})
}
// 获得相似MV
export function getMvSimilar(mvid) {
	return myRequest.request({
		url: '/simi/mv',
		params: {
			mvid
		}
	})
}