import myRequest from "./api"
// 获得用户信息
export function getMvAll(data) {
	return myRequest.request({
		url: '/mv/all',
		params: data
	})
}