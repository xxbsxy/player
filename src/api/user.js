import myRequest from "./api"
// 获得用户信息
export function getUserMessages(account) {
	return myRequest.request({
		url: '/login/cellphone',
		method: 'post',
		data: account
	})
}