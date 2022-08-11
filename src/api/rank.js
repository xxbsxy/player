
import myRequest from "./api"
// 获得用户信息
export function getRank() {
	return myRequest.request({
		url: '/toplist',
	})
}